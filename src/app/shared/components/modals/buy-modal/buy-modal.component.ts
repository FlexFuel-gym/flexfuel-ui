import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ButtonData, CityInfo, DeliveryCompany, Department} from "../../../interfaces";
import {NovaPoshtaService} from "../../../services/nova-poshta.service";
import {DELIVERY_COMPANIES} from "../../../enums";

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss']
})
export class BuyModalComponent implements OnInit {
  deliveryForm: FormGroup;

  deliveryAddresses: CityInfo[];
  deliveryDepartments: Department[];
  deliveryCompanies: DeliveryCompany[] = [
    {
      name: 'Нова Пошта',
      value: DELIVERY_COMPANIES.NOVA_POSHTA
    }
  ]

  buttonData: ButtonData = {
    text: 'Оформити замовлення',
    size: 'small',
    type: 'blue'
  };

  constructor(private novaPoshtaService: NovaPoshtaService) {
  }

  ngOnInit() {
    this.deliveryForm = new FormGroup<any>({
      fullName: new FormControl(undefined, [
        Validators.required
      ]),
      phoneNumber: new FormControl(undefined, [
        Validators.required
      ]),
      deliveryCompany: new FormControl(this.deliveryCompanies[0].value, [
        Validators.required
      ]),
      deliveryZIP: new FormControl(undefined, [
        Validators.required
      ]),
      deliveryWarehouseId: new FormControl(undefined, [
        Validators.required
      ]),
    })

    this.deliveryForm.controls['deliveryZIP'].valueChanges.subscribe({
      next: (deliveryAddress) => {
        this.novaPoshtaService.deliveryDepartments$.next([]);

        if (deliveryAddress) {
          this.novaPoshtaService.getDeliveryDepartments(deliveryAddress)
        } else {
          this.novaPoshtaService.getDeliveryAddresses('')
        }

        this.deliveryForm.get('deliveryWarehouseId')?.reset()
      }
    })

    this.novaPoshtaService.deliveryAddresses$.subscribe({
      next: (deliveryAddresses: CityInfo[]) => {
        this.deliveryAddresses = deliveryAddresses
      }
    })

    this.novaPoshtaService.deliveryDepartments$.subscribe({
      next: (deliveryDepartments: Department[]) => {
        this.deliveryDepartments = deliveryDepartments
      }
    })
  }

  /**
   *   Flow: "getDeliveryAddresses" calls when list was close and any item not selected
   *   event returns "undefined". If event is "close" and "deliveryAddress" not selected
   *   return all addresses
   */
  getDeliveryAddresses(event: { term: string, items: any[] } | undefined) {
    if (event === undefined && this.deliveryForm.get('deliveryZIP')?.value === undefined) {
      this.novaPoshtaService.cityName = '';
    }

    if (event?.term) {
      this.novaPoshtaService.cityName = event?.term;
    }
  }

  onSubmit() {
    if (this.deliveryForm.invalid) {
      return
    }

    const {fullName, phoneNumber, deliveryCompany, deliveryWarehouseId} = this.deliveryForm.value;

    const data = {
      fullName,
      phoneNumber,
      deliveryCompany,
      deliveryCityRef: this.novaPoshtaService.deliveryCityRef,
      deliveryWarehouse: deliveryWarehouseId.split('/')[1]
    }

    console.log(data)
  }
}

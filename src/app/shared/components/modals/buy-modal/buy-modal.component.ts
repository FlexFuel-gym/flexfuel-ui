import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ButtonData,
  BuyProduct,
  CityInfo,
  CustomerData,
  DeliveryCompany,
  Department, Product,
  Response
} from '../../../../core/interfaces';
import { NovaPoshtaService } from '../../../../core/services/nova-poshta.service';
import { DELIVERY_COMPANIES } from '../../../../core/enums';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss']
})
export class BuyModalComponent implements OnInit {
  @Input() productData: Product;
  @Output() onOrder = new EventEmitter()

  public deliveryForm: FormGroup;
  public deliveryAddresses: CityInfo[];
  public deliveryDepartments: Department[];
  public deliveryCompanies: DeliveryCompany[] = [
    {
      name: 'Нова Пошта',
      value: DELIVERY_COMPANIES.NOVA_POSHTA
    }
  ];

  public buttonData: ButtonData = {
    text: 'Оформити замовлення',
    size: 'small',
    type: 'blue'
  };

  constructor(
    private novaPoshtaService: NovaPoshtaService,
    private productsService: ProductsService
  ) {
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
      ])
    });

    this.detectDeliveryZIPChanges();

    this.novaPoshtaService.deliveryAddresses$.subscribe({
      next: (deliveryAddresses: CityInfo[]) => {
        this.deliveryAddresses = deliveryAddresses;
      }
    });

    this.novaPoshtaService.deliveryDepartments$.subscribe({
      next: (deliveryDepartments: Department[]) => {
        this.deliveryDepartments = deliveryDepartments;
      }
    });
  }

  /**
   *   Flow: "getDeliveryAddresses" calls when list was close and any item not selected
   *   event returns "undefined". If event is "close" and "deliveryAddress" not selected
   *   return all addresses
   */
  public getDeliveryAddresses(event: { term: string, items: any[] } | undefined) {
    if (event == null && this.deliveryForm.get('deliveryZIP')?.value == null) {
      this.novaPoshtaService.cityName = '';
    }

    if (event?.term) {
      this.novaPoshtaService.cityName = event?.term;
    }
  }

  public onSubmit() {
    if (this.deliveryForm.invalid) {
      return;
    }

    const { fullName, phoneNumber, deliveryCompany, deliveryWarehouseId } = this.deliveryForm.value;

    const customerData: CustomerData = {
      fullName,
      phoneNumber,
      deliveryCompany,
      deliveryCityRef: this.novaPoshtaService.deliveryCityRef,
      deliveryWarehouse: deliveryWarehouseId.split('/')[1]
    };

    this.productsService.buyProduct(this.productData.id!, customerData).subscribe({
      next: (response: Response<BuyProduct>) => {
        this.onOrder.emit(response.data);
      }
    });
  }

  private detectDeliveryZIPChanges() {
    this.deliveryForm.controls['deliveryZIP'].valueChanges.subscribe({
      next: (deliveryAddress) => {
        this.novaPoshtaService.deliveryDepartments$.next([]);

        if (deliveryAddress) {
          this.novaPoshtaService.getDeliveryDepartments(deliveryAddress);
        } else {
          this.novaPoshtaService.getDeliveryAddresses('');
        }

        this.deliveryForm.get('deliveryWarehouseId')?.reset();
      }
    });
  }
}

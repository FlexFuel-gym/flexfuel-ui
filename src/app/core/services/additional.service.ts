import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdditionalService {
  public scrollTop() {
    scroll({ top: 0 });
  }
}

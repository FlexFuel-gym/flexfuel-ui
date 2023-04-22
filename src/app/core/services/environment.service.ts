import { Injectable } from '@angular/core';
import { Environment } from '../interfaces';
import { environment } from '../../../environments/environment.qa';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  public readonly environment: Environment;

  constructor() {
    this.environment = environment;
  }
}

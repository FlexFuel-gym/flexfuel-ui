/** Response */
export interface NovaPoshtaResponse<T> {
  success: boolean;
  data: T;
  errors: any[];
  warnings: any[];
  info: Info;
  messageCodes: any[];
  errorCodes: any[];
  warningCodes: any[];
  infoCodes: any[];
}

export interface Response<T> {
  data: T;
  success: boolean;
}

/** Interfaces */
export interface Achievement {
  image: string;
  title: string;
  description: string;
}

export interface Exercises {
  image: string;
  title: string;
  description: string;
}

export interface Product {
  id?: string;
  name: string;
  description: string;
  images: string[];
  price: number;
}

export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface ProductResponse {
  product: Product;
}

export interface ProductsResponse {
  products: Product[];
  pagination: Pagination;
}

export interface BuyProduct {
  customer: CustomerData;
  order: Order;
}

export interface CustomerData {
  id?: string;
  fullName: string;
  phoneNumber: string;
  deliveryCompany: string;
  deliveryCityRef: string;
  deliveryWarehouse: string;
}

export interface Order {
  id: string;
  productId: string;
  customerId: string;
}

export interface DeliveryCompany {
  name: string;
  value: string;
}

export interface RouterData {
  name: string;
  link: string;
}

export interface ButtonData {
  text: string;
  size: 'small' | 'medium' | 'large' | 'wide';
  type: 'blue' | 'blue-with-border';
}

export interface Environment {
  production: boolean;
  apiUrl: string;
}

export interface CoachResponse {
  coaches: CoachData[];
}

export interface CoachData {
  id: string;
  image: string;
  fullName: string;
  description: string;
  pricePerLesson: number;
  schedule: CoachSchedule[];
}

export interface CoachSchedule {
  periodOfTime: string;
  isAvailable: boolean;
}

/** Nova Poshta */
export interface CityInfo {
  Ref: string;
  SettlementType: string;
  Latitude: string;
  Longitude: string;
  Description: string;
  DescriptionRu: string;
  DescriptionTranslit: string;
  SettlementTypeDescription: string;
  SettlementTypeDescriptionRu: string;
  SettlementTypeDescriptionTranslit: string;
  Region: string;
  RegionsDescription: string;
  RegionsDescriptionRu: string;
  RegionsDescriptionTranslit: string;
  Area: string;
  AreaDescription: string;
  AreaDescriptionRu: string;
  AreaDescriptionTranslit: string;
  Index1: string;
  Index2: string;
  IndexCOATSU1: string;
  Delivery1: string;
  Delivery2: string;
  Delivery3: string;
  Delivery4: string;
  Delivery5: string;
  Delivery6: string;
  Delivery7: string;
  SpecialCashCheck: number;
  Warehouse: string;
}

export interface Department {
  SiteKey: string;
  Description: string;
  DescriptionRu: string;
  ShortAddress: string;
  ShortAddressRu: string;
  Phone: string;
  TypeOfWarehouse: string;
  Ref: string;
  Number: string;
  CityRef: string;
  CityDescription: string;
  CityDescriptionRu: string;
  SettlementRef: string;
  SettlementDescription: string;
  SettlementAreaDescription: string;
  SettlementRegionsDescription: string;
  SettlementTypeDescription: string;
  SettlementTypeDescriptionRu: string;
  Longitude: string;
  Latitude: string;
  PostFinance: string;
  BicycleParking: string;
  PaymentAccess: string;
  POSTerminal: string;
  InternationalShipping: string;
  SelfServiceWorkplacesCount: string;
  TotalMaxWeightAllowed: string;
  PlaceMaxWeightAllowed: string;
  SendingLimitationsOnDimensions: SendingLimitationsOnDimensions;
  ReceivingLimitationsOnDimensions: ReceivingLimitationsOnDimensions;
  Reception: Reception;
  Delivery: Delivery;
  Schedule: Schedule;
  DistrictCode: string;
  WarehouseStatus: string;
  WarehouseStatusDate: string;
  CategoryOfWarehouse: string;
  Direct: string;
  RegionCity: string;
  WarehouseForAgent: string;
  GeneratorEnabled: string;
  MaxDeclaredCost: string;
  WorkInMobileAwis: string;
  DenyToSelect: string;
  CanGetMoneyTransfer: string;
  OnlyReceivingParcel: string;
  PostMachineType: string;
  PostalCodeUA: string;
  WarehouseIndex: string;
}

export interface Info {
  totalCount: number;
}

export interface SendingLimitationsOnDimensions {
  Width: number;
  Height: number;
  Length: number;
}

export interface ReceivingLimitationsOnDimensions {
  Width: number;
  Height: number;
  Length: number;
}

export interface Reception {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

export interface Delivery {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

export interface Schedule {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

export interface Settlements {
  TotalCount: number;
  Addresses: Address[];
}

export interface Address {
  Present: string;
  Warehouses: number;
  MainDescription: string;
  Area: string;
  Region: string;
  SettlementTypeCode: string;
  Ref: string;
  DeliveryCity: string;
  AddressDeliveryAllowed: boolean;
  StreetsAvailability: boolean;
  ParentRegionTypes: string;
  ParentRegionCode: string;
  RegionTypes: string;
  RegionTypesCode: string;
}

export interface CoachOrderResponse {
  id: string;
  customerId: string;
  coachId: string;
}

export interface CustomerOrderResponse {
  id: string;
  date: string;
  fullName: string;
  phoneNumber: string;
  periodOfTime: string;
}

export interface RegisterToCoachResponse {
  customer: CustomerOrderResponse;
  order: CoachOrderResponse;
}

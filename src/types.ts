export type ProductType = 'shirt' | 'cap'; export type ShirtSize = 'S'|'M'|'L'|'XL'|'XXL';
export type MerchandiseProduct = { id:string; productType:ProductType; productName:string; productCode:string; designCode:string; colourScheme:string; shortDescription:string; fullDescription:string; features:string[]; mainImage:string; galleryImages:string[]; active:boolean; displayOrder:number };
export type MemberInformation = { profileName:string; minerId:string; email:string; phone:string; country:string; addressLine1:string; addressLine2:string; city:string; stateRegion:string; postalCode:string };
export type ShirtSelection = { variantId:string; productCode:string; designCode:string; colourScheme:string; size:ShirtSize; quantity:number }; export type CapSelection = { variantId:string; productCode:string; designCode:string; colourScheme:string; quantity:number };
export type OrderState = { orderReference:string; member:MemberInformation; shirt:ShirtSelection|null; cap:CapSelection|null };

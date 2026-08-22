export type ProductType = 't-shirt' | 'corporate-shirt' | 'hoodie' | 'cap';
export type ClothingSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type MerchandiseProduct = { id:string; productType:ProductType; productName:string; productCode:string; designCode:string; colourScheme:string; shortDescription:string; fullDescription:string; features:string[]; mainImage:string; hoverImage:string; galleryImages:string[]; active:boolean; displayOrder:number };
export type MemberInformation = { profileName:string; minerId:string; email:string; phone:string; country:string; addressLine1:string; addressLine2:string; city:string; stateRegion:string; postalCode:string };
export type MerchandiseSelection = { variantId:string; productType:ProductType; productCode:string; designCode:string; colourScheme:string; size:ClothingSize|null; quantity:number };
export type OrderState = { orderReference:string; member:MemberInformation; selections:Partial<Record<ProductType,MerchandiseSelection>> };

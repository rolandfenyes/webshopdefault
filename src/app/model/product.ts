export class ProductDTO {
  id: number;
  productName: string;
  priceInHUF: number;
  description: string;
  pictureURLs: PictureURLDTO[];
  dimensions: DimensionsDTO;
  amount: number;
}

export class DimensionsDTO {
  id: number;
  productId: number;
  widthInMetre: number;
  heightInMetre: number;
  depthInMetre: number;
  weightInKg: number;
  material: string;
}

export class PictureURLDTO {
  id: number;
  productId: number;
  url: string;
}

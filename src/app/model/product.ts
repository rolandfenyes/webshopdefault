export class ProductDTO {
  id: number;
  name: string;
  price: number;
  description?: string;
  images?: PictureURLDTO[];
  dimensions?: DimensionsDTO;
  amount: number;
  category = 'Fa';
}

export class DimensionsDTO {
  widthInMetre?: number;
  heightInMetre?: number;
  depthInMetre?: number;
  weightInKg?: number;
  material?: string;
  id?: number;
}

export class PictureURLDTO {
  url: string;
  id: number;
}

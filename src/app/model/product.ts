export class ProductDTO {
  id: number;
  name: string;
  price: number;
  description: string;
  playGroundImgs: PictureURLDTO[];
  dimensions?: DimensionsDTO;
  amount: number;
  categoryType = 'Fa';
}

export class DimensionsDTO {
  widthInMetre: number;
  heightInMetre: number;
  depthInMetre: number;
  weightInKg: number;
  material: string;
  playGroundID: number;
  id: number;
}

export class PictureURLDTO {
  url: string;
  id: number;
}

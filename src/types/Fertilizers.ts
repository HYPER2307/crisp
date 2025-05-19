export interface IFertilizersResponse {
  data: IFertilizer[],
  "meta": {
    "pagination": {
        "page": number,
        "pageSize": number,
        "pageCount": number,
        "total": number
    }
  }
}

export interface IFertilizer {
  "id": number,
  "documentId": string,
  "createdAt": string,
  "updatedAt": string,
  "publishedAt": string,
  type: string;
  method: string;
  speed: string;
  solubility: string;
  volume: string;
  usingPeriod: string;
  name: string;
  descriptionTitle: string;
  descriptionText: string;
  origin: string;
  acidity: string;
  productId: string;
  price: number;
  fullPrice: number;
  category: string;
  categoryId: string;
  mainImage: {
    alternativeText: string;
    url: string;
  };
};

export interface ICurrentFertilizerResponse {
  data: IFertilizer,
}
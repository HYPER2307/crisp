export type Sizes = 'mini' | 'small' | 'medium' | 'large';

export interface Product {
  "id": number,
  "documentId": string,
  "name": string,
  "createdAt": string,
  "updatedAt": string,
  "publishedAt": string,
  "color": string,
  "size": Sizes,
  "soil": string,
  "frequencyWatering": string,
  "sun": string,
  "humidity": string,
  "fertilizer": string,
  "type": string,
  "descriptionTitle": string,
  "descriptionText": string,
  "productId": string,
  "price": number,
  "fullPrice": number,
  category: string;
  categoryId: string;
  mainImage: string;
}

export interface IProductResponse {
  data: Product[],
  "meta": {
    "pagination": {
        "page": number,
        "pageSize": number,
        "pageCount": number,
        "total": number
    }
  }
}

export interface ICurrentProductResponse {
  "data": Product,
}

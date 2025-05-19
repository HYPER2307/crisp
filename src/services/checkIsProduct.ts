// якщо окремий файл
import { Product } from '../types/Product';

export function isProduct(obj: unknown): obj is Product {
  if (typeof obj !== 'object' || obj === null) return false;

  const p = obj as Record<string, any>;

  return (
    typeof p.id === 'number' &&
    typeof p.documentId === 'string' &&
    typeof p.name === 'string' &&
    typeof p.createdAt === 'string' &&
    typeof p.updatedAt === 'string' &&
    typeof p.publishedAt === 'string' &&
    typeof p.color === 'string' &&
    typeof p.size === 'string' && // Якщо Sizes — це union string type
    typeof p.soil === 'string' &&
    typeof p.frequencyWatering === 'string' &&
    typeof p.sun === 'string' &&
    typeof p.humidity === 'string' &&
    typeof p.fertilizer === 'string' &&
    typeof p.type === 'string' &&
    typeof p.descriptionTitle === 'string' &&
    typeof p.descriptionText === 'string' &&
    typeof p.productId === 'string' &&
    typeof p.price === 'number' &&
    typeof p.fullPrice === 'number' &&
    typeof p.category === 'string' &&
    typeof p.categoryId === 'string' &&
    typeof p.mainImage === 'object' &&
    typeof p.mainImage.alternativeText === 'string' &&
    typeof p.mainImage.url === 'string'
  );
}

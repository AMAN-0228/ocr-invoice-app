// lib/api/invoice.ts
import { ENDPOINTS } from '../../lib/api/endpoints';
import { apiGet, apiPost } from '../../lib/api/client';
// import { Invoice } from '@/types/invoice';

export const createInvoice = (data) => {
  return apiPost(ENDPOINTS.INVOICE.ROOT, data);
};

export const fetchInvoices = () => {
  return apiGet(ENDPOINTS.INVOICE.ROOT);
};

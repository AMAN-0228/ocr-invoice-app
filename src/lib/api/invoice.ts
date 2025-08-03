import { apiGet, apiPost } from './client';
import { INVOICE } from './endpoints';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  vendor: string;
  total: string;
  // Add more fields as needed
}

export interface CreateInvoicePayload {
  file: File;
  // Add more fields as needed
}

export async function fetchInvoices(): Promise<Invoice[]> {
  return apiGet<Invoice[]>(INVOICE.LIST);
}

export async function createInvoice(payload: FormData): Promise<Invoice> {
  // For file upload, use FormData and set headers in the component
  return apiPost<Invoice>(INVOICE.CREATE, payload, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}
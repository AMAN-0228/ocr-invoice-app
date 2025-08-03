// lib/api/endpoints.ts
export const API_BASE = '/api';

export const INVOICE = {
  ROOT: `${API_BASE}/invoices`,
  CREATE: `${API_BASE}/invoices`, // POST
  LIST: `${API_BASE}/invoices`,   // GET
  DETAIL: (id: string) => `${API_BASE}/invoices/${id}`,
};

// Add more endpoint groups as needed

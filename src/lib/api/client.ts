// lib/api/client.ts
import axiosInstance from './axios';

function extractErrorMessage(error: any): string {
  if (error.response?.data?.message) return error.response.data.message;
  if (error.response?.data?.error) return error.response.data.error;
  if (error.message) return error.message;
  return 'An unknown error occurred';
}

export async function apiGet<T>(url: string, config = {}): Promise<T> {
  try {
    const response = await axiosInstance.get<T>(url, config);
    return response.data;
  } catch (error) {
    throw new Error(extractErrorMessage(error));
  }
}

export async function apiPost<T>(url: string, data?: any, config = {}): Promise<T> {
  try {
    const response = await axiosInstance.post<T>(url, data, config);
    return response.data;
  } catch (error) {
    throw new Error(extractErrorMessage(error));
  }
}

export async function apiPut<T>(url: string, data?: any, config = {}): Promise<T> {
  try {
    const response = await axiosInstance.put<T>(url, data, config);
    return response.data;
  } catch (error) {
    throw new Error(extractErrorMessage(error));
  }
}

export async function apiDelete<T>(url: string, config = {}): Promise<T> {
  try {
    const response = await axiosInstance.delete<T>(url, config);
    return response.data;
  } catch (error) {
    throw new Error(extractErrorMessage(error));
  }
}

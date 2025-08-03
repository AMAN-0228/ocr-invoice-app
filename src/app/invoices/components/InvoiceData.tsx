"use client";
import React from "react";
import { Label } from "@/components/ui/label";

interface ExtractedData {
  invoiceNumber?: string;
  date?: string;
  total?: string;
  vendor?: string;
  items?: Array<{
    description: string;
    quantity: number;
    price: number;
    total: number;
  }>;
}

export function InvoiceExtractedDataSection({ extractedData }: { extractedData: ExtractedData | null }) {
  return (
    <div className="flex-1 flex flex-col h-full p-8 overflow-y-auto" aria-live="polite" aria-busy={!extractedData}>
      <h2 className="text-2xl font-bold mb-4">Extracted Data</h2>
      {!extractedData ? (
        <div className="text-muted-foreground flex-1 flex items-center justify-center text-lg">No data extracted yet.</div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Invoice Number</Label>
              <div className="border rounded p-2 bg-background">{extractedData.invoiceNumber}</div>
            </div>
            <div>
              <Label>Date</Label>
              <div className="border rounded p-2 bg-background">{extractedData.date}</div>
            </div>
            <div>
              <Label>Vendor</Label>
              <div className="border rounded p-2 bg-background">{extractedData.vendor}</div>
            </div>
            <div>
              <Label>Total</Label>
              <div className="border rounded p-2 bg-background">{extractedData.total}</div>
            </div>
          </div>
          {extractedData.items && extractedData.items.length > 0 && (
            <div>
              <Label>Items</Label>
              <div className="border rounded p-2 bg-background">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left">Description</th>
                      <th className="text-right">Qty</th>
                      <th className="text-right">Price</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extractedData.items.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.description}</td>
                        <td className="text-right">{item.quantity}</td>
                        <td className="text-right">${item.price.toFixed(2)}</td>
                        <td className="text-right">${item.total.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
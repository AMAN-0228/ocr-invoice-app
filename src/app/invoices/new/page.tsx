"use client";

import React, { useState, useRef } from "react";
import { Suspense } from "react";
import { UploadSection } from "../components/UploadSection";
import { InvoiceExtractedDataSection } from "../components/InvoiceData";

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

export default function NewInvoicePage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      console.log('________ select', { selectedFile });
      
      setFile(selectedFile);
      setRotation(0);
      if (selectedFile.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (ev) => setPreview(ev.target?.result as string);
        reader.readAsDataURL(selectedFile);
      } else if (selectedFile.type === "application/pdf") {
        setPreview(URL.createObjectURL(selectedFile));
      } else {
        setPreview(null);
      }
      // Mock extraction (replace with real API call)
      setTimeout(() => {
        setExtractedData({
          invoiceNumber: "INV-2024-001",
          date: "2024-05-01",
          total: "$1,234.56",
          vendor: "Sample Vendor",
          items: [
            { description: "Item 1", quantity: 2, price: 100, total: 200 },
            { description: "Item 2", quantity: 1, price: 1034.56, total: 1034.56 },
          ],
        });
      }, 1000);
    }
  };

  const handleDelete = () => {
    setFile(null);
    setPreview(null);
    setExtractedData(null);
    setRotation(0);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleRotate = () => {
    setRotation((r) => (r + 90) % 360);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full">
      <UploadSection
        file={file}
        preview={preview}
        rotation={rotation}
        inputRef={inputRef}
        onFileInput={handleFileInput}
        onDelete={handleDelete}
        onRotate={handleRotate}
      />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center"><span className="text-muted-foreground">Loading extracted data...</span></div>}>
        <InvoiceExtractedDataSection extractedData={extractedData} />
      </Suspense>
    </div>
  );
}
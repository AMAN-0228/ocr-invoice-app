"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, RotateCcw, FileText, Upload } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UploadSectionProps {
  file: File | null;
  preview: string | null;
  rotation: number;
  inputRef: React.RefObject<HTMLInputElement>;
  onFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
  onRotate: () => void;
}

export function UploadSection({
  file,
  preview,
  rotation,
  inputRef,
  onFileInput,
  onDelete,
  onRotate,
}: UploadSectionProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-muted/40 relative overflow-hidden">
      {!file ? (
        <div
          className="flex flex-col items-center justify-center h-full w-full cursor-pointer hover:bg-muted/60 transition-colors"
          onClick={() => inputRef.current && inputRef.current.click()}
          tabIndex={0}
          role="button"
          aria-label="Upload Invoice (PDF or Image)"
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              inputRef.current && inputRef.current.click();
            }
          }}
        >
          <Upload className="h-12 w-12 text-primary mb-4" />
          <Label className="mb-2 text-lg font-semibold">Upload Invoice (PDF or Image)</Label>
          <Input
            id="file-upload"
            ref={inputRef}
            type="file"
            accept=".pdf,image/*"
            onChange={onFileInput}
            className="w-64 hidden"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full relative">
          {/* Preview */}
          {file.type.startsWith("image/") && preview && (
            <img
              src={preview}
              alt="Preview"
              style={{ maxHeight: "80%", maxWidth: "90%", transform: `rotate(${rotation}deg)` }}
              className="rounded shadow-lg object-contain"
            />
          )}
          {file.type === "application/pdf" && preview && (
            <embed
              src={preview}
              type="application/pdf"
              className="w-full h-[80%] rounded shadow-lg"
            />
          )}
          {/* Overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={onDelete} className="text-red-400 hover:text-red-600">
                <Trash2 className="h-5 w-5" />
              </Button>
              {file.type.startsWith("image/") && (
                <Button variant="ghost" size="icon" onClick={onRotate} className="text-blue-300 hover:text-blue-500">
                  <RotateCcw className="h-5 w-5" />
                </Button>
              )}
            </div>
            <span className="truncate max-w-[60%] text-sm flex items-center">
              <FileText className="h-4 w-4 mr-1" /> {file.name}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
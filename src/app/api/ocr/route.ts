import { NextRequest, NextResponse } from 'next/server';
import { DocumentProcessorServiceClient } from '@google-cloud/documentai';
import { writeFile } from 'fs/promises';
import { getGoogleOcrCredential } from '@/lib/api/googleCredentials';
import ocrService from '@/service/ocrService';

export async function POST(request: NextRequest) {
  try {
    
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const extractedData = await ocrService.extractData({ file }, {});
    
    return NextResponse.json(
      { data: extractedData, message: 'successfully extracted' },
      { status: 200 }
    );

  } catch (error) {
    console.error('OCR processing error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

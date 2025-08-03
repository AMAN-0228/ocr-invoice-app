import { getGoogleOcrCredential, getProcessorPath } from "@/lib/api/googleCredentials";
import { DocumentProcessorServiceClient } from "@google-cloud/documentai";

export function extractHeaderFieldsFromDocument(document: any) {
  // const keyMap: Record<string, string> = {
  //   invoice_id: "invoiceNumber",
  //   invoice_date: "invoiceDate",
  //   due_date: "dueDate",
  //   supplier_name: "vendorName",
  //   customer_name: "buyerName",
  //   total_amount: "totalAmount",
  //   gst_number: "gst",
  //   purchase_order: "purchaseOrderNumber",
  // };

  const header: Record<string, string> = {};
  console.log('__________ extracting header');
  
  for (const entity of document?.entities || []) {
    
    const type = entity?.type?.toLowerCase();
    console.log('_________ 1', type);
    console.dir( entity, { depth: null });
    
    const value = entity?.mentionText || entity?.normalizedValue?.text || "";

    const key = type;
    // const key = keyMap[type];
    if (key && value) {
      header[key] = value;
    }
  }

  return header;
}

export function extractLineItemsFromEntities(entities: any[]) {
  const lineItems: Record<string, string>[] = [];

  for (const entity of entities || []) {
    if (entity.type === "line_item") {
      const item: Record<string, string> = {};
      for (const prop of entity.properties || []) {
        const key = prop.type?.toLowerCase()
        const value = prop.mentionText || prop.normalizedValue?.text || "";
        if (key && value) item[key] = value;
      }
      lineItems.push(item);
    }
  }

  return lineItems;
}


const extractData = async (values, auth) => {
  try {
    const { file } = values;

    const allowedTypes = [
      'application/pdf',
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/gif',
      'image/bmp'
    ];

    if (!allowedTypes.includes(file.type)) {
      // return NextResponse.json(
      //   { error: 'Invalid file type. Only PDF and image files are allowed.' },
      //   { status: 400 }
      // );
      throw new Error('Invalid file type. Only PDF and image files are allowed.');
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      // return NextResponse.json(
      //   { error: 'File size too large. Maximum size is 10MB.' },
      //   { status: 400 }
      // );
      throw new Error('File size too large. Maximum size is 10MB.');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes).toString('base64');

    const credentials = getGoogleOcrCredential();
    const client = new DocumentProcessorServiceClient({
      credentials,
      projectId: credentials.project_id,
    });

    const processorPath = getProcessorPath(client, credentials);

    const [result] = await client.processDocument({
      name: processorPath,
      rawDocument: {
        content: buffer,
        mimeType: file.type,
      }
    })
    console.log('result is coming',result);
    const document = result.document;
    const pages = document?.pages || [];
    // const tables = pages.flatMap((page: any) => page.tables || []);

    const headerDetails = extractHeaderFieldsFromDocument(document);
    const lineItems = extractLineItemsFromEntities(document?.entities)

    return {
      headerDetails,
      lineItems
    }
  } catch (error) {
    console.error('Error extracting data:', error);
    throw error;
  }
}

// Attach all functions to service
const ocrService = {
  extractData,
  extractHeaderFieldsFromDocument,
};

export default ocrService;
import { config } from '../config';

const processorId = '';

export function getGoogleOcrCredential() {
  const base64_key:string = config.GOOGLE_OCR_CREDENTIALS;

  if (!base64_key) throw new Error('Google ocr credentials are missing');

  const json = Buffer.from(base64_key, 'base64').toString('utf-8');

  return JSON.parse(json);
}

export function getProcessorPath(client: any, credentials: { project_id: string, }) {
  const processorId = config.GOOGLE_OCR_PROCESSOR_ID;
  return client.processorPath(credentials.project_id, 'us',processorId );
}
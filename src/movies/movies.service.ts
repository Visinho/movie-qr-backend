import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class MoviesService {
  generateQRCode(data: string): Promise<string> {
    return QRCode.toDataURL(data);
  }
}

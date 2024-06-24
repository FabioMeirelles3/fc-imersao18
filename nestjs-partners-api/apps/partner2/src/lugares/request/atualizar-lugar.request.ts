import { PartialType } from '@nestjs/mapped-types';
import { CriarLugarRequest } from './criar-lugar.request';

export class UpdateSpotRequest extends PartialType(CriarLugarRequest) {}

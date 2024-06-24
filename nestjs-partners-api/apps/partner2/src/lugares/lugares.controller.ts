import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpotsService } from '@app/core/spots/spots.service';
import { CriarLugarRequest } from './request/criar-lugar.request';
import { UpdateSpotRequest } from './request/atualizar-lugar.request';

@Controller('eventos/:eventoId/lugares')
export class LugaresController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() criarLugarRequest: CriarLugarRequest,
    @Param('eventoId') eventoId: string,
  ) {
    return this.spotsService.create({
      eventId: eventoId,
      name: criarLugarRequest.nome,
    });
  }

  @Get()
  findAll(@Param('eventoId') eventoId: string) {
    return this.spotsService.findAll(eventoId);
  }

  @Get(':lugarId')
  findOne(
    @Param('lugarId') lugarId: string,
    @Param('eventoId') eventoId: string,
  ) {
    return this.spotsService.findOne(eventoId, lugarId);
  }

  @Patch(':lugarId')
  update(
    @Param('lugarId') lugarId: string,
    @Param('eventoId') eventoId: string,
    @Body() atualizarLugarRequest: UpdateSpotRequest,
  ) {
    return this.spotsService.update(eventoId, lugarId, {
      name: atualizarLugarRequest.nome,
    });
  }

  @Delete(':lugarId')
  remove(
    @Param('lugarId') lugarId: string,
    @Param('eventoId') eventoId: string,
  ) {
    return this.spotsService.remove(eventoId, lugarId);
  }
}

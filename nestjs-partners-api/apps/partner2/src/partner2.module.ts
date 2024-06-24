import { PrismaModule } from '@app/core/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventosModule } from './eventos/eventos.module';
import { LugaresModule } from './lugares/lugares.module';
import { AuthGuard } from '@app/core/auth/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.partner2', isGlobal: true }),
    PrismaModule,
    AuthGuard,
    EventosModule,
    LugaresModule,
  ],
})
export class Partner2Module {}

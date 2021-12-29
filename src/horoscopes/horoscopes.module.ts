import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HoroscopesService } from './horoscopes.service';
import { HoroscopesController } from './horoscopes.controller';
import { HoroscopeSchema } from './horoscope.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Horoscope', schema: HoroscopeSchema }]),
  ],
  providers: [HoroscopesService],
  controllers: [HoroscopesController],
})
export class HoroscopesModule {}

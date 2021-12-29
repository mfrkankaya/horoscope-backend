import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HoroscopesModule } from './horoscopes/horoscopes.module';
import { AnalyzesModule } from './analyzes/analyzes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HoroscopesModule,
    MongooseModule.forRoot(process.env.MONGO),
    AnalyzesModule,
  ],
})
export class AppModule {}

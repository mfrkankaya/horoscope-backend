import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { HoroscopesModule } from './horoscopes/horoscopes.module';
import { AnalyzesModule } from './analyzes/analyzes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    HoroscopesModule,
    AnalyzesModule,
    MongooseModule.forRoot(process.env.MONGO),
  ],
})
export class AppModule {}

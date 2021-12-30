import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { HoroscopesModule } from './horoscopes/horoscopes.module';
import { AnalyzesModule } from './analyzes/analyzes.module';
import { ValidateAdminMiddleware } from './common/middleware/validate-admin.middleware';
import { HoroscopesController } from './horoscopes/horoscopes.controller';
import { AnalyzesController } from './analyzes/analyzes.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    HoroscopesModule,
    AnalyzesModule,
    MongooseModule.forRoot(process.env.MONGO),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateAdminMiddleware)
      .exclude(
        { path: 'horoscopes', method: RequestMethod.GET },
        { path: 'horoscopes/:horoscopeId', method: RequestMethod.GET },
        { path: 'analyzes', method: RequestMethod.GET },
        { path: 'analyzes/random', method: RequestMethod.GET },
        { path: 'analyzes/:analysisId', method: RequestMethod.GET },
      )
      .forRoutes(HoroscopesController, AnalyzesController);
  }
}

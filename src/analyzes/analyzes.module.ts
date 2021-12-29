import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalysisSchema } from './analysis.model';
import { AnalyzesController } from './analyzes.controller';
import { AnalyzesService } from './analyzes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Analysis', schema: AnalysisSchema }]),
  ],
  controllers: [AnalyzesController],
  providers: [AnalyzesService],
})
export class AnalyzesModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AnalyzesService } from './analyzes.service';

@Controller('analyzes')
export class AnalyzesController {
  constructor(private readonly analyzesService: AnalyzesService) {}

  @Get()
  getAnalyzes() {
    return this.analyzesService.getAnalyzes();
  }

  @Get('random')
  getRandomAnalysis() {
    return this.analyzesService.getRandomAnalysis();
  }

  @Post()
  addAnalysis(@Body('text') text: string) {
    return this.analyzesService.addAnalysis(text);
  }

  @Put('/:analysisId')
  updateAnalysis(
    @Param('analysisId') analysisId: string,
    @Body('text') text: string,
  ) {
    return this.analyzesService.updateAnalysis(analysisId, text);
  }

  @Delete('/:analysisId')
  removeAnalysis(@Param('analysisId') analysisId: string) {
    return this.analyzesService.removeAnalysis(analysisId);
  }
}

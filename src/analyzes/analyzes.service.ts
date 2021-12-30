import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Analysis } from './analysis.model';
import { mapAnalysis } from './analyzes.utils';

@Injectable()
export class AnalyzesService {
  constructor(
    @InjectModel('Analysis') private readonly analysisModel: Model<Analysis>,
  ) {}

  async getAnalyzes() {
    const analyzes = await this.analysisModel.find();
    return analyzes.map(mapAnalysis);
  }

  async getRandomAnalysis() {
    const count = await this.analysisModel.count().exec();
    const random = Math.floor(Math.random() * count);
    const doc = await this.analysisModel.findOne().skip(random).exec();

    return doc;
  }

  async addAnalysis(text: string) {
    const doc = new this.analysisModel({ text });
    await doc.save();
    return mapAnalysis(doc);
  }

  async updateAnalysis(analysisId: string, text: string) {
    const doc = await this.analysisModel.findByIdAndUpdate(analysisId, {
      text,
    });

    return { id: doc.id, text };
  }

  async removeAnalysis(analysisId: string) {
    await this.analysisModel.findByIdAndDelete(analysisId);
    return { error: false };
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Horoscope, HoroscopeContent } from './horoscope.model';

@Injectable()
export class HoroscopesService {
  constructor(
    @InjectModel('Horoscope') private readonly horoscopeModel: Model<Horoscope>,
  ) {}

  getHoroscopes() {
    return this.horoscopeModel.find();
  }

  async updateHoroscope(horoscopeId: string, data: HoroscopeContent) {
    const doc = await this.horoscopeModel.findById(horoscopeId);

    if (!doc)
      throw new NotFoundException(
        `Horoscope with id of ${horoscopeId} not found`,
      );

    const daily = data.daily || doc.daily;
    const weekly = data.weekly || doc.weekly;
    const monthly = data.monthly || doc.monthly;

    const result = await doc.update({
      daily,
      weekly,
      monthly,
      editedAt: new Date().getTime(),
    });

    return result;
  }
}

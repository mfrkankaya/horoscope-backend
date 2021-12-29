import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Horoscope, HoroscopeContent } from './horoscope.model';
import { mapHoroscope } from './horoscopes.utils';

@Injectable()
export class HoroscopesService {
  constructor(
    @InjectModel('Horoscope') private readonly horoscopeModel: Model<Horoscope>,
  ) {}

  async getHoroscopes() {
    const horoscopes = await this.horoscopeModel.find();
    return horoscopes.map(mapHoroscope);
  }

  async getSingleHoroscope(horoscopeId: string) {
    const doc = await this.horoscopeModel.findById(horoscopeId);
    return mapHoroscope(doc);
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

    const horoscopeContent = { daily, weekly, monthly };
    await doc.update({
      ...horoscopeContent,
      editedAt: new Date().getTime(),
    });

    return {
      error: false,
      data: {
        id: horoscopeId,
        ...horoscopeContent,
      },
    };
  }
}

import { Schema } from 'mongoose';

export interface HoroscopeContent {
  daily: string;
  weekly: string;
  monthly: string;
}

export interface Horoscope extends HoroscopeContent {
  id: string;
  name: string;
  editedAt: number;
  createdAt: number;
}

export const HoroscopeSchema = new Schema<Horoscope>({
  name: {
    type: String,
    required: true,
  },
  daily: {
    type: String,
    required: true,
  },
  weekly: {
    type: String,
    required: true,
  },
  monthly: {
    type: String,
    required: true,
  },
  editedAt: {
    type: Number,
    default: null,
  },
  createdAt: {
    type: Number,
    default: new Date().getTime(),
  },
});

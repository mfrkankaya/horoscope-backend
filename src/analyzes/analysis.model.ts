import { Schema } from 'mongoose';

export interface Analysis {
  id: string;
  text: string;
  editedAt: number;
  createdAt: number;
}

export const AnalysisSchema = new Schema<Analysis>({
  text: {
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

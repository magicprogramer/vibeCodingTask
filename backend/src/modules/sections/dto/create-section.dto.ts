import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'createdAt' } })
export class Section extends Document {
  @Prop({ required: true })
  hero: {
    imageUrl: string;
    text: string;
  };

  @Prop({ required: true })
  about: string;

  @Prop({ required: true })
  contact: {
    number: string;
    email: string;
  };
}

export const SectionSchema = SchemaFactory.createForClass(Section);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class Hero {
  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  text: string;
}

@Schema({ _id: false })
export class Contact {
  @Prop({ required: true })
  number: string;

  @Prop({ required: true })
  email: string;
}

@Schema({ timestamps: { createdAt: 'createdAt' }, collection: 'Section' })
export class Section extends Document {
  @Prop({ type: Hero, required: true })
  hero: Hero;

  @Prop({ required: true })
  about: string;

  @Prop({ type: Contact, required: true })
  contact: Contact;

  @Prop()
  createdAt: Date;
}

export const SectionSchema = SchemaFactory.createForClass(Section);

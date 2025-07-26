import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { faker } from '@faker-js/faker';
import { Section } from './sections.schema';

@Injectable()
export class SectionsService {
  constructor(@InjectModel(Section.name) private sectionModel: Model<Section>) {}

  async create(prompt: string): Promise<{ new: Section; all: Section[] }> {
    const imageUrl = `https://picsum.photos/640/480?random=${Math.floor(Math.random() * 1000)}`;
    const newSection = new this.sectionModel({
      hero: {
        imageUrl: imageUrl,
        text: faker.company.catchPhrase()
      },
      about: faker.lorem.paragraph(),
      contact: {
        number: faker.phone.number(),
        email: faker.internet.email()
      }
    });

    await newSection.save();
    const all = await this.sectionModel.find().sort({ createdAt: -1 });

    return { new: newSection, all };
  }
}

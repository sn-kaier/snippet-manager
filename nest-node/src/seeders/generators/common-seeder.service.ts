import { Injectable } from '@nestjs/common';
import { LoremIpsum } from 'lorem-ipsum';
import { v4 } from 'uuid';
import * as Haikunator from 'haikunator';

// fixes https://github.com/Kononnable/typeorm-model-generator/issues/76
export type Keys<T, K extends string> = Partial<Omit<T, K> & { [P in K]: string }>;

export const randomIndex = (length: number) => {
  return Math.floor(Math.random() * length);
};

export const rndInt = (min: number, max: number) => {
  return () => Math.floor(Math.random() * (max - min + 1) + min);
};
export const rndPow = (max: number, power: number) => {
  const r = Math.random();
  return Math.floor(Math.pow(r, power) * (max + 1));
};

export const rndBoolean = () => Math.random() > 0.5;

export const rndLengthSequence = (
  min: number,
  max: number,
  pow: number,
): number[] => {
  const count = Math.floor(Math.pow(Math.random(), pow) * (max - min + 1) + min);
  return sequence(count);
};

export const pick = <T>(arr: T[], count: number) => {
  if (arr.length < count) {
    return arr;
  }
  const set = new Set<number>();
  while (set.size < count) {
    set.add(randomIndex(arr.length));
  }
  return [...set.values()].map(index => arr[index]);
};

export const sequence = (count: number): number[] => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(i);
  }
  return arr;
};

@Injectable()
export class CommonSeederService {
  private sentenceGenerator: LoremIpsum;
  private nameGenerator;

  constructor() {
    this.sentenceGenerator = new LoremIpsum({
      wordsPerSentence: {
        min: 4,
        max: 10,
      },
    });
    // @ts-ignore
    this.nameGenerator = new Haikunator({
      seed: 'custom-seed',
    });
  }

  public randomSentences(count: number): string {
    return this.sentenceGenerator.generateSentences(count);
  }

  public uuid(): string {
    return v4();
  }

  public name(tokenLength: number): string {
    return this.nameGenerator.haikunate({ tokenLength, delimiter: '' });
  }
}

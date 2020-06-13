export class DocumentTags {
  readonly detectedLanguages: string[] = [];
  readonly userTags: string;

  constructor(tag: string = '|') {
    const [dectedtedLangs, userTags] = tag.split('|');
    this.setDetectedLanguages(dectedtedLangs);
    this.userTags = userTags;
  }

  get detectedLanguagesAsString(): string {
    return this.detectedLanguages.filter(t => !!t).join(';');
  }

  get tagsAsString(): string {
    return `${this.detectedLanguagesAsString}|${this.userTags}`;
  }

  setDetectedLanguages(langTag: string) {
    this.detectedLanguages.length = 0;
    this.detectedLanguages.push(...langTag.split(';'));
  }
}

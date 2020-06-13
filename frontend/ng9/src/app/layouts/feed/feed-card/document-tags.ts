export class DocumentTags {
  detectedLanguages: string[] = [];
  readonly userTags: string;

  constructor(tag: string = '|') {
    if (!tag) {
      tag = '|';
    }
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
    if (langTag) {
      this.detectedLanguages = langTag.split(';');
    } else {
      this.detectedLanguages = [];
    }
  }
}

export class DocumentTags {
  detectedLanguages: string[] = [];
  validJs = false;
  readonly userTags: string[];

  constructor(tag: string) {
    let parsed: any;
    try {
      parsed = JSON.parse(tag);
    } catch (e) {
      parsed = {};
    }

    this.detectedLanguages = parsed?.detectedLanguages || [];
    this.userTags = parsed?.userTags || [];
    this.validJs = !!parsed?.validJs;
  }

  toString(): string {
    return JSON.stringify({
      detectedLanguages: this.detectedLanguages,
      userTags: this.userTags,
      validJs: this.validJs
    });
  }

  setDetectedLanguages(langTag: string[]) {
    this.detectedLanguages = langTag || [];
  }

  equalTags(langTags: string[]): boolean {
    if (langTags.length !== this.detectedLanguages.length) {
      return false;
    }

    for (let i = 0; i < langTags.length; i++) {
      if (langTags[i] !== this.detectedLanguages[i]) {
        return false;
      }
    }

    return true;
  }
}

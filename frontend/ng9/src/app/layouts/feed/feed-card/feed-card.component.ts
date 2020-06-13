import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

import { UFeedDocFragment, USetDocumentTagGQL } from '../../../__generated/user-gql-services';
import { AFeedDocFragment } from '../../../__generated/anonymous-gql-services';
import { FeedService } from '../feed/feed.service';
import { AuthService } from '../../../core/auth.service';
import { HighlightResult } from 'ngx-highlightjs';
import { DocumentTags } from './document-tags';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedCardComponent implements OnInit {
  showComments = false;

  @Input() doc: UFeedDocFragment | AFeedDocFragment;
  @Input() hideAuthor: boolean;

  @Output() changeIsPublic = new EventEmitter<boolean>();
  @ViewChild('codeElement') codeElement: ElementRef<HTMLDivElement>;

  highlightResult: HighlightResult;
  documentTags: DocumentTags;
  textCollapsed = true;
  canTextExpand = false;

  constructor(
    private readonly feedService: FeedService,
    private readonly authService: AuthService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly uSetDocumentTag: USetDocumentTagGQL
  ) {}

  toggleReaction(documentId: string, reactionId: string) {
    this.feedService.toggleDocumentReaction({ reactionId, documentId });
  }

  get reactions() {
    return (this.doc as UFeedDocFragment).reactions;
  }

  get isOwnDocument(): boolean {
    const authId = this.authService.authId;
    if (!authId) {
      return false;
    }
    return authId === (this.doc as UFeedDocFragment).author.authId;
  }

  get languageTag(): string {
    if (!this.highlightResult || !this.codeElement.nativeElement) {
      return '';
    }
    const scrollHeight = this.codeElement.nativeElement.scrollHeight;
    const countLines = scrollHeight / 20;
    if (this.highlightResult.relevance / countLines > 0.8) {
      const firstLang = this.highlightResult.language;
      const secondLang = this.highlightResult.second_best?.language;
      const secondLangAlt = this.highlightResult.second_best?.top?.name;
      return [firstLang, secondLang, secondLangAlt].filter(t => !!t).join('; ');
    }
  }

  onHighlighted(highlightResult: HighlightResult) {
    this.highlightResult = highlightResult;
    if (this.isOwnDocument) {
      const langTag = this.languageTag;
      if (langTag && this.documentTags.detectedLanguagesAsString !== langTag) {
        this.documentTags.setDetectedLanguages(langTag);
        const newTags = this.documentTags.tagsAsString;
        (this.doc as UFeedDocFragment).tags = newTags;
        this.uSetDocumentTag
          .mutate({ documentId: this.doc.id, tags: newTags })
          .toPromise()
          .then();
      }
    }

    setTimeout(() => {
      if (!this.codeElement?.nativeElement) {
        return;
      }
      const clientHeight = this.codeElement.nativeElement.clientHeight;
      const scrollHeight = this.codeElement.nativeElement.scrollHeight;
      const canTextExpand = scrollHeight > clientHeight;
      if (canTextExpand !== this.canTextExpand) {
        this.canTextExpand = canTextExpand;
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  toggleTextCollapsed() {
    this.textCollapsed = !this.textCollapsed;
  }

  ngOnInit(): void {
    this.documentTags = new DocumentTags((this.doc as UFeedDocFragment).tags);
  }
}

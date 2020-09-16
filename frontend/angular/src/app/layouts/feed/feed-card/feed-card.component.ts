import {
  AfterViewInit,
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
import { AuthService } from '../../../core/auth/auth.service';
import { HighlightResult } from 'ngx-highlightjs';
import { DocumentTags } from './document-tags';
import { ScrollService } from '../../../core/scroll.service';
import { map, startWith } from 'rxjs/operators';
import { combineLatest, Subject } from 'rxjs';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedCardComponent implements OnInit, AfterViewInit {
  showComments = false;

  @Input() doc: UFeedDocFragment | AFeedDocFragment;
  @Input() hideAuthor: boolean;

  @Output() changeIsPublic = new EventEmitter<boolean>();
  @ViewChild('codeElement') codeElement: ElementRef<HTMLDivElement>;

  highlightResult: HighlightResult;
  documentTags: DocumentTags;
  textCollapsed = true;
  canTextExpand = false;

  lastTop = 0;

  codeElement$ = new Subject<ElementRef<HTMLDivElement>>();
  sideCollapse$ = combineLatest([this.scrollService.scroll.pipe(startWith(0)), this.codeElement$]).pipe(
    map(([_, codeElement]) => ({
      boundingClientRect: codeElement.nativeElement.getBoundingClientRect(),
      innerHeight: window.innerHeight
    })),
    map(config => {
      let top = config.boundingClientRect.height / 2;
      const upperThreshold = -config.boundingClientRect.top + 80;
      const lowerThreshold = -config.boundingClientRect.top + config.innerHeight - 28;
      if (top < upperThreshold) {
        top = upperThreshold;
      }
      if (top > lowerThreshold) {
        top = lowerThreshold;
      }
      const isVisible = !this.textCollapsed && top < config.boundingClientRect.height && top > 0;
      this.lastTop = config.boundingClientRect.top - 56;
      return {
        ...config,
        top,
        isVisible
      };
    })
  );

  constructor(
    private readonly feedService: FeedService,
    private readonly authService: AuthService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly uSetDocumentTag: USetDocumentTagGQL,
    private readonly scrollService: ScrollService
  ) {}

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

  get languageTags(): string[] {
    if (!this.highlightResult || !this.codeElement?.nativeElement) {
      return [];
    }
    const scrollHeight = this.codeElement.nativeElement.scrollHeight;
    const countLines = scrollHeight / 20;
    if (this.highlightResult.relevance / countLines > 0.8) {
      const firstLang = this.highlightResult.language;
      const secondLang = this.highlightResult.second_best?.language;
      const secondLangAlt = this.highlightResult.second_best?.top?.name;
      return [firstLang, secondLang, secondLangAlt].filter(t => !!t);
    }
  }

  ngAfterViewInit(): void {
    this.codeElement$.next(this.codeElement);
  }

  toggleReaction(documentId: string, reactionId: string) {
    this.feedService.toggleDocumentReaction({ reactionId, documentId });
  }

  onHighlighted(highlightResult: HighlightResult) {
    this.highlightResult = highlightResult;
    if (this.isOwnDocument) {
      const langTags = this.languageTags;
      if (langTags && !this.documentTags.equalTags(langTags)) {
        this.documentTags.setDetectedLanguages(langTags);
        const newTags = this.documentTags.toString();
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
    setTimeout(() => {
      this.scrollService.scroll.emit();
      if (this.textCollapsed && this.codeElement?.nativeElement && this.lastTop < 0) {
        const clientHeight = this.codeElement.nativeElement.clientHeight;
        const scrollHeight = this.codeElement.nativeElement.scrollHeight;
        this.scrollService.scrollDiff.emit(this.lastTop);
      }
    });
  }

  ngOnInit(): void {
    this.documentTags = new DocumentTags(this.doc.tags);
  }

  logLine(line: string) {
    console.log('ev:', line);
  }
}

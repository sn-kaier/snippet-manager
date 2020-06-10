import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { filter, map, tap } from 'rxjs/operators';
import { FeedService } from './feed.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

export type FeedMode = 'public' | 'my-documents';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit, OnDestroy {
  private loadingAtWindowSize = 0;

  private subs: Subscription[] = [];
  mode: FeedMode = 'public';
  loading$ = new Subject<boolean>();
  feed$ = this.feedService.feed$
    .pipe(
      tap(s => this.loading$.next(s.loading)),
      filter(s => !!s.data?.allDocuments),
      map(s => s.data.allDocuments)
    );

  @ViewChild('ref') ref: ElementRef<HTMLDivElement>;

  constructor(readonly authService: AuthService,
              private readonly feedService: FeedService,
              private readonly activatedRoute: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    window.addEventListener('scroll', this.scroll, true);
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      this.mode = paramMap.get('mode') as FeedMode;
      switch (this.mode) {
        case 'my-documents':
          await this.feedService.configure({ onlyMyDocuments: true });
          break;
        case 'public':
          await this.feedService.configure({ onlyMyDocuments: false });
          break;
      }
    });

    this.subs.push(this.feedService.secondaryLoading$.subscribe(loading => {
      this.loading$.next(loading);
    }));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
    this.subs.forEach(sub => sub.unsubscribe());
    this.subs = [];
  }


  scroll = (): void => {
    const rect = this.ref.nativeElement.getBoundingClientRect();
    if (rect.bottom - window.innerHeight < 1000) {
      if (this.loadingAtWindowSize !== rect.height) {
        this.loadingAtWindowSize = rect.height;
        this.feedService.fetchMore();
      }
    }
  };

  onChangeIsPublic(documentId: string, isPublic: boolean) {
    this.feedService.changeDocumentVisibility(documentId, isPublic);
  }
}

import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { map, tap } from 'rxjs/operators';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
  private loadingAtWindowSize = 0;

  userFeed$ = this.feedService.userQueryRef.valueChanges
    .pipe(
      map(s => s.data.allDocuments),
      tap(s => console.log('fetch all documents', s),
    ));
  anonymousFeed$ = this.feedService.anonymousQueryRef.valueChanges
    .pipe(map(s => s.data.allDocuments));

  @ViewChild('ref') ref: ElementRef<HTMLDivElement>;

  constructor(readonly authService: AuthService,
              private feedService: FeedService) {
  }

  async ngOnInit(): Promise<void> {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
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

}

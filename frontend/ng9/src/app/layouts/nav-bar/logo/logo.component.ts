import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit, OnDestroy {
  readonly mobileQuery = this.media.matchMedia('(max-width: 460px)');
  private readonly mobileQueryListener = () => this.changeDetectorRef.detectChanges();

  constructor(private readonly media: MediaMatcher, private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }
}

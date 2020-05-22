import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Comment_Reaction_Insert_Input,
  Document_Reaction_Insert_Input,
  UAddCommentReactionGQL,
  UAddDocumentReactionGQL
} from '../../../__generated/user-gql-services';
import { FeedService } from '../feed/feed.service';

export interface PickerConfig {
  positionX: number;
  positionY: number;
}

@Injectable({
  providedIn: 'root'
})
export class PickEmojiService {

  config$ = new BehaviorSubject<PickerConfig>({ positionX: 0, positionY: 0 });
  isOpened$ = new BehaviorSubject<boolean>(false);

  resolve?: (s: string) => void;
  reject?: () => void;

  constructor() {
  }

  showEmoji(positionX: number, positionY: number): Promise<string> {
    this.config$.next({ positionX, positionY });
    this.isOpened$.next(true);
    return new Promise<string>((res, rej) => {
      this.resolve = res;
      this.reject = rej;
    });
  }

  addEmoji(unified: string) {
    this.resolve?.(unified);
    this.reject = null;
    this.reject = null;
  }

  close() {
    this.reject?.();
    this.reject = null;
    this.reject = null;
    this.config$.next({ positionX: 0, positionY: 0 });
    this.isOpened$.next(false);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { AuthorSectionComponent } from './card/author-section/author-section.component';
import { LabelComponent } from './label/label.component';
import { CommentSectionComponent } from './card/comment-section/comment-section.component';
import { ReactionSectionComponent } from './card/reaction-section/reaction-section.component';
import { ReactionBadgeComponent } from './card/reaction-section/reaction-badge/reaction-badge.component';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { AddReactionButtonComponent } from './card/reaction-section/add-reaction-button/add-reaction-button.component';
import { CommentComponent } from './card/comment-section/comment/comment.component';
import { AddCommentComponent } from './card/comment-section/add-comment/add-comment.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { VisibilityLabelComponent } from './visibility-label/visibility-label.component';
import { MakeDocumentPublicDialogComponent } from './visibility-label/make-document-public-dialog/make-document-public-dialog.component';
import { MakeDocumentPrivateDialogComponent } from './visibility-label/make-document-private-dialog/make-document-private-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from './nav-bar/logo/logo.component';

@NgModule({
  declarations: [NavBarComponent, AvatarComponent, CardComponent, AuthorSectionComponent, LabelComponent, CommentSectionComponent, ReactionSectionComponent, ReactionBadgeComponent, AddReactionButtonComponent, CommentComponent, AddCommentComponent, VisibilityLabelComponent, MakeDocumentPrivateDialogComponent, MakeDocumentPublicDialogComponent, LogoComponent],
  exports: [
    NavBarComponent,
    CardComponent,
    AuthorSectionComponent,
    LabelComponent,
    ReactionSectionComponent,
    CommentSectionComponent,
    VisibilityLabelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmojiModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    RouterModule,
    MatChipsModule,
    MatDialogModule,
    MatTooltipModule,
    TranslateModule
  ]
})
export class ComponentsModule {
}

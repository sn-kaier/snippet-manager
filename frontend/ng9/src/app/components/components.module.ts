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

@NgModule({
  declarations: [NavBarComponent, AvatarComponent, CardComponent, AuthorSectionComponent, LabelComponent, CommentSectionComponent, ReactionSectionComponent, ReactionBadgeComponent, AddReactionButtonComponent],
  exports: [
    NavBarComponent,
    CardComponent,
    AuthorSectionComponent,
    LabelComponent,
    ReactionSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmojiModule,
    MatIconModule
  ]
})
export class ComponentsModule {
}

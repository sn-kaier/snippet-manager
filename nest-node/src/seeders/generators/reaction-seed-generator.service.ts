import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { Reaction } from '../../database/__generated_entities/reaction';
import { AuthorSeedGeneratorService } from './author-seed-generator.service';
import { gql, GqlRequestService } from '../../gql-request/gql-request.service';
import { MutationRoot, QueryRoot, ReactionInsertInput } from '../../__generated/types';
import { readFileSync } from 'fs';
import { CompressedEmojiData } from './emoji-data/data.interfaces';

export interface AuthorReaction {
  authorId: string;
  reaction: Partial<Reaction>;
}

@Injectable()
export class ReactionSeedGeneratorService {
  private readonly reactions: ReactionInsertInput[];

  private logger = new Logger(ReactionSeedGeneratorService.name);

  constructor(
    @Inject(forwardRef(() => AuthorSeedGeneratorService))
    private readonly authorService: AuthorSeedGeneratorService,
    private readonly gqlRequestService: GqlRequestService,
  ) {
    const reactions: CompressedEmojiData[] = JSON.parse(
      readFileSync('./assets/emojis-weighted.json').toString(),
    );

    this.reactions = reactions.map<Partial<Reaction>>(ed => ({
      balance: ed.balance || 0,
      htmlCode: ed.unified,
      title: ed.shortName,
    }));

    this.reactions.sort((a, b) => a.htmlCode.localeCompare(b.htmlCode));
    const duplicatedReaction = this.reactions.find((r, i) => {
      if (i < 1) {
        return false;
      }
      return this.reactions[i - 1].htmlCode === r.htmlCode;
    });
    // remove
    this.logger.log(
      'found duplicated reaction ' + JSON.stringify(duplicatedReaction),
    );
  }

  // private reorganizeEmojis() {
  //   const jsonString = readFileSync('./assets/emojis.json').toString();
  //   const emojis = JSON.parse(jsonString);
  //   const weightedEmojis = emojisDefault
  //     .filter(e => e.label.length === 1 && e.balance !== 0)
  //     .map(e => ({ balance: e.balance, label: e.label[0] }))
  //     .reduce(
  //       (prev, curr) => ({
  //         ...prev,
  //         [curr.label]: curr.balance,
  //       }),
  //       {},
  //     );
  //
  //   for (let e of emojis) {
  //     const balance = weightedEmojis[e.shortName];
  //     if (balance) {
  //       e.balance = balance;
  //     }
  //   }
  //
  //   writeFileSync('./assets/emojis-weighted.json', JSON.stringify(emojis));
  //
  //   console.log(jsonString.length);
  // }

  public async saveToDB() {
    const countRes = await this.gqlRequestService.adminRequest<
      QueryRoot,
      void
    >(
      gql`
        query countReactions {
          reaction_aggregate {
            aggregate {
              count
            }
          }
        }
      `,
    );
    const count = countRes.reaction_aggregate.aggregate.count;
    if (count >= this.reactions.length) {
      return;
    }

    for (const reaction of this.reactions) {
      await this.gqlRequestService
        .adminRequest<MutationRoot, { reactions: [ReactionInsertInput] }>(
          gql`
            mutation SaveReaction($reactions: [reaction_insert_input!]!) {
              addReaction(objects: $reactions) {
                affected_rows
              }
            }
          `,
          { reactions: [reaction] },
        )
        .catch(err => {
          this.logger.error('failed to add reactions', err, err.message);
        });
    }
  }

  public getRandom() {
    const index = Math.floor(Math.random() * this.reactions.length);
    return this.reactions[index];
  }

  public getMany(attempts: number): AuthorReaction[] {
    const toKey = (reaction: Partial<Reaction>, authorId: string) =>
      `${authorId},${reaction.htmlCode}`;
    const map = new Map<string, AuthorReaction>();
    for (let i = 0; i < attempts; i++) {
      const reaction = this.getRandom();
      const authorId = this.authorService.getRandomId();
      const key = toKey(reaction, authorId);
      const authorReaction = {
        authorId,
        reaction,
      };
      map.set(key, authorReaction);
    }
    return [...map.values()];
  }
}

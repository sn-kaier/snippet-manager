import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { ConfigService } from '@nestjs/config';
import { hasuraAdminSecret, hasuraGraphqlEndpoint } from '../config-keys';
import { GraphQLError, Variables } from 'graphql-request/dist/src/types';

export const gql = (args: TemplateStringsArray, ...params: string[]): string =>
  args
    .map<string>((str, index) =>
      index === 0 ? str : params[index - 1].concat(str),
    )
    .join('');

export interface GraphQLResponse<T> {
  data?: T;
  errors?: GraphQLError[];
  extensions?: any;
  status: number;
  [key: string]: any;
}

@Injectable()
export class GqlRequestService {
  private adminClient: GraphQLClient;
  constructor(configService: ConfigService) {
    const endpoint = configService.get<string>(
      hasuraGraphqlEndpoint,
      'http://127.0.0.1:8080/v1/graphql',
    );
    const secret = configService.get<string>(hasuraAdminSecret, '');
    this.adminClient = new GraphQLClient(endpoint, {
      headers: {
        'x-hasura-admin-secret': secret,
      },
    });
  }

  async adminRequest<T, V>(query: string, variables?: V): Promise<T> {
    return this.adminClient.request<T>(query, variables);
  }
}

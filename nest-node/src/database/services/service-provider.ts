import { Connection, ObjectType } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

export const serviceProvider = (injectionToken: string, T: ObjectType<any>) => (
  {
    provide: injectionToken,
    useFactory: (connection: Connection) => connection.getRepository(snakeCase(T.name)),
    inject: ['DATABASE_CONNECTION'],
  }
);

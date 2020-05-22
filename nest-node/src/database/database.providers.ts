import { createConnection } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { databaseHost, databasePassword, databasePort } from '../config-keys';
import { Provider } from '@nestjs/common';

export const databaseProviders: Provider[] = [
    {
        inject: [ConfigService],
        provide: 'DATABASE_CONNECTION',
        useFactory: (configService: ConfigService) => createConnection({
            type: 'postgres',
            host: configService.get<string>(databaseHost, '127.0.0.1'),
            port: configService.get<number>(databasePort, 5432),
            username: 'postgres',
            password: configService.get<string>(databasePassword, ''),
            database: 'postgres',
            entities: [
                __dirname + '../../**/__generated_entities/*{.ts,.js}',
            ],
            synchronize: false,
        }),
    },
];

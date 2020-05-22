import { Test, TestingModule } from '@nestjs/testing';
import { gql, GqlRequestService } from './gql-request.service';
import { ConfigModule } from '@nestjs/config';

describe('GqlRequestService', () => {
  let service: GqlRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [GqlRequestService],
    }).compile();

    service = module.get<GqlRequestService>(GqlRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  const requestComments = async () => {
    const now = Date.now();
    const comments = await service.adminRequest<any>(gql`
      query comments($limit: Int, $offset: Int) {
        allComments(limit: $limit, offset: $offset) {
          id
          createdAt
          comment
        }
      }
    `, {
      limit: 20,
      offset: Math.floor(Math.random() * 10) * 20
    });
    const elapsedTime = Date.now() - now;
    return {
      comments,
      elapsedTime,
    };
  };

  it('should pass the stress test', async () => {
    const iterations = 100;
    let consumedTime = 0;
    for (let i = 0; i < iterations; i++) {
      const {comments, elapsedTime} = await requestComments();
      expect(comments).not.toBeNull();
      consumedTime += elapsedTime;
    }
    const avgTime = consumedTime / iterations;
    expect(avgTime).toBeLessThan(20);
  });
});

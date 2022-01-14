import { Test, TestingModule } from '@nestjs/testing';
import { JokesController } from './jokes.controller';

describe('JokesController', () => {
  let controller: JokesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JokesController],
    }).compile();

    controller = module.get<JokesController>(JokesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

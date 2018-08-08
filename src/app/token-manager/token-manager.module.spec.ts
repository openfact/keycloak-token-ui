import { TokenManagerModule } from './token-manager.module';

describe('TokenManagerModule', () => {
  let tokenManagerModule: TokenManagerModule;

  beforeEach(() => {
    tokenManagerModule = new TokenManagerModule();
  });

  it('should create an instance', () => {
    expect(tokenManagerModule).toBeTruthy();
  });
});

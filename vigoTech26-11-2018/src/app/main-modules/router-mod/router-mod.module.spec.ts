import { RouterModModule } from './router-mod.module';

describe('RouterModModule', () => {
  let routerModModule: RouterModModule;

  beforeEach(() => {
    routerModModule = new RouterModModule();
  });

  it('should create an instance', () => {
    expect(routerModModule).toBeTruthy();
  });
});

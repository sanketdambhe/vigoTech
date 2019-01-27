import { MaterialModModule } from './material-mod.module';

describe('MaterialModModule', () => {
  let materialModModule: MaterialModModule;

  beforeEach(() => {
    materialModModule = new MaterialModModule();
  });

  it('should create an instance', () => {
    expect(materialModModule).toBeTruthy();
  });
});

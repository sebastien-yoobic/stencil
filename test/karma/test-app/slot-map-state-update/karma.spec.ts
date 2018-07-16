import { setupDomTests } from '../util';


describe('slot-map-state-update', function() {
  const { setupDom, tearDownDom } = setupDomTests(document);
  let app: HTMLElement;

  beforeEach(async () => {
    app = await setupDom('/slot-map-state-update/index.html');
  });
  afterEach(tearDownDom);


  it('render', async () => {
    const root = app.querySelector('slot-map-state-update-root');    
    const result = app.querySelector('slot-map-state-update');

    expect((result.children[0].children[0] as HTMLInputElement).value).toBe('a');
    expect((result.children[1].children[0] as HTMLInputElement).value).toBe('b');
    expect((result.children[2].children[0] as HTMLInputElement).value).toBe('c');

    (root as any).addItem('d');
    // window.flush ?? 
    expect((result.children[0].children[0] as HTMLInputElement).value).toBe('a');
    expect((result.children[1].children[0] as HTMLInputElement).value).toBe('b');
    expect((result.children[2].children[0] as HTMLInputElement).value).toBe('c');
    expect((result.children[3].children[0] as HTMLInputElement).value).toBe('d');

  });

});

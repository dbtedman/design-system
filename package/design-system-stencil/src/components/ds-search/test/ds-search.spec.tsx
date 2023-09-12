import { newSpecPage } from '@stencil/core/testing';
import { DsSearch } from '../ds-search';

describe('ds-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsSearch],
      html: `<ds-search></ds-search>`,
    });
    expect(page.root).not.toBeNull();
  });
});

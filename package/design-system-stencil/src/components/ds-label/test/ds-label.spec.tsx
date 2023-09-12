import { newSpecPage } from '@stencil/core/testing';
import { DsLabel } from '../ds-label';

describe('ds-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsLabel],
      html: `<ds-label></ds-label>`,
    });
    expect(page.root).not.toBeNull();
  });
});

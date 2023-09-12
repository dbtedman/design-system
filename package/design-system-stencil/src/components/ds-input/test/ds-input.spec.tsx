import { newSpecPage } from '@stencil/core/testing';
import { DsInput } from '../ds-input';

describe('ds-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input></ds-input>`,
    });
    expect(page.root).not.toBeNull();
  });
});

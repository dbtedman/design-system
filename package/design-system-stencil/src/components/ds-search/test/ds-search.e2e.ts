import { newE2EPage } from '@stencil/core/testing';

describe('ds-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-search></ds-search>');

    const element = await page.find('ds-search');
    expect(element).toHaveClass('hydrated');
  });
});

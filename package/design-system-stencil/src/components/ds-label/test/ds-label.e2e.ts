import { newE2EPage } from '@stencil/core/testing';

describe('ds-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-label></ds-label>');

    const element = await page.find('ds-label');
    expect(element).toHaveClass('hydrated');
  });
});

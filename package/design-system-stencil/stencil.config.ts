import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'design-system-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vueOutputTarget({
      componentCorePackage: 'design-system-stencil',
      proxiesFile: '../design-system-vue/lib/components.ts',
    }),
    reactOutputTarget({
      componentCorePackage: 'design-system-stencil',
      proxiesFile: '../design-system-react/lib/components/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};

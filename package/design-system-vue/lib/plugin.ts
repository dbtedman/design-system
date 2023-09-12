import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from 'design-system-stencil/loader';

export const ComponentLibrary: Plugin = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};

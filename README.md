# [Design System](https://github.com/dbtedman/design-system)

A fictional design system based around Web Components.

-   [Build](#build)
-   [Packages](#packages)
-   [Components](#components)
-   [License](#license)

## Build

```shell
pnpm install
pnpm recursive run build
```

```shell
pnpm recursive run dev
```

## Packages

### Web Components

-   [design-system-stencil](./package/design-system-stencil) defines Web Components that are then depended upon by framework specific packages.

### React

-   [design-system-react](./package/design-system-react) defines a wrapper around [design-system-stencil](./package/design-system-stencil) to enable the use of our components in a React application.
-   [design-system-react-demo](./package/design-system-react-demo) is a demonstration application that uses components from [design-system-react](./package/design-system-react).

### Vue

-   [design-system-vue](./package/design-system-vue) defines a wrapper around [design-system-stencil](./package/design-system-stencil) to enable the use of our components in a Vue application.
-   [design-system-vue-demo](./package/design-system-vue-demo) is a demonstration application that uses components from [design-system-vue](./package/design-system-vue).

## Components

Organised according to [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) principles.

### Atoms

_Placeholder_

### Molecules

_Placeholder_

### Organisms

_Placeholder_

### Templates

_Placeholder_

### Pages

_Placeholder_

## License

The [MIT License](./LICENSE.md) is used by this project.

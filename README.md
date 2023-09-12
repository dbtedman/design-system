# [Design System](https://github.com/dbtedman/design-system)

[![CI GitHub Pipeline](https://img.shields.io/github/actions/workflow/status/dbtedman/design-system/ci.yml?branch=main&style=for-the-badge&logo=github&label=ci)](https://github.com/dbtedman/design-system/actions/workflows/ci.yml?query=branch%3Amain)

A fictional design system based around Web Components.

-   [Build](#build)
-   [Lint and Format](#lint-and-format)
-   [Test](#test)
-   [Packages](#packages)
-   [Components](#components)
-   [References](#references)
-   [License](#license)

## Build

```shell
nvm use && make install build
```

Then view our two demo apps:

```shell
nvm use && make dev
```

## Lint and Format

```shell
nvm use && make lint
```

```shell
nvm use && make format
```

## Test

```shell
nvm use && make test
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

-   `<ds-input>`
-   `<ds-label>`
-   `<ds-button>`

### Molecules

-   `<ds-search>`

### Organisms

_Placeholder_

### Templates

_Placeholder_

### Pages

_Placeholder_

## References

Resources referenced during the development of this project.

-   [Atomic Design Methodology (atomicdesign.bradfrost.com)](https://atomicdesign.bradfrost.com/chapter-2/)
-   [PNPM Workspace (pnpm.io)](https://pnpm.io/workspaces)
-   [Stencil Docs (stenciljs.com)](https://stenciljs.com/docs/introduction)

## License

The [MIT License](./LICENSE.md) is used by this project.

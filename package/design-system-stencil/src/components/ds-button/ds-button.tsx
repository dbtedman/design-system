import { Component, h } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.scss',
  scoped: true,
})
export class DsButton {

  render() {
    return (
      <button>
        <slot></slot>
      </button>
    );
  }

}

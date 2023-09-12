import { Component, h } from '@stencil/core';

@Component({
  tag: 'ds-label',
  styleUrl: 'ds-label.scss',
  scoped: true,
})
export class DsLabel {

  render() {
    return (
      <label>
        <slot></slot>
      </label>
    );
  }

}

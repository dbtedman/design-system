import {Component, h} from '@stencil/core';

@Component({
  tag: 'ds-search',
  styleUrl: 'ds-search.scss',
  scoped: true,
})
export class DsSearch {
  render() {
    return (
      <div>
        <ds-label>Search the site</ds-label>
        <div>
          <ds-input /> <ds-button>Search</ds-button>
        </div>
      </div>
    );
  }
}

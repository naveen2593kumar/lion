import { LitElement } from '@lion/core';
import { html } from '@open-wc/testing';
import { runRegistrationSuite } from '../test-suites/FormRegistrationMixins.suite.js';

runRegistrationSuite({
  suffix: 'with LitElement',
  baseElement: LitElement,
});

runRegistrationSuite({
  suffix: 'with LitElement, using shadow dom',
  baseElement: class ShadowElement extends LitElement {
    render() {
      return html`<slot></slot>`;
    }
  },
});

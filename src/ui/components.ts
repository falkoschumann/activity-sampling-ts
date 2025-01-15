// Copyright (c) 2024 Falko Schumann. All rights reserved. MIT license.

import { html, render, TemplateResult } from 'lit-html';

/**
 * Base class for a custom element rendered with `lit-html`.
 */
export class Component extends HTMLElement {
  /**
   * Updates the view after this component is inserted into the DOM.
   *
   * Called when this component is inserted into the DOM. Override this method
   * to register event listeners. Don't forget to call the super method.
   */
  connectedCallback() {
    this.updateView();
  }

  /**
   * Currently does nothing.
   *
   * Called when this component is removed from the DOM. Override this method to
   * remove event listeners. Don't forget to call the super method.
   */
  disconnectedCallback() {
    // Currently does nothing.
  }

  /**
   * Updates this component.
   *
   * Renders the view into the target element.
   *
   * @see module:browser/components.Component#getView
   * @see module:browser/components.Component#getRenderTarget
   */
  updateView() {
    if (!this.isConnected) {
      // Skip rendering, e.g. when setting properties before inserting into DOM.
      return;
    }

    render(this.getView(), this.getRenderTarget());
  }

  /**
   * Returns the view to render when this component is updated.
   *
   * The view is a template created with `html` from lit-html. Override this
   * method to return the view. The default is an empty view.
   */
  getView(): TemplateResult {
    return html``;
  }

  /**
   * Returns the target element of this component to render the view into.
   *
   * The default is `this`.
   */
  getRenderTarget(): HTMLElement | DocumentFragment {
    return this;
  }
}

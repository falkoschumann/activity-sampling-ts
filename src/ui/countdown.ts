// Copyright (c) 2024 Falko Schumann. All rights reserved. MIT license.

import { html } from 'lit-html';

import { Component } from './components';

class Countdown extends Component {
  constructor() {
    super();
    this.style.display = 'block';
  }

  getView() {
    return html`
      <div
        class="progress"
        role="progressbar"
        aria-label="Interval progress"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" style="width: 75%"></div>
      </div>
      <div class="text-center small">00:30:00</div>
    `;
  }
}

window.customElements.define('m-countdown', Countdown);

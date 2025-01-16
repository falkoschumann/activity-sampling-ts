// Copyright (c) 2024 Falko Schumann. All rights reserved. MIT license.

import { html } from 'lit-html';

import { Component } from './components';

class TimeSummary extends Component {
  getView() {
    return html`
      <div class="d-flex justify-content-center flex-wrap text-center">
        <div class="flex-fill">
          <div>Hours Today</div>
          <div class="fs-5">01:30</div>
        </div>
        <div class="flex-fill">
          <div>Hours Yesterday</div>
          <div class="fs-5">00:00</div>
        </div>
        <div class="flex-fill">
          <div>Hours this Week</div>
          <div class="fs-5">01:30</div>
        </div>
        <div class="flex-fill">
          <div>Hours this Month</div>
          <div class="fs-5">01:30</div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('m-time-summary', TimeSummary);

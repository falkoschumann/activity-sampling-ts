// Copyright (c) 2024 Falko Schumann. All rights reserved. MIT license.

import { html } from 'lit-html';

import { TimeSummary } from '../domain/recent_activities';
import { Component } from './components';
import { Duration } from '../domain/duration';

class TimeSummaryComponent extends Component {
  #state: TimeSummary = {
    hoursToday: Duration.ZERO,
    hoursYesterday: Duration.ZERO,
    hoursThisWeek: Duration.ZERO,
    hoursThisMonth: Duration.ZERO,
  };

  get state() {
    return this.#state;
  }

  set state(value) {
    this.#state = value;
    this.updateView();
  }

  getView() {
    return html`
      <div class="d-flex justify-content-center flex-wrap text-center">
        <div class="flex-fill">
          <div>Hours Today</div>
          <div class="fs-5">${this.state.hoursToday.toLocaleString()}</div>
        </div>
        <div class="flex-fill">
          <div>Hours Yesterday</div>
          <div class="fs-5">${this.state.hoursYesterday.toLocaleString()}</div>
        </div>
        <div class="flex-fill">
          <div>Hours this Week</div>
          <div class="fs-5">${this.state.hoursThisWeek.toLocaleString()}</div>
        </div>
        <div class="flex-fill">
          <div>Hours this Month</div>
          <div class="fs-5">${this.state.hoursThisMonth.toLocaleString()}</div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('m-time-summary', TimeSummaryComponent);

// Copyright (c) 2024 Falko Schumann. All rights reserved. MIT license.

import { html } from 'lit-html';

import { TimeSummary } from '../domain/recent_activities';
import { Component } from './components';

class TimeSummaryComponent extends Component {
  #state: TimeSummary = {
    hoursToday: 0,
    hoursYesterday: 0,
    hoursThisWeek: 0,
    hoursThisMonth: 0,
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
          <div class="fs-5">
            ${String(Math.trunc(this.state.hoursToday / 60 / 60)).padStart(
              2,
              '0',
            )}:${String(
              Math.trunc(
                (this.state.hoursToday -
                  Math.trunc(this.state.hoursToday / 60 / 60) * 60 * 60) /
                  60,
              ),
            ).padStart(2, '0')}
          </div>
        </div>
        <div class="flex-fill">
          <div>Hours Yesterday</div>
          <div class="fs-5">
            ${String(Math.trunc(this.state.hoursYesterday / 60 / 60)).padStart(
              2,
              '0',
            )}:${String(
              Math.trunc(
                (this.state.hoursYesterday -
                  Math.trunc(this.state.hoursYesterday / 60 / 60) * 60 * 60) /
                  60,
              ),
            ).padStart(2, '0')}
          </div>
        </div>
        <div class="flex-fill">
          <div>Hours this Week</div>
          <div class="fs-5">
            ${String(Math.trunc(this.state.hoursThisWeek / 60 / 60)).padStart(
              2,
              '0',
            )}:${String(
              Math.trunc(
                (this.state.hoursThisWeek -
                  Math.trunc(this.state.hoursThisWeek / 60 / 60) * 60 * 60) /
                  60,
              ),
            ).padStart(2, '0')}
          </div>
        </div>
        <div class="flex-fill">
          <div>Hours this Month</div>
          <div class="fs-5">
            ${String(Math.trunc(this.state.hoursThisMonth / 60 / 60)).padStart(
              2,
              '0',
            )}:${String(
              Math.trunc(
                (this.state.hoursThisMonth -
                  Math.trunc(this.state.hoursThisMonth / 60 / 60) * 60 * 60) /
                  60,
              ),
            ).padStart(2, '0')}
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('m-time-summary', TimeSummaryComponent);

// Copyright (c) 2024 Falko Schumann. All rights reserved. MIT license.

import { html } from 'lit-html';

import { Service } from '../application/service';
import { RecentActivities } from '../domain/recent_activities';
import { Component } from './components';
import './countdown';
import './current_activity';
import './recent_activities';
import './time_summary';

class ActivitySamplingComponent extends Component {
  #service = new Service();

  #state: RecentActivities = {
    workingDays: [],
    timeSummary: {
      hoursToday: 0,
      hoursYesterday: 0,
      hoursThisWeek: 0,
      hoursThisMonth: 0,
    },
  };

  get state() {
    return this.#state;
  }

  set state(value) {
    this.#state = value;
    this.updateView();
  }

  async connectedCallback() {
    super.connectedCallback();

    this.state = await this.#service.queryRecentActivities();
  }

  getView() {
    return html`
      <aside class="container-fluid fixed-top py-2 bg-body">
        <m-current-activity
          .state=${this.state.lastActivity}
        ></m-current-activity>
        <m-countdown class="my-3"></m-countdown>
      </aside>
      <main class="container-fluid flex-shrink-0" style="margin-top: 400px">
        <m-recent-activities
          .state=${this.state.workingDays}
        ></m-recent-activities>
      </main>
      <footer class="container-fluid fixed-bottom py-3 bg-body">
        <m-time-summary .state=${this.state.timeSummary}></m-time-summary>
      </footer>
    `;
  }
}

window.customElements.define('m-activity-sampling', ActivitySamplingComponent);

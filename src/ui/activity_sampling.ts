// Copyright (c) 2024 Falko Schumann. All rights reserved. MIT license.

import { html } from 'lit-html';

import './countdown';
import './current_activity';
import './recent_activities';
import './time_summary';
import { Component } from './components';

class ActivitySampling extends Component {
  getView() {
    return html`
      <aside class="container-fluid fixed-top py-2 bg-body">
        <m-current-activity></m-current-activity>
        <m-countdown class="my-3"></m-countdown>
      </aside>
      <main class="container-fluid flex-shrink-0" style="margin-top: 400px">
        <m-recent-activities></m-recent-activities>
      </main>
      <footer class="container-fluid fixed-bottom py-3 bg-body">
        <m-time-summary></m-time-summary>
      </footer>
    `;
  }
}

window.customElements.define('m-activity-sampling', ActivitySampling);

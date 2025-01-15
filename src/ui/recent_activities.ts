// Copyright (c) 2024 Falko Schumann. All rights reserved. MIT license.

import { html, TemplateResult } from 'lit-html';
import { Component } from './components';

class RecentActivities extends Component {
  getView(): TemplateResult {
    return html`
      <h6 class="bg-body-tertiary p-2 sticky-top small">
        Tuesday, 14. January 2025
      </h6>
      <div class="list-group list-group-flush small">
        <button
          class="list-group-item list-group-item-action d-flex justify-content-start align-items-start"
        >
          <div style="width: 3em">10:00</div>
          <div>
            <div class="ms-2 me-auto">
              <div>Project (Client) Task</div>
              <small>Notes</small>
            </div>
          </div>
        </button>
        <button
          class="list-group-item list-group-item-action d-flex justify-content-start align-items-start"
        >
          <div style="width: 3em">09:30</div>
          <div>
            <div class="ms-2 me-auto">
              <div>Project (Client) Task</div>
            </div>
          </div>
        </button>
        <button
          class="list-group-item list-group-item-action d-flex justify-content-start align-items-start"
        >
          <div style="width: 3em">09:00</div>
          <div>
            <div class="ms-2 me-auto">
              <div>Project (Client) Task</div>
            </div>
          </div>
        </button>
      </div>
    `;
  }
}

window.customElements.define('m-recent-activities', RecentActivities);

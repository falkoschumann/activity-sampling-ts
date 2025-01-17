// Copyright (c) 2024 Falko Schumann. All rights reserved. MIT license.

import { html, TemplateResult } from 'lit-html';
import { Component } from './components';
import { WorkingDay } from '../domain/recent_activities';

class RecentActivitiesComponent extends Component {
  #state: WorkingDay[] = [];

  get state() {
    return this.#state;
  }

  set state(value) {
    this.#state = value;
    this.updateView();
  }

  getView(): TemplateResult {
    return html`
      ${this.state.map(
        (workingDay) => html`
          <h6 class="bg-body-tertiary p-2 sticky-top">
            ${workingDay.date.toLocaleDateString(undefined, {
              dateStyle: 'full',
            })}
          </h6>
          <div class="list-group list-group-flush">
            ${workingDay.activities.map(
              (activity) => html`
                <button
                  class="list-group-item list-group-item-action d-flex justify-content-start align-items-start"
                >
                  <div style="width: 3em">
                    ${activity.timestamp.toLocaleTimeString(undefined, {
                      timeStyle: 'short',
                    })}
                  </div>
                  <div>
                    <div class="ms-2 me-auto">
                      <div>
                        ${activity.project} (${activity.client})
                        ${activity.task}
                      </div>
                      <small class="text-body-tertiary"
                        >${activity.notes}</small
                      >
                    </div>
                  </div>
                </button>
              `,
            )}
          </div>
        `,
      )}
    `;
  }
}

window.customElements.define('m-recent-activities', RecentActivitiesComponent);

// Copyright (c) 2024 Falko Schumann. All rights reserved. MIT license.

import { html } from 'lit-html';

import { Activity } from '../domain/recent_activities';
import { Component } from './components';

class CurrentActivityComponent extends Component {
  #state?: Activity;

  get state() {
    return this.#state;
  }

  set state(value) {
    this.#state = value;
    this.updateView();
  }

  getView() {
    return html`
      <form>
        <div class="mb-2">
          <label for="client" class="form-label">Client:</label>
          <input
            type="text"
            id="client"
            name="client"
            class="form-control form-control-sm"
            .value=${this.#state?.client ?? ''}
          />
        </div>
        <div class="mb-2">
          <label for="project" class="form-label">Project:</label>
          <input
            type="text"
            id="project"
            name="project"
            class="form-control form-control-sm"
            .value=${this.#state?.project ?? ''}
          />
        </div>
        <div class="mb-2">
          <label for="task" class="form-label">Task:</label>
          <input
            type="text"
            id="task"
            name="task"
            class="form-control form-control-sm"
            .value=${this.#state?.task ?? ''}
          />
        </div>
        <div class="mb-2">
          <label for="notes" class="form-label">Notes:</label>
          <input
            type="text"
            id="notes"
            name="notes"
            class="form-control form-control-sm"
            .value=${this.#state?.notes ?? ''}
          />
        </div>
        <button type="submit" class="btn btn-primary btn-sm w-100">Log</button>
      </form>
    `;
  }
}

window.customElements.define('m-current-activity', CurrentActivityComponent);

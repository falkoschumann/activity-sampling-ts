// Copyright (c) 2024 Falko Schumann. All rights reserved. MIT license.

import { html } from 'lit-html';
import { Component } from './components';

class CurrentActivity extends Component {
  getView() {
    return html`
      <form>
        <div class="mb-2">
          <label for="client" class="form-label small">Client:</label>
          <input
            type="text"
            id="client"
            name="client"
            class="form-control form-control-sm"
          />
        </div>
        <div class="mb-2">
          <label for="project" class="form-label small">Project:</label>
          <input
            type="text"
            id="project"
            name="project"
            class="form-control form-control-sm"
          />
        </div>
        <div class="mb-2">
          <label for="task" class="form-label small">Task:</label>
          <input
            type="text"
            id="task"
            name="task"
            class="form-control form-control-sm"
          />
        </div>
        <div class="mb-2">
          <label for="notes" class="form-label small">Notes:</label>
          <input
            type="text"
            id="notes"
            name="notes"
            class="form-control form-control-sm"
          />
        </div>
        <button type="submit" class="btn btn-primary btn-sm w-100">Log</button>
      </form>
    `;
  }
}

window.customElements.define('m-current-activity', CurrentActivity);

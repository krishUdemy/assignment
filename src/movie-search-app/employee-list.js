import { LitElement, html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat.js';

export class EmployeeList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
    this.names = ['Sreeshant', 'Ojas', 'Vijji'];
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <ul>
        ${repeat(this.names, item => html`<li>${item}</li>`)}
      </ul>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('employee-list', EmployeeList);

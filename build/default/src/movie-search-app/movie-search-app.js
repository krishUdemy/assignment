import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@lion/input/lion-input.js";
import "./employee-list.js";
/**
 * @customElement
 * @polymer
 */

class MovieSearchApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          color: blue;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <lion-input></lion-input>
      <poster-frame><div>Im a div</div></poster-frame>
      <employee-list></employee-list>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'movie-search-app'
      }
    };
  }

}

window.customElements.define('movie-search-app', MovieSearchApp);
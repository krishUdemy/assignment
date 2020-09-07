import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@lion/input/lion-input.js';
import '@lion/button/lion-button.js';
import './movie-card'
import './my-element';
import './employee-list';
import './new-card';

class MovieSearchApp2 extends PolymerElement {

  static get template() {
    return html`
      <style>
        :host {
          color: blue;
          float: left;
        }

        h1 {
          color: green;
        }
      </style>
      
      <h1>Hello [[prop1]]!</h1>
      <lion-input></lion-input>
      <lion-button>Search</lion-button>
      <new-card>kkkk</new-card>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'movie-search-app'
      },
      movieList: {
        type: Object
      }
    };
  }
}

window.customElements.define('movie-search-app2', MovieSearchApp2);
import { LitElement, html, css } from "lit-element";

export class MovieCard extends LitElement {
  static get styles() {
    return css`
      .card-container {
        border: 1px solid gray;
        margin: 12px;
        color: red;
        width: 100%;
        display: inline-block;
      }

      .card-container img {
        width: 100%;
      }

      p {
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
        padding: 0px 12px;
        color: #ff6200;
      }

      .card-footer ul {
        list-style: none;
        padding-left: 0px;
        float: left;
        width: 100%;
      }

      .card-footer ul li:first-child {
        width: 74%;
        margin-right: 6px;
      }

      .card-footer ul li {
        text-decoration: none;
        display: inline-block;
      }
      .card-footer ul li:last-child {
        width: 24%;
        float: right;
        text-align: right;
      }

      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
      }

      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
      }

      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
      }

      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        .card-container {
          width: 31%;
        }
        .card-container img {
          height: 400px;
        }
      }

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
      }
    `;
  }

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="card-container">
        ${this.movie.Poster !== "N/A"
          ? html`<img src="${this.movie.Poster}" />`
          : html`<img src="http://via.placeholder.com/300x403" />`}
        <div class="card-footer">
          <ul>
            <li><p>${this.movie.Title}</p></li>
            <li><p>${this.movie.Year}</p></li>
          </ul>
        </div>
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define("movie-card", MovieCard);

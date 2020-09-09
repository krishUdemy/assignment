//Core modules
import { LitElement, html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { AjaxClass } from '@lion/ajax';

//Lion components
import '@lion/input/lion-input.js';

//Custom components
import './movie-card';

export class MovieSearchApp extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: Arial, Helvetica, sans-serif;
      }

      .main-container {
        width: 100%;
        background-color: #fff;
      }

      h1 {
        font-size: 40px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        padding: 12px;
        background: #ff6200;
        color: white;
        border: 1px solid #ff6200;
      }

      h2 {
        color: red;
      }

      .movies-list {
        width: 95%;
        margin: 0 auto;
        display: inline-block;
      }

      .search-container ul {
        list-style: none;
        padding-left: 0px;
        float: right;
        width: 50%;
      }

      .search-container ul li {
        text-decoration: none;
      }

      .search-container ul li:first-child {
        width: 83%;
        margin-right: 12px;
      }

      .search-container ul li:nth-child(2) {
        padding-top: 14px;
      }

      .btn {
        padding: 6px 18px;
        color: white;
        background-color: #ff6200;
        border: 1px solid #ff6200;
        border-radius: 6px;
      }

      .btn:hover {
        background-color: #fff;
        color: #ff6200;
        border-color: #ff6200;
      }

      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        .search-container ul li {
          float: left;
        }
      }

      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        .movies-list {
          width: 100%;
        }
      }
    `;
  }

  static get properties() {
    return {
      appName: { type: String },
      searchKey: { type: String },
      movieList: { type: Object },
      errorMessage: { type: String },
    };
  }

  constructor() {
    super();
    this.appName = 'Welcome to the movie search engine!';
    this.searchKey = '';
    this.movieList = { Search: [] };
    this.errorMessage = null;
  }

  searchMovie() {
    this.searchKey = this.shadowRoot.querySelector('#searchInput').value;
    const myAjax = new AjaxClass({ jsonPrefix: ")]}'," });
    myAjax
      .get(`https://www.omdbapi.com/?apikey=a5549d08&s=${this.searchKey}`)
      .then((response) => {
        if (response.data.Response === 'False') {
          this.errorMessage = response.data.Error;
          this.movieList.Search = [];
        } else {
          this.movieList = response.data;
          this.errorMessage = null;
        }
      })
      .catch((error) => {
        this.errorMessage = 'Movie not found!';
        this.movieList.Search = [];
      });
  }

  render() {
    return html`
      <div class="main-container">
        <h1>${this.appName}</h1>
        <h2>${this.errorMessage}</h2>
        <div class="search-container">
          <ul>
            <li>
              <lion-input
                label="Enter a search key"
                id="searchInput"
              ></lion-input>
            </li>
            <li>
              <button class="btn" @click=${this.searchMovie}>Search</button>
            </li>
          </ul>
        </div>
        <div class="movies-list">
          ${Object.keys(this.movieList.Search).length === 0
            ? html`<p>
                Please enter a keyword to search your favourite movies.
              </p>`
            : html`${repeat(
                this.movieList.Search,
                (movie) => movie.imdbID,
                (movie) => html`<movie-card .movie=${movie}></movie-card>`,
              )}`}
        </div>
      </div>
    `;
  }
}

window.customElements.define('movie-search-app', MovieSearchApp);

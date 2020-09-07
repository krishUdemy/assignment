import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";
import { repeat } from "../../node_modules/lit-html/directives/repeat.js";
import "../../node_modules/@lion/input/lion-input.js";
import "../../node_modules/@lion/button/lion-button.js";
import { ajax, AjaxClass } from "../../node_modules/@lion/ajax/index.js";
import "./my-element.js";
import "./employee-list.js";
import "./movie-card.js";

class MovieSearchApp extends LitElement {
  static get styles() {
    return css`
      .main-container {
        width: 100%;
        background-color: #fff;
      }

      h1 {
        font-size: 42px;
        text-align: center;
        padding: 12px;
        background: #ff6200;
        color: white;
        border: 1px solid #ff6200;
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

      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
      }

      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        .search-container ul li {
          float: left;
        }
      }

      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
      }

      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        .movies-list {
          width: 100%;
        }
      }

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
      }
    `;
  }

  static get properties() {
    return {
      appName: {
        type: String
      },
      movieList: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    this.appName = "Welcome to the movie search engine!";
    this.searchKey = "telugu"; // this.movieList = {};

    this.movieList = {
      Search: [{
        Title: "The French Connection",
        Year: "1971",
        imdbID: "tt0067116",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTZhY2E3NmItMGIwNi00OTA2LThkYmEtODFiZTM0NGI0ZWU5XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg"
      }, {
        Title: "French Kiss",
        Year: "1995",
        imdbID: "tt0113117",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTkzMjg5MDQ3M15BMl5BanBnXkFtZTgwOTM5NTE0MDE@._V1_SX300.jpg"
      }, {
        Title: "French Connection II",
        Year: "1975",
        imdbID: "tt0073018",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMzZmZWIwNmItOTM4MS00N2FjLThlYTctNDYxZTU5NjZiMGQ4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
      }, {
        Title: "The French Lieutenant's Woman",
        Year: "1981",
        imdbID: "tt0082416",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BZTEwZjRjMGYtZTA5MS00NTVjLTkxMWQtNGMxYmFhMmE1NjUzXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"
      }, {
        Title: "French Fried Vacation 2",
        Year: "1979",
        imdbID: "tt0078907",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTQzMDAxNDYwOV5BMl5BanBnXkFtZTgwNTE2MjkwMzE@._V1_SX300.jpg"
      }, {
        Title: "French Fried Vacation",
        Year: "1978",
        imdbID: "tt0077276",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BYmIxMDRmYWYtYzU2NS00ZGVlLWIzNWMtYWJlMjRmYmYyODE5XkEyXkFqcGdeQXVyNjI5NTk0MzE@._V1_SX300.jpg"
      }, {
        Title: "Slap Her, She's French!",
        Year: "2002",
        imdbID: "tt0187512",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTI2NTUxNzk2M15BMl5BanBnXkFtZTYwMzgyMDg5._V1_SX300.jpg"
      }, {
        Title: "French Twist",
        Year: "1995",
        imdbID: "tt0113149",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMWEwNWY1ZjQtYWMxYS00ZDY2LTg2Y2YtZDc5MTM4MzE0NTM4XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
      }, {
        Title: "Sexual Chronicles of a French Family",
        Year: "2012",
        imdbID: "tt1753584",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTM0Mjc3MDY0Ml5BMl5BanBnXkFtZTcwMDgwMzc4Nw@@._V1_SX300.jpg"
      }, {
        Title: "Excuse My French",
        Year: "2014",
        imdbID: "tt3510372",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTc4MDYxMjE5OV5BMl5BanBnXkFtZTgwOTA0NjgxMTE@._V1_SX300.jpg"
      }],
      totalResults: "525",
      Response: "True"
    };
  }

  async searchMovie() {
    // this.searchKey = document.getElementById("searchInput").value;
    // console.log('searchKey: ', document.querySelector("searchInput").value);
    const myAjax = new AjaxClass({
      jsonPrefix: ")]}',"
    });
    myAjax.get(`http://www.omdbapi.com/?apikey=a5549d08&s=${this.searchKey}`).then(response => {
      this.movieList = response.data;
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return html`
      <div class="main-container">
        <h1>${this.appName}</h1>
        <div class="search-container">
          <ul>
            <li>
              <lion-input
                label="Enter search key"
                id="searchInput"
                .value="${this.searchKey}"
              ></lion-input>
            </li>
            <!-- <li><lion-button class="button" @click=${this.searchMovie}>Search</lion-button></li> -->
            <li>
              <button class="btn" @click=${this.searchMovie}>Search</button>
            </li>
          </ul>
        </div>
        <div class="movies-list">
          ${Object.keys(this.movieList).length === 0 ? html`<p>
                Please enter language key word and search for your favorite
                movies.
              </p>` : html`${repeat(this.movieList.Search, movie => movie.imdbID, movie => html`<movie-card .movie=${movie}></movie-card>`)}`}
        </div>
      </div>
    `;
  }

}

export const label = () => html`
  <style>
    .u-sr-only {
      position: absolute;
      top: 0;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(100%);
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap;
      border: 0;
      margin: 0;
      padding: 0;
    }
  </style>
  <lion-input>
    <label slot="label"
      >Label
      <span class="u-sr-only"
        >partially only visible for screen-readers</span
      ></label
    >
  </lion-input>
`;
window.customElements.define("movie-search-app", MovieSearchApp);
import {fixture, html} from '@open-wc/testing';
import { MovieCard } from "../src/movie-search-app/movie-card";
import {movieList} from '../src/movie-search-app/movieList';

const assert = chai.assert;

suite("movie-card", () => {

  test("MovieCard is defined", () => {
    const el = document.createElement("movie-card");
    assert.instanceOf(el, MovieCard);
  });

  test('MovieCard should render passed values', async () => {
    const movieStub = movieList.Search[0];
    const el = await fixture(html`<movie-card .movie=${movieStub}></movie-card>`);
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <div class="card-container">
        <img src="https://m.media-amazon.com/images/M/MV5BOTkxZTdkNTQtM2QwOS00NzRlLWEyMGItYTcxOTE4NTgyNGVhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" />
      <div class="card-footer">
        <ul class="card-details">
          <li><p>The English Patient</p></li>
          <li><p>1996</p></li>
        </ul>
      </div>
      <slot></slot>
    </div>
    `
    );
  });

});

import { fixture, html } from '@open-wc/testing';
import { MovieCard } from '../src/movie-search-app/movie-card';

const { assert } = chai;

suite('movie-card', () => {
  test('MovieCard is defined', () => {
    const el = document.createElement('movie-card');
    assert.instanceOf(el, MovieCard);
  });

  test('Movie display check', async () => {
    const mockData = {
      Title: 'The English Patient',
      Year: '1996',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTkxZTdkNTQtM2QwOS00NzRlLWEyMGItYTcxOTE4NTgyNGVhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    };
    const el = await fixture(
      html`<movie-card .movie=${mockData}></movie-card>`,
    );
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
    </div>
    `,
    );
  });
});

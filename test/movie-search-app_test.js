import { fixture, html } from "@open-wc/testing";
import { MovieSearchApp } from "../src/movie-search-app/movie-search-app";

const assert = chai.assert;

suite("movie-search-app", () => {

  test("MovieSearchApp is defined", () => {
    const el = document.createElement("movie-search-app");
    assert.instanceOf(el, MovieSearchApp);
  });


  test('MovieSearchApp should search input and verifying', async () => {

    const el = await fixture(html`<movie-search-app></movie-search-app>`);
    let inputElement = el.shadowRoot.querySelector("#searchInput");
    let searchButton = el.shadowRoot.querySelector(".btn");
    inputElement.value = "english";
    searchButton.click();
    await el.updateComplete;
    assert (el.searchKey === inputElement.value);

  })
});

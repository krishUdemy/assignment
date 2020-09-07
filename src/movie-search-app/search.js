async searchMovie2() {
  LAUNCHPAD_FIREFOX=/usr/local/bin/firefox
LAUNCHPAD_CHROME=/usr/bin/chromium-browser

    const myAjax = new AjaxClass({ jsonPrefix: ")]}'," });

    let res = await myAjax
      .get(`http://www.omdbapi.com/?apikey=a5549d08&s=${this.searchKey}`)
      .then((response) => {
        console.log(response.data);
        // this.movieList = Object.assign({}, response.data);
        // super.requestUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  }



  async searchMovie() {
    const myAjax = new AjaxClass({ jsonPrefix: ")]}'," });

    let res = await myAjax
      .get(`http://www.omdbapi.com/?apikey=a5549d08&s=${this.searchKey}`);
      console.log('res: ', res);
    this.movieList = Object.assign({}, res.data);
    console.log('movie list: ', this.movieList);
    // super.requestUpdate();
  }

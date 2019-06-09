'use strict';

import {
    CONTENT_TYPES
} from './constants';

class Tab {
    constructor(type) {
        if (!(Object.values(CONTENT_TYPES).indexOf(type) > -1)) {
            throw new Error(`Type ${type} is not valid type`);
        }

        this.type = type;
    }

    changeHtml() {
        switch (this.type) {
            case CONTENT_TYPES.DEVICES:
                    document.querySelector('.main-content__showcase').innerHTML = '';
                document.querySelector('.main-content__showcase').insertAdjacentHTML(
                    'beforeend',
                    `
        <div class="showcase-section">
        <div class="showcase-section__wrapper">
          <h3 class="showcase-section__small-cta">
            Watch TV shows and movies anytime, anywhere - <br>
            personalized for you. <a href="#">Check out some of our content.</a>
          </h3>
          <button class="btn btn--large btn--red ">Try 30 days free</button>
        </div>
        </div>
        <div class="showcase-section">
        <div class="showcase-section__wrapper showcase-section__block">
          <div>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/home/thisIsNetflix/modules/asset_TV_UI.png">
          </div>
          <div>
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </p>
          </div>
        </div>
        <div class="showcase-section__wrapper showcase-section__block">
          <div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/home/thisIsNetflix/modules/asset_mobile_tablet_UI_2.png">
          </div>
          <div>
            <h3>
              Watch instantly or download for later
            </h3>
            <p>
              Available on phone and tablet, wherever you go.
            </p>
          </div>
        </div>
        <div class="showcase-section__wrapper showcase-section__block">
          <div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/home/thisIsNetflix/modules/asset_website_UI.png">
          </div>
          <div>
            <h3>Use any computer</h3>
            <p>Watch right on Netflix.com.</p>
          </div>
        </div>
        </div>
        `
                );
                break;
        }

    }
};

export default Tab;
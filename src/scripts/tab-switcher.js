import Tab from './tab';
import { CONTENT_TYPES } from './constants';

const $mainContentShowcase = document.querySelector('.main-content__showcase');
const selectedNav = document.querySelector('.nav-tab--selected').dataset.selectedContent;

document.querySelector('.main-content__nav').addEventListener('click', (e) => {
    if (!e.target.closest('.nav-tab')) {
        return;
    }
    new Tab(e.target.closest('.nav-tab').dataset.selectedContent).changeHtml();
});

import * as GMap from './GMap/index.js'

/**
 * Init Map on 'js-map'
 * Add API Key
 */
if (document.querySelector('.js-map')) {
  GMap.GMap('.js-map', 'AIzaSyAaRUTsAL88lWtk2wJsH-pNpPu7cto2Fsk')
}

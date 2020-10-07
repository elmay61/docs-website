const indentedCodeBlock = require('./indentedCodeBlock');
const paragraphsInsideTableCells = require('./paragraphsInsideTableCells');
const callouts = require('./callouts');
const clamshells = require('./clamshells');
const videos = require('./videos');
const images = require('./images');
const tables = require('./tables');
const buttons = require('./buttons');
const icons = require('./icons');

module.exports = [
  paragraphsInsideTableCells,
  indentedCodeBlock,
  callouts,
  clamshells,
  videos,
  images,
  tables,
  buttons,
  icons,
];
/**
 * Global Seeker
 * @args page: phantomjs loaded webpage object
 * @return number of global objects in the given page
 *
 */
exports.analyse = function (page) {

  // create an empty page
  var emptyPage = require('webpage').create(),
    pageProperties, emptyPageProperties,
    globalVariables;

  // get the main page global properties
  pageProperties = page.evaluate(function () {
    return Object.keys(window);
  });

  // get the empty page global properties
  emptyPageProperties = emptyPage.evaluate(function () {
    return Object.keys(window);
  });

  // exclude the variable that exists in the empty page
  globalVariables = pageProperties.filter(function (property) {
    return emptyPageProperties.indexOf(property) === -1;
  });

  return globalVariables.sort();

};

/**
 * Global Seeker CLI
 * @option url: url to test
 * @option [pause]: time to wait before to test global variables
 *
 */
(function () {

  var system = require('system'),
    address = system.args[1],
    pause = system.args[2] || 0,
    sgs = require('./gs'),
    page = require('webpage').create();

  // load the page
  page.open(address, function (status) {

    // if the page cannot load
    if (status !== 'success') {

      console.error('Fail to load the address');
      phantom.exit();

    } else {

      // set a timeout, to make sure all variables are created
      window.setTimeout(function () {

        // get global variables
        var globalVariables = sgs.analyse(page);
        // print the result to the system shell
        console.log(JSON.stringify(globalVariables));

        phantom.exit();

      }, pause);

    }

  });

})();
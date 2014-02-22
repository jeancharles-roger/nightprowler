(function () {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    nighprowler: Kotlin.definePackage(null, /** @lends _.nighprowler */ {
      client: Kotlin.definePackage(null, /** @lends _.nighprowler.client */ {
        main: function (args) {
          console.log('Running Kotlin');
        }
      })
    })
  });
  Kotlin.defineModule('nightprowler.client', _);
  _.nighprowler.client.main([]);
}());

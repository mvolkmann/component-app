'use strict';

$(function () {
  var cc = require('mvolkmann-color-cycle');
  var elem = $(cc.getHtml());
  $('body').append(elem);
  cc.setup();
});

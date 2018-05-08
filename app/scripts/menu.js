/*global define*/
'use strict';

define([
  'jquery', 'pubsub'
], function(
  jQuery, PubSub
) {
  var events = {
    MODEL_CHANGE: 'menu.lattice_change'
  };

  var $model = jQuery('#model');

  function Menu() {
    $model.on('change', function() {
      return PubSub.publish(events.MODEL_CHANGE, jQuery(this).val());
    });
  }

  Menu.prototype.onModelChange = function(callback) {
    PubSub.subscribe(events.MODEL_CHANGE, callback);
  };

  return Menu;
});

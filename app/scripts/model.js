/*global define*/
'use strict';

define([
  'pubsub', 'three', 'underscore'
], function(
  PubSub, THREE, _
) {
  var events = {
    LOAD: 'model.load'
  };

  function Model() {
    this._3d = null;
  }

  Model.prototype.load = function(modelName) {
    if (_.isEmpty(modelName)) {
      this._3d = null;
      PubSub.publish(events.LOAD, null);
      return;
    }

    var _this = this;

    require(['model/' + modelName], function(model) {
      _this._3d = model;
      PubSub.publish(events.LOAD, model);
    });
  };

  Model.prototype.onLoad = function(callback) {
    PubSub.subscribe(events.LOAD, callback);
  };

  return Model;
});

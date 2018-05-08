'use strict';

define([
  'three', 'pubsub'
], function(
  THREE, PubSub
) {
  // singleton
  var instance;

  var events = {
    ADD: 'explorer.add',
    REMOVE: 'explorer.remove'
  };

  function Explorer(options) {
    options = options || {};

    this._3d = new THREE.Scene();

    var _this = this;
    PubSub.subscribe(events.ADD, function(message, object) {
      _this.add(object);
    });
    PubSub.subscribe(events.REMOVE, function(message, object) {
      _this.remove(object);
    });
  }

  Explorer.prototype.add = function(object) {
    this._3d.add(object);
  };

  Explorer.prototype.remove = function(object) {
    this._3d.remove(object);
  };

  return {
    getInstance: function(options) {
      return (instance = instance || new Explorer(options));
    },
    add: function(object) {
      PubSub.publish(events.ADD, object);
    },
    remove: function(object) {
      PubSub.publish(events.REMOVE, object);
    }
  };
});

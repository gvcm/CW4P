 /*jshint unused:false*/
'use strict';

define([
  'three', 'jquery', 'threejs-controls/OrbitControls'
], function(
  THREE, jQuery
) {
  var $container = jQuery('#app-renderer-container');

  function Orbit(camera) {
    this._3d = new THREE.OrbitControls(camera._3d, $container[0]);
  }

  Orbit.prototype.update = function() {
    this._3d.update();
  };

  return Orbit;
});

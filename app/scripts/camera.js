/*jslint browser: true*/
/*global define*/
'use strict';

define([
  'three', 'underscore', 'jquery'
], function(
  THREE, _, jQuery
) {
  function Camera() {
    var width = jQuery('#app-container').width();
    var height = jQuery(window).height();
    var fov = 75;
    var near = 0.1;
    var far = 1000;
    var aspect = width / height;
    this._3d = new THREE.PerspectiveCamera(fov, aspect, near, far);
  }

  Camera.prototype.setPosition = function(position) {
    this._3d.position.fromArray(position.toArray());
    this._3d.lookAt(new THREE.Vector3(0, 0, 0));
  };

  return Camera;
});

'use strict';

define([
  'three'
], function(
  THREE
) {
  var geometry = new THREE.SphereGeometry( 5, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
  return new THREE.Mesh( geometry, material );
});

 /*unused:false*/
'use strict';

require.config({
  baseUrl: 'scripts',
  paths: {
    'pubsub': '../vendor/pubsub',
    'three': '../vendor/three',
    'threejs-controls/OrbitControls': '../vendor/threejs-controls/OrbitControls',
    'underscore': '../vendor/underscore',
    'jquery': '../vendor/jquery'
  },
  shim: {
    'three': { exports: 'THREE' },
    'threejs-controls/OrbitControls': { deps: [ 'three' ] }
  }
});

require([
  'pubsub', 'underscore', 'three',
  'explorer', 'camera', 'renderer', 'orbit',
  'menu', 'model'
], function(
  PubSub, _, THREE,
  Explorer, Camera, Renderer, Orbit,
  Menu, Model
) {
  var explorer = Explorer.getInstance();
  var camera = new Camera();
  var renderer = new Renderer(explorer, camera);

  camera.setPosition(new THREE.Vector3(5, 5, 5));
  renderer.startAnimation();

  /*jshint unused:false*/
  var orbit = new Orbit(camera);
  renderer.onAnimationUpdate(orbit.update.bind(orbit));

  var menu = new Menu();
  var model = new Model();

  menu.onModelChange(function(message, modelName) {
    model.load(modelName);
  });

  model.onLoad(function(message, model) {
    if (_.isObject(model)) {
      explorer.add(model);
    }
  });

});

(function() {
  define(["camera", "scene", "container", "loop", "lodash", "three"], function(camera, scene, containerManager, loopManager, _) {
    var mousePosition, onMouseClick, rayCaster, targets;
    mousePosition = new THREE.Vector2();
    rayCaster = new THREE.Raycaster();
    targets = [];
    onMouseClick = function(event) {
      var intersects;
      if (loopManager.isRunning()) {
        mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
        mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
        rayCaster.setFromCamera(mousePosition, camera);
        intersects = rayCaster.intersectObjects(targets);
        return _.each(intersects, function(mesh) {
          return mesh.object.userData.onClick();
        });
      }
    };
    containerManager.listenMouseClick(onMouseClick);
    return {
      addTarget: function(target) {
        return targets.push(target);
      },
      removeTarget: function(target) {
        return _.remove(targets, function(el) {
          return el === target;
        });
      }
    };
  });

}).call(this);

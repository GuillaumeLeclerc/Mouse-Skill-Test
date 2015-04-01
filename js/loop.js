(function() {
  define(["renderer", "scene", "camera", "container", "three"], function(renderer, scene, camera, containerManager) {
    var loopFunction, running;
    running = false;
    loopFunction = function() {
      renderer.render(scene, camera);
      return requestAnimationFrame(loopFunction);
    };
    containerManager.listenStartGame(function() {
      running = true;
      return loopFunction();
    });
    return {
      isRunning: function() {
        return running;
      }
    };
  });

}).call(this);

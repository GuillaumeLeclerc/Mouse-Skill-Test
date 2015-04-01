(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(["chance", "scene", "raycaster", "camera", "three"], function(chance, scene, rayCastManager, camera) {
    var Target;
    Target = (function() {
      Target.rayCaster = new THREE.Raycaster();

      Target.prototype.destructor = function() {
        scene.remove(this.sphere);
        return rayCastManager.removeTarget(this.sphere);
      };

      Target.prototype.clicked = function() {
        console.log("CLICKED");
        return this.destructor();
      };

      function Target() {
        this.clicked = bind(this.clicked, this);
        this.destructor = bind(this.destructor, this);
        var geometry, material;
        geometry = new THREE.SphereGeometry(1, 32, 32);
        material = new THREE.MeshBasicMaterial({
          color: 0xffff00
        });
        this.sphere = new THREE.Mesh(geometry, material);
        this.sphere.position.set(0, 0, -10);
        scene.add(this.sphere);
        this.sphere.userData.onClick = this.clicked.bind(this);
        rayCastManager.addTarget(this.sphere);
      }

      return Target;

    })();
    return {
      createNewTarget: function() {
        return new Target();
      }
    };
  });

}).call(this);

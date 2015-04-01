(function() {
  define(["container", "three"], function(containerManager) {
    var renderer, updatingRenderSize;
    renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    containerManager.$container.append(renderer.domElement);
    renderer.domElement.setAttribute("id", "renderZone");
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;
    renderer.shadowMapType = THREE.PCFShadowMap;
    updatingRenderSize = function(e) {
      var dims;
      dims = e.detail;
      return renderer.setSize(dims.width, dims.height);
    };
    containerManager.listenSizeChanged(updatingRenderSize, true);
    return renderer;
  });

}).call(this);

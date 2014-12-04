function initWebGL(canvas) { 
  // Initialise la variable gloable gl à null
  gl = null; 

  try { 
    // Essaye de récupérer le contexte standard. En cas d'échec, il teste l'appel experimental
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl"); 
  } 
  catch(e) {} 

   // Si le contexte GL n'est pas récupéré, on l'indique à l'utilisateur.
    if (!gl) { 
      alert("Impossible d'initialiser le WebGL. Il est possible que votre navigateur ne supporte pas cette fonctionnalité."); 
  } 
}  


window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var renderFunction = function(time) {
	gl.clearColor(Math.random(), Math.random(), Math.random(),1);
	gl.clear(gl.COLOR_BUFFER_BIT);

}

function animloop(time){
  requestAnimFrame(animloop);
  renderFunction(time);
};

function createFullScreenCanvas() {
	var width = jQuery(document).width();
	var height = jQuery(document).height();
	var $canvas = jQuery("<CANVAS></CANVAS>");
	$canvas.attr("id", "glCanvas");
	$canvas.attr("width", width);
	$canvas.attr("height", height);
	initWebGL($canvas.get(0));
	jQuery(document.body).empty().append($canvas);
	requestAnimFrame(animloop);
}
		


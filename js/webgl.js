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

function createFullScreenCanvas() {
	var c = jQuery(container);
	var width = jQuery(window).width();
	var height = jQuery(window).height();
	var $canvas = jQuery("<CANVAS></CANVAS>");
	$canvas.attr("id", "glCanvas");
	$canvas.attr("width", width);
	$canvas.attr("height", width);
	initWebGL($canvas.get(0));
}
		


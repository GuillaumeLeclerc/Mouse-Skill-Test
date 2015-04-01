requirejs.config
	baseUrl : "js/"
	paths :
		"jquery" : "../bower_components/jquery/dist/jquery.min"
		"three" : "../bower_components/threejs/build/three.min"
		"chance" : "../bower_components/chance/chance"
		"lodash" : "../bower_components/lodash/lodash.min"
		"bigScreen" : "../bower_components/bigscreen/bigscreen.min"

requirejs [
		"container"
		"game"
		"loop"
	], ($, chance, containerManager, lodash, bigScreen) ->

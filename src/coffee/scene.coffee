define [
		"camera"
	], (camera) ->
		scene = new THREE.Scene()
		scene.add camera

		hl = new THREE.HemisphereLight( 0x0000ff, 0x00ff00, 0.6 )
		scene.add hl

		return scene

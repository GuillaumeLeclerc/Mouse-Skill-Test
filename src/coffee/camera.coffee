define [
		"container"
		"three"
	], (containerManager) ->
		camera = new THREE.PerspectiveCamera 50, 1, 1, 1000
		camera.position.set 0,0,0
		camera.up.set 0,0,1

		updatingRenderSize = (e) ->
			dims = e.detail
			aspect = dims.width / dims.height
			camera.aspect = aspect
			camera.updateProjectionMatrix()

		containerManager.listenSizeChanged updatingRenderSize, true

		return camera





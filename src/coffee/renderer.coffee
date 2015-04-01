define [
		"container"
		"three"
	], (containerManager)->
		renderer = new THREE.WebGLRenderer({antialias : true})
		containerManager.$container.append renderer.domElement
		renderer.domElement.setAttribute "id", "renderZone"
		renderer.shadowMapEnabled = true
		renderer.shadowMapSoft = true
		renderer.shadowMapType = THREE.PCFShadowMap
		updatingRenderSize = (e) ->
			dims = e.detail
			renderer.setSize dims.width, dims.height

		containerManager.listenSizeChanged updatingRenderSize, true
		return renderer



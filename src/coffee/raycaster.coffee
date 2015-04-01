define [
		"camera"
		"scene"
		"container"
		"loop"
		"lodash"
		"three"
	], (camera, scene, containerManager, loopManager,  _) ->
		mousePosition = new THREE.Vector2()
		rayCaster = new THREE.Raycaster()

		targets = []

		onMouseClick = (event) ->
			if loopManager.isRunning()
				mousePosition.x = ( event.clientX / window.innerWidth ) * 2 - 1
				mousePosition.y = - ( event.clientY / window.innerHeight ) * 2 + 1
				rayCaster.setFromCamera mousePosition, camera

				intersects = rayCaster.intersectObjects targets
				
				_.each intersects, (mesh) ->
					mesh.object.userData.onClick()

		containerManager.listenMouseClick onMouseClick

		return {
			addTarget : (target) ->
				targets.push target
			removeTarget : (target) ->
				_.remove targets, (el) -> el is target
		}





		

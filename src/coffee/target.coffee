define [
		"chance"
		"scene"
		"raycaster"
		"camera"
		"three"
	], (chance, scene, rayCastManager, camera) ->

		class Target
			@rayCaster = new THREE.Raycaster()
			destructor : () =>
				scene.remove @sphere
				rayCastManager.removeTarget @sphere
			clicked : () =>
				console.log "CLICKED"
				@destructor()
			constructor : () ->
				geometry = new THREE.SphereGeometry( 1, 32, 32 )
				material = new THREE.MeshBasicMaterial( {color: 0xffff00} )
				@sphere = new THREE.Mesh( geometry, material )
				@sphere.position.set 0, 0, -10
				scene.add @sphere
				@sphere.userData.onClick = @clicked.bind this
				rayCastManager.addTarget @sphere

		return {
			createNewTarget : () ->
				new Target()

		}
				


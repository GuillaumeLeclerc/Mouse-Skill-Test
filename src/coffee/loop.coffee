define [
		"renderer"
		"scene"
		"camera"
		"container"
		"three"
	], (renderer, scene, camera, containerManager) ->

		running = off
		
		loopFunction = () ->
			renderer.render scene, camera
			requestAnimationFrame loopFunction

		containerManager.listenStartGame () ->
			running = on
			loopFunction()
		return {
			isRunning : () ->
				return running
		}


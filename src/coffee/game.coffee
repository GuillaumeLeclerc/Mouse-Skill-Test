define [
		"container"
		"target"
		"three"
		"renderer"
	], (containerManager, targetCreator) ->
		class Game
			constructor : () ->
				@container = containerManager.$container
				containerManager.listenStartGame @start
			start : () =>
				console.log "started"
				targetCreator.createNewTarget()

		game = new Game()

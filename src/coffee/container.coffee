define [
		"jquery"
		"bigScreen"
	], ($) ->
		class Menu
			constructor : (@container) ->
				@m = $('<div id="menu"></div>')
				@fullScreenButton = $('<div class="button">Toggle fullScreen</div>')
				@startGameButton = $('<div class="button">Start Game</div>')
				@gameTitle = $('<h1 id="gameTitle">Mouse Skill Test</h1>')

				@m.append @gameTitle
				@m.append @startGameButton

				@fullScreenButton.on "click", () =>
					BigScreen.toggle @container.get(0)

				@startGameEvent = new Event('start')

				$(window).resize () =>
					dims =
						width : @container.width()
						height : @container.height()
					ev = new CustomEvent('sizeChanged', {detail : dims})
					document.dispatchEvent ev



				@startGameButton.on "click", () =>
					@hideFunction()
					document.dispatchEvent @startGameEvent

				@m.append @fullScreenButton if BigScreen.enabled


			display : () =>
				@container.append @m

			hideFunction : () =>
				@m.remove()


		$container = $('<div id="mainContainer"></div>')
		menu = new Menu $container
		menu.display()

		$(document.body).append $container
		$container.append $("bonjour")

		return {
			$container : $container
			listenMouseClick : (callback) ->
				window.addEventListener 'mousedown', callback, false
			listenStartGame : (callback) ->
				document.addEventListener 'start', callback, false
			listenSizeChanged : (callback, callNow = false) ->
				document.addEventListener 'sizeChanged', callback, false
				if callNow
					callback {
						detail :
							width : $container.width()
							height : $container.height()
					}

		}


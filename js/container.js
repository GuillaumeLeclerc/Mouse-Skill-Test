(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(["jquery", "bigScreen"], function($) {
    var $container, Menu, menu;
    Menu = (function() {
      function Menu(container) {
        this.container = container;
        this.hideFunction = bind(this.hideFunction, this);
        this.display = bind(this.display, this);
        this.m = $('<div id="menu"></div>');
        this.fullScreenButton = $('<div class="button">Toggle fullScreen</div>');
        this.startGameButton = $('<div class="button">Start Game</div>');
        this.gameTitle = $('<h1 id="gameTitle">Mouse Skill Test</h1>');
        this.m.append(this.gameTitle);
        this.m.append(this.startGameButton);
        this.fullScreenButton.on("click", (function(_this) {
          return function() {
            return BigScreen.toggle(_this.container.get(0));
          };
        })(this));
        this.startGameEvent = new Event('start');
        $(window).resize((function(_this) {
          return function() {
            var dims, ev;
            dims = {
              width: _this.container.width(),
              height: _this.container.height()
            };
            ev = new CustomEvent('sizeChanged', {
              detail: dims
            });
            return document.dispatchEvent(ev);
          };
        })(this));
        this.startGameButton.on("click", (function(_this) {
          return function() {
            _this.hideFunction();
            return document.dispatchEvent(_this.startGameEvent);
          };
        })(this));
        if (BigScreen.enabled) {
          this.m.append(this.fullScreenButton);
        }
      }

      Menu.prototype.display = function() {
        return this.container.append(this.m);
      };

      Menu.prototype.hideFunction = function() {
        return this.m.remove();
      };

      return Menu;

    })();
    $container = $('<div id="mainContainer"></div>');
    menu = new Menu($container);
    menu.display();
    $(document.body).append($container);
    $container.append($("bonjour"));
    return {
      $container: $container,
      listenMouseClick: function(callback) {
        return window.addEventListener('mousedown', callback, false);
      },
      listenStartGame: function(callback) {
        return document.addEventListener('start', callback, false);
      },
      listenSizeChanged: function(callback, callNow) {
        if (callNow == null) {
          callNow = false;
        }
        document.addEventListener('sizeChanged', callback, false);
        if (callNow) {
          return callback({
            detail: {
              width: $container.width(),
              height: $container.height()
            }
          });
        }
      }
    };
  });

}).call(this);

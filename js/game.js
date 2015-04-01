(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(["container", "target", "three", "renderer"], function(containerManager, targetCreator) {
    var Game, game;
    Game = (function() {
      function Game() {
        this.start = bind(this.start, this);
        this.container = containerManager.$container;
        containerManager.listenStartGame(this.start);
      }

      Game.prototype.start = function() {
        console.log("started");
        return targetCreator.createNewTarget();
      };

      return Game;

    })();
    return game = new Game();
  });

}).call(this);

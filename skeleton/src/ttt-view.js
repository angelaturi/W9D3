class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    // const $li = $('li');
    // const $ul = $('ul');
    // const toggleClass = (e) => {
    //   $li.toggleClass('X O');
    //   this.game.playMove([1,1]);
    // }
    this.$el.on('click', 'li', (e) => {
      let $square = $(e.currentTarget);

      this.makeMove($square);
    }) //determine what/how to access square


  }

  makeMove($square) {
    const pos = $square.data('pos');
    const currentPlayer = this.game.currentPlayer;

    $square.addClass(currentPlayer)
    try {
      this.game.playMove(pos);
    } catch {
      alert('Invalid move!');
      return;
    }

    if (this.game.isOver()) {
      this.$el.off('click')
      this.$el.addClass('game-over');

      const winner = this.game.winner();
      const $figcaption = $("<figcaption>")

      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $figcaption.html(`You win, ${winner}!`)
      } else {
        $figcaption.html("It's a draw!")
      }
      this.$el.append($figcaption);
    } 

    // if (this.game.currentPlayer === 'X') {
    //   $square.text('X');
    // } else {
    //   $square.text('O');
    // }
  }

  setupBoard() {
    const $ul = $('<ul>');

    for(let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $('<li>');
        $ul.append($li);
        $li.data('pos', [i, j])
      }
    }
    return this.$el.append($ul);
  }
}

module.exports = View;

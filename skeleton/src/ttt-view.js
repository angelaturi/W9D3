class View {
  constructor(game, $el) {}

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    const $ul = $('<ul>');

    for(let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const $li = $('<li>');
        $ul.append($li);
      }
      
    }
  }
}

module.exports = View;

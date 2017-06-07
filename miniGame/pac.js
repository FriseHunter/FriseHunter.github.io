//module
//global
(function() {
      //local
      const MAX_ROWS = 10;
      const MAX_COLS = 10;
      var gdiv = null;
      var score = 20;
      // legend
      // "." -> empty
      // "#" -> wall
      // "@" -> pac
      // "*" -> beer
      var grid = [
            //0,  1,  2,  3,  4,  5,  6,  7,  8,  9


            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], //0
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], //1
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], //2
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], //3
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], //4
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], //5
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], //6
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], //7
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], //8
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'] //9
      ];

      function init() {
            console.log('init initialising...')
            gdiv = document.body.childNodes[5];

            for (n = parseInt(Math.random() * 5) + 3; n >= 0; n--) {
                  addCherry();
                  addCherry();
                  addCherry();

            }
            addWall();
            addPac();
            //

            show();
      }

      function move() {

            console.log(window.event);

            if (window.event.code == "ArrowUp" && pacr > 0) {
                  grid[pacr][pacc] = '.';
                  if (grid[pacr - 1][pacc] == '*') {
                        score += 5
                  }
                  if (grid[pacr - 1][pacc] == '.') {
                        score -= 1
                  };
                  if (grid[pacr - 1][pacc] == '#') {
                        window.event.code.preventDefault();
                  }
                  pacr--;
            }
            if (window.event.code == "ArrowDown" && pacr < 9) {
                  grid[pacr][pacc] = '.';
                  if (grid[pacr + 1][pacc] == '*') {
                        score += 5
                  };
                  if (grid[pacr + 1][pacc] == '.') {
                        score -= 1
                  };
                  if (grid[pacr + 1][pacc] == '#') {
                        window.event.code.preventDefault();
                  }
                  pacr++;
            }
            if (window.event.code == "ArrowLeft" && pacc > 0) {
                  grid[pacr][pacc] = '.';
                  if (grid[pacr][pacc - 1] == '*') {
                        score += 5
                  };
                  if (grid[pacr][pacc - 1] == '.') {
                        score -= 1
                  };
                  if (grid[pacr][pacc - 1] == '#') {
                        window.event.code.preventDefault();
                  }
                  pacc--;
            }
            if (window.event.code == "ArrowRight" && pacc < 9) {
                  grid[pacr][pacc] = '.';
                  if (grid[pacr][pacc + 1] == '*') {
                        score += 5
                  };
                  if (grid[pacr][pacc + 1] == '.') {
                        score -= 1
                  };
                  if (grid[pacr][pacc + 1] == '#') {
                        window.event.code.preventDefault();
                  }
                  pacc++;
            }


            grid[pacr][pacc] = '@';
            var showScore = document.getElementById('score');
            showScore.innerText = `Score = ${score}`;


            show();
            if (score < 0) {
                  var showScore = document.getElementById('score');
                  showScore.innerText += "Game Over";
                  alert("Game over!!!");
            };
      }

      function addPac() {
            window.pacr = parseInt(9.999 * Math.random());
            window.pacc = parseInt(9.999 * Math.random());
            grid[pacr][pacc] = '@';
      }
      window.move = move;

      function addCherry() {
            var r = parseInt(9.999 * Math.random());
            var c = parseInt(9.999 * Math.random());
            grid[r][c] = '*';

      }

      function addWall() {
            var r = parseInt(9.999 * Math.random());
            var c = parseInt(9.999 * Math.random());
            var l = parseInt(6 * Math.random() + 2);
            for (n = 0; n <= l; n++) {
                  grid[r][c + n] = '#';
            };
            for (i = 0; i <= l; i++) {
                  grid[r][c - i] = '#';
            };
            for (j = 0; j <= l; j++) {
                  grid[r - j][c] = '#';
            };
            for (u = 0; u <= l; u++) {
                  grid[r + u][c] = '#';
            };


      }




      function show() {
            console.log('show initialising...');
            //delete content
            gdiv.innerHTML = '';

            for (row = 0; row < MAX_ROWS; row++) {
                  for (col = 0; col < MAX_COLS; col++) {
                        if (grid[row][col] == '.') {
                              gdiv.innerHTML += '<div class="empty"></div>';
                        }
                        if (grid[row][col] == '*') {
                              gdiv.innerHTML += '<div class="cherry"></div>';
                        }
                        if (grid[row][col] == '#') {
                              gdiv.innerHTML += '<div class="wall"></div>';
                        }
                        if (grid[row][col] == '@') {
                              gdiv.innerHTML += '<div class="pac"></div>';
                        }
                  }
            }
      }

      //export
      window.init = init;
      console.log(grid);

})();

/*
1) Добавить условие так, что - бы не заходить на битон. "(+)"
2) Создать переменную счёт и когда попаданет на вишню += 5очк. "(+)"
3) создать див в котором отображается счёт. "(+)"
4) за цкаждое движение - 1 очк. "(+)"
5) Проверить очки на 0 если 0 игра окончена. "(+)"
6) дать фору в 20 очков. "(+)"
*/

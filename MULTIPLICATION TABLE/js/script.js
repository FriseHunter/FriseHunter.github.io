var table = '';
var y = "";
var el = document.getElementById("text");
var elTbl = document.getElementById("table");

function getNumber() {

      var text = el.value;
      y = text;

      for (var i = 1; i <= 10; i++) {
            table += `${y} x ${i} = ${(y*i)} </br>`;

      }
      elTbl.innerHTML = table;
      table = "";
      console.log(text);

}

function clear__text() {
      window.location.reload();
}

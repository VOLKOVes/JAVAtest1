 var box = document.getElementById("box");
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        box.style.left = pos + "px";
      }
    }

    document.getElementById("changeText").addEventListener("click", function() {
      document.getElementById("example").innerHTML = "Текст изменен!";
    });

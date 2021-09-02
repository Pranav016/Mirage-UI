const move = () => {
    var elem = document.getElementById("mybar");
    var width = 1;
    var id = setInterval(frame, 10)

    function frame(){
      if(width >= 100){
        clearInterval(id);
      }else{
        width++;
        elem.style.width = width + "%";
        document.getElementById("incvalue").innerHTML = width + "%";
      }
    }
  }
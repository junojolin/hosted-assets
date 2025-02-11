var tlinks = document.getElementsByClassName("links")
  var tcontents = document.getElementsByClassName("contents")

  function opentab(tabname){
    for(link of tlinks){
        link.classList.remove("link");
    }
    for(content of tcontents){
        content.classList.remove("tab");
    }
    event.currentTarget.classList.add("link")
    document.getElementById(tabname).classList.add("tab")
  }

  var bar = document.getElementById("sidemenu");

  function openmenu(){
    bar.style.right = "0";
  }

  function closemenu(){
    bar.style.right = "-200px";
  }


  
function textExpandCompress() {
    var expand = document.getElementById("expand");
    var compress = document.getElementById("compress");
    var toggleButton = document.getElementById("toggleButton");
  
    if (expand.style.display === "none") {
      expand.style.display = "inline";
      toggleButton.innerHTML = "More..."; 
      compress.style.display = "none";
    } else {
      expand.style.display = "none";
      toggleButton.innerHTML = "Less"; 
      compress.style.display = "inline";
    }
  }

function getDateTime() {
    return new Date().toString();
}
/**
 * This function is used to expand and compress contents.
 * */
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

/**
 * Function to return current date & time in format: Day Month DD YYYY HH:MM:SS Timezone
 * E.g. Sat May 21 2022 20:33:49 GMT+0530 (India Standard Time)  
 * 
 * @returns current time.
 * */
function getDateTime() {
    return new Date().toString();
}
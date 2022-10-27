function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function hideShow() {

let working = 1;
while(working<= 10) {

        if(!document.getElementById("apple").getAttribute("hidden")){
            document.getElementById("apple").setAttribute("hidden", "true");
            sleep(1000);
            working++;
        } else {
            document.getElementById("apple").setAttribute("hidden", "false");
            sleep(1000);
            working++;
        }

    }
 }
window.onload = hideShow
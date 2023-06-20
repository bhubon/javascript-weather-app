
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log(xhttp.responseText)
    }
};
xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=23.928262&lon=90.704273&appid=b4336e17ec9ff6998276f592154ffa10", true);

xhttp.send();
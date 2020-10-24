let request = new XMLHttpRequest() ;
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var response = JSON.parse(this.responseText);
       document.getElementById("meteo").innerHTML = response.current_condition.condition;
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris", true);
request.send();
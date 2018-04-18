$( document ).ready(function() {
  getRecipeFinder();
  getCityBrewV2();
  getThisSite();
});

function getRecipeFinder(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var string = obj[0].commit.author.date;
            var date = new Date(string)
            $('#recipeFinderDate').text("Last updated " +
                                        (date.getMonth()+1) +
                                        "." + date.getDate() +
                                         "." + String(date.getFullYear()).substring(2)
                                       );
       }
    };
  xhttp.open("GET", "https://api.github.com/repos/mtwichel/RecipeFinderApp/commits", true);
  xhttp.send();
}

function getThisSite(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var string = obj[0].commit.author.date;
            var date = new Date(string)
            $('#personalsiteDate').text("Last updated " +
                                        (date.getMonth()+1) +
                                        "." + date.getDate() +
                                         "." + String(date.getFullYear()).substring(2)
                                       );
       }
    };
  xhttp.open("GET", "https://api.github.com/repos/mtwichel/PersonalSiteV2/commits", true);
  xhttp.send();
}

function getCityBrewV2(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var string = obj[0].commit.author.date;
            var date = new Date(string)
            $('#cbpaperworkv2Date').text("Last updated " +
                                        (date.getMonth()+1) +
                                        "." + date.getDate() +
                                         "." + String(date.getFullYear()).substring(2)
                                       );
       }
    };
  xhttp.open("GET", "https://api.github.com/repos/mtwichel/CBPaperworkV2/commits", true);
  xhttp.send();
}

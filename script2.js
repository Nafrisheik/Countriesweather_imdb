async function getMovie() {
    let searchItem = document.getElementById("movieName").value;
    let urlData1 = await fetch("https://www.omdbapi.com/?s="+searchItem+"&apikey=5a7c2cf5");
    let data1 = await urlData1.json();
    let data = await data1.Search;
    console.log(data);
    var div1 = [];
  var div2 = [];
  var heading = [];
  var image = [];
  var h61 = [];
  var h62 = [];
  var h63 = [];
//   var button = [];
  var div = document.createElement("div");
//   var capital = [];
    for (i = 0; i < data.length; i++) {
        div1[i] = document.createElement("div");
        div1[i].className = "card";
        heading[i] = document.createElement("h5");
        heading[i].innerText = i + 1 + ")" + " " + data[i].Title;
        heading[i].className = "card-title";
        image[i] = document.createElement("img");
        image[i].className = "card-img-top";
        image[i].src = data[i].Poster;
        div2[i] = document.createElement("div");
        div2[i].className = "card-body";
        h61[i] = document.createElement("h6");
        h61[i].className = "card-text";
        h61[i].innerText = "Year:" + data[i].Year;
        h62[i] = document.createElement("h6");
        h62[i].className = "card-text";
        h62[i].innerText =
          "Type:" + data[i].Type;
        h63[i] = document.createElement("h6");
        h63[i].className = "card-text";
        h63[i].innerText = "Region:" + data[i].imdbID;
        div2[i].append(h61[i], h62[i], h63[i]);        
        div1[i].append(heading[i], image[i], div2[i]);
        div.appendChild(div1[i]);
      }
    //   var container= document.getElementsByClassName("container");       
        document.getElementById("cont").appendChild(div);
        // document.body.appendChild(container);
}
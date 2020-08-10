var countryData;
async function getWeather(event) {
  let cityname = countryData[event.srcElement.id].capital;
  let urlData = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityname +
      "&appid=d723669029da1e6bbb5c45c879900b55"
  );
  let data1 = await urlData.json();
  alert(
    "The temperature currently in " +
      cityname +
      "is " +
      (data1.main.temp - 273.15) +
      " degree Celcius"
  );
}

async function getCountryData() {
  let urlData = await fetch("https://restcountries.eu/rest/v2/all");
  let data = await urlData.json();
  countryData = data;
  var div1 = [];
  var div2 = [];
  var heading = [];
  var image = [];
  var h61 = [];
  var h62 = [];
  var h63 = [];
  var button = [];
  var div = document.createElement("div");
  var capital = [];
  div.className = "container";
  for (i = 0; i < data.length; i++) {
    div1[i] = document.createElement("div");
    div1[i].className = "card";
    heading[i] = document.createElement("h5");
    heading[i].innerText = i + 1 + ")" + " " + data[i].name;
    heading[i].className = "card-title";
    image[i] = document.createElement("img");
    image[i].className = "card-img-top";
    image[i].src = data[i].flag;
    div2[i] = document.createElement("div");
    div2[i].className = "card-body";
    h61[i] = document.createElement("h6");
    h61[i].className = "card-text";
    h61[i].innerText = "Capital:" + data[i].capital;
    h62[i] = document.createElement("h6");
    h62[i].className = "card-text";
    h62[i].innerText =
      "Country codes:" + data[i].alpha2Code + "," + data[i].alpha3Code;
    h63[i] = document.createElement("h6");
    h63[i].className = "card-text";
    h63[i].innerText = "Region:" + data[i].region;
    div2[i].append(h61[i], h62[i], h63[i]);
    button[i] = document.createElement("button");
    button[i].innerHTML = "Get Weather";
    button[i].className = "btn btn-primary";
    button[i].id = i;
    button[i].addEventListener("click", getWeather);
    div1[i].append(heading[i], image[i], div2[i], button[i]);
    div.appendChild(div1[i]);
  }
  var container = document.createElement("div");
  container.className = "container";
  container.appendChild(div);
  document.body.appendChild(container);
}
getCountryData();

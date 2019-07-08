var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);


function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item) {
      resp.forEach(function(item){
          var liEl = document.createElement('li');
          liEl.innerHTML = '<h2>'+item.name+': </h2>';
          liEl.innerHTML += '<p><b>Domain: </b>'+item.topLevelDomain+'</br>';
          liEl.innerHTML += '<p><b>Capital: </b>'+item.capital+'</p>';
          liEl.innerHTML += '<p><b>Region: </b>'+item.region+'</p>';
          liEl.innerHTML += '<p><b>Subregion: </b>'+item.subregion+'</p>';
          liEl.innerHTML += '<hr>';
          countriesList.appendChild(liEl);
      });
        });
}

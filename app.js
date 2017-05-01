var searchTextInfo = document.getElementById('searchbar')
var searchSubmit = document.getElementById('SearchSubmit')

var updateArticle = function () {
  var search = searchTextInfo.value
  var random = Math.floor((Math.random() * 1000000) + 1)
  document.getElementById('SearchInfo').innerHTML = 'You searched for: ' + search + ' brought up ' + random + ' results'
}
searchSubmit.addEventListener('click', updateArticle)

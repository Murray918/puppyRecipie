// console.log('hello world')
//document.getElementById('searchBtn').addEventListener
let searchWrapper = document.querySelector('.searchWrapper')
let input = document.getElementById('query')
searchBtn = document.getElementById('searchBtn').addEventListener('click', searchFn)


function searchFn() {
  let searchResult = input.value
  console.log(searchResult)
  let url = 'http://recipepuppyproxy.herokuapp.com/api/?q=' + searchResult;
  console.log(searchResult);
  console.log('url is ' + url);


  fetch(url)
    .then(function(response) {
      if (response.status !== 200) {
        console.log('problem with status: ' + response.status);
        return
      }

      // examine the text in the response
      response.json().then(function(data) {
        console.log(data);
            data.forEach(function(g) {
              let template = `<div class="result" id="title">${g.title}</div>
        <div class="result" id="href">${g.href}</div>
        <dt class="result" id="ingrediants"><dl> ${g.ingredients}</dl></dt>`;

              searchWrapper.innerHTML += template
            })
      })

    })
}

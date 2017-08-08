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


            data.results.forEach(function(g) {
              if (g.thumbnail === ''){
                g.thumbnail = 'http://via.placeholder.com/100x70  '
              }
              let template = `<div class="each">
              <div class="result" class="title"><h3>${g.title}</h3></div>
              <div class="result" class="image"><a  href='${g.href}'><img src=${g.thumbnail}></a></div>
              <div class="result" clas="ingredients"><dl>${g.ingredients}</dl></dt></div>
              </div>`;

              searchWrapper.innerHTML += template
            })
      })

    })
}

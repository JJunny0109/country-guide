const searchEngine = document.querySelector("#searchEngine");
const searchBtn = document.querySelector("#searchBtn");
let API_URL = 'https://restcountries.com/v3.1/name/deutschland'
let country = "UK";
let img_URL = `https://flagcdn.com/w320/kr.png`;
let capital = document.querySelector("#capital");
let continent = document.querySelector("#continent");
let currency = document.querySelector("#currency");
let language = document.querySelector("#language");
let flag = document.querySelector("#countryFlag");
let countryName = document.querySelector("#countryName");

searchBtn.addEventListener("click", () => {
  getAPI_URL();
  fetchData();
})

function getAPI_URL(){
  country = searchEngine.value;
  searchEngine.value = "";
  API_URL = `https://restcountries.com/v3.1/name/${country}`
};

function fetchData(){
  fetch(API_URL)
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('API 호출에 실패하였습니다.');
    }
  })
  .then(function(data) {
    console.log(data);
    document.querySelector('#countryArea').style.display = 'flex';

    capital.innerHTML = data[0].capital;
    continent.innerHTML = data[0].continents;
    let obj = Object.values(data[0].currencies);
    let firstValue = obj[0];
    currency.innerHTML = firstValue.name;
    obj = Object.values(data[0].languages);
    firstValue = obj[0];
    language.innerHTML = firstValue;
    flag.src = data[0].flags.png;
    countryName.innerHTML = data[0].name.official;
    // 응답 데이터를 처리합니다.
  })
  .catch(function(error) {
    console.log('에러 발생:', error.message);
    displayError()
    // 에러 처리를 수행합니다.
  });
}
//GPT로 작성한 fetch 함수를 이용한 API가져오기

function displayError(){
  alert('Invalid Country Name. Try else!');
}
//API 불러오기에 실패하였을 때 에러 메시지를 화면에 출력하는 함수
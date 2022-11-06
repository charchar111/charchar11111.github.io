const quotes = [
  {
    quote: "후회는 어린애나 하는 것이다.",
    author: "작가 미상",
  },
  {
    quote:
      "상처는 깨달음을 위한 당연한 대가다. 배운다는 건 곧 상처받는 일이다.",
    author: "정희진",
  },
  {
    quote:
      "어른이 된다는 건 수많은 희망을 단호하게 묻어버리는 법을 배우는 것이다.",
    author: "alain de botton",
  },
  {
    quote: "대가가 없으면 얻는 것도 없다. 대가가 무거울수록 얻는 것도 무겁다",
    author: "<새벽의 나나>",
  },
  {
    quote:
      "망각은 과거의 치욕으로 다시 돌아가게 하지만, 기억은 구원에 이르는 비결이다.",
    author: "Baal Shem Tov",
  },

  {
    quote:
      "어떤 평범함은 그것이 일반화되고 일상화될 때 우리 인간 속에 존재하고 있는 그 어떤 악보다 커다란 파멸을 가져올 수 있다",
    author: "Hannah Arendt",
  },
  {
    quote: "비판적인 태도는 인간의 생산성과 품위를 유지시키는 유일한 조건이다",
    author: "Bertolt Brecht",
  },
  {
    quote: "백 가지 이론보다 한 가지 실행이 귀중한 것이다.",
    author: "Ernst Friedrich Fritz Schumacher",
  },
  {
    quote: "길이란 없던 곳을 밟고 지나감으로써 비로소 생기는 것이다.",
    author: "루쉰",
  },
  {
    quote:
      "네가 진실로 그것을 간절히 원하고, 열심히 노력하며, 기회를 붙잡는다면, 그리고 무엇보다도 절대로 네 꿈을 포기하지 않는다면, 네게 길이 있을거야",
    author: " Dame Jane Morris Goodall",
  },
];

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

console.log(quotes[quotes.length - 1]);

function wow() {
  console.dir(parseInt(Math.random() * 10));
}
// setInterval(wow, 1000);

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(todayQuote.quote);
console.log(todayQuote.author);

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

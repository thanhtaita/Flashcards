import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Title from "./components/Title.jsx";
import Quote from "./components/Quote.jsx";
import Author from "./components/Author.jsx";

function App() {
  const [count, setCount] = useState(0);

  // an array of many objects of authors and quotes
  const quotesInfo = [
    {
      author: "Nelson Mandela",
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      pic: "https://ca-times.brightspotcdn.com/dims4/default/fe75b8a/2147483647/strip/true/crop/2048x1444+0+0/resize/1362x960!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F61%2Fbc%2Fc03d505028601d32d4b2cfc6a94f%2Flat-nelson-mandela-man-wre0012883792-20120226",
    },
    {
      author: "Walt Disney",
      quote: "The way to get started is to quit talking and begin doing.",
      pic: "https://d.newsweek.com/en/full/1555427/walt-disney.jpg?w=1600&h=900&q=88&f=83a8c310d5e5ac64947061669d8b7783",
    },
    {
      author: "Steve Jobs",
      quote:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      pic: "https://www.history.com/.image/t_share/MTU4NDAzMTAyNzcxMjU4ODM3/steve-jobs-iphone-175852238.jpg",
    },
    {
      author: "Eleanor Roosevelt",
      quote:
        "If life were predictable it would cease to be life, and be without flavor.",
      pic: "https://ichef.bbci.co.uk/news/976/cpsprodpb/57FA/production/_85922522_eleanor_roosevelt_alamy976.jpg",
    },
    {
      author: "Oprah Winfrey",
      quote:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      pic: "https://www.hollywoodreporter.com/wp-content/uploads/2014/08/ophrah_winfrey.jpg?w=3000",
    },
    {
      author: "James Cameron",
      quote:
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      pic: "https://media.vanityfair.com/photos/5a15cfcf1310ef0d93e09716/7:3/w_1994,h_854,c_limit/james-cameron-embed.jpg",
    },
    {
      author: "John Lennon",
      quote: "Life is what happens when you're busy making other plans.",
      pic: "https://static.dw.com/image/16355716_605.jpg",
    },
    {
      author: "Mother Teresa",
      quote:
        "Spread love everywhere you go. Let no one ever come to you without leaving happier. ",
      pic: "https://static.dw.com/image/16355716_605.jpg",
    },
    {
      author: "Franklin D. Roosevelt",
      quote:
        "When you reach the end of your rope, tie a knot in it and hang on.",
      pic: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTczMTc4NTk3NzIzMzUwMTg0/fdr-wwii-gettyimages-514080362.jpg",
    },
    {
      author: "Margaret Mead",
      quote:
        "Always remember that you are absolutely unique. Just like everyone else.",
      pic: "https://media.wnyc.org/i/1200/627/l/80/1/Margaret-Mead-AP-700930019.jpg",
    },
  ];

  // document.addEventListener("DOMContentLoaded", function () {
  //   let flipCard = document.getElementById("arrow-back");
  //   let authorQuotePair = document.querySelector(".author-quote-pair");
  //   flipCard.addEventListener("click", function () {
  //     authorQuotePair.style.transform = "rotateY(180deg) translateX(-1rem)";
  //   });
  // });

  const countUp = () => {
    let randomNum = Math.floor(Math.random() * quotesInfo.length);
    while (randomNum == count) {
      randomNum = Math.floor(Math.random() * quotesInfo.length);
    }
    setCount(randomNum);
  };

  return (
    <div>
      <Title />
      <h3 className="numCards">Number of cards: {quotesInfo.length}</h3>
      <div className="content">
        <button id="arrow-back" className="arrow">
          &#8592;
        </button>
        <div className="flip-card">
          <div className="author-quote-pair">
            <Quote quote={quotesInfo[count].quote} />
            <Author
              author={quotesInfo[count].author}
              pic={quotesInfo[count].pic}
            />
          </div>
        </div>
        <button className="arrow" onClick={countUp}>
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default App;

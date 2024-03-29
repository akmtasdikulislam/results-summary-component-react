/* eslint-disable no-unused-vars */
import "./App.css";
import data from "./data.json";

function App() {
  return (
    <>
      <div className="container">
        <div className="result">
          <p>Your Result</p>
          <div className="circle">
            <p className="score">76</p>
            <p>of 100</p>
          </div>
          <p className="result_grade">Great</p>
          <p className="result_overview">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="summary">
          <p className="title">Summary</p>
          <div className="summary_topic_group">
            {/* Dynaically Generation *Summary Topics* */}
            {data.map((item) => (
              <div
                className="summary_topic"
                id={item.category.toLowerCase()}
                key={data.indexOf(item)}
              >
                <div>
                  <img src={`${item.icon}`} alt={item.category} />
                  <p>{item.category}</p>
                </div>
                <p className="summary_score">
                  <span>{item.score}</span> / 100
                </p>
              </div>
              // <SummaryTopic key={data.indexOf(datum)} data={datum} />
            ))}
          </div>
          <button>Continue</button>
        </div>
      </div>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://www.frontendmentor.io/profile/akmtasdikulislam">
          Akm Tasdikul Islam
        </a>
        .
      </div>
    </>
  );
}

export default App;

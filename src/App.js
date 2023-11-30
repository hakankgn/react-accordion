import { useState } from "react";
import "./styles.css";

const data = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur eos repellendus tempora rem odio quis commodi quod quasi, minima quos obcaecati dolorum unde voluptate ex possimus explicabo asperiores deleniti dolore."
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur eos repellendus tempora rem odio quis commodi quod quasi, minima quos obcaecati dolorum unde voluptate ex possimus explicabo asperiores deleniti dolore."
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur eos repellendus tempora rem odio quis commodi quod quasi, minima quos obcaecati dolorum unde voluptate ex possimus explicabo asperiores deleniti dolore."
  }
];

function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (idx) => {
    if (selected === idx) {
      return setSelected(null);
    }
    setSelected(idx);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        <h1>Frequently Asked Questions</h1>
        {data.map((item, idx) => (
          <div className="item" key={idx}>
            <div className="title" onClick={() => toggle(idx)}>
              <h2>{item.question}</h2>
              <span>{selected === idx ? "-" : "+"}</span>
            </div>
            <div className={selected === idx ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

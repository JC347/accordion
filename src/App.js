/*

import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are the chairs assembled",
    text: "Lorem ipsum dolor sit amet cosectetur,adipisicni elit.",
  },
  {
    title: "Where are the chairs assembled",
    text: "Lorem ipsum dolor sit amet cosectetur,adipisicni elit.",
  },
  {
    title: "Where are the chairs assembled",
    text: "Lorem ipsum dolor sit amet cosectetur,adipisicni elit.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num <= 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"} </p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
*/
/*
import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are the chairs assembled",
    text: "Lorem ipsum dolor sit amet cosectetur,adipisicni elit.",
  },
  {
    title: "Where are the chairs assembled",
    text: "Lorem ipsum dolor sit amet cosectetur,adipisicni elit.",
  },
  {
    title: "Where are the chairs assembled",
    text: "Lorem ipsum dolor sit amet cosectetur,adipisicni elit.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          num={i}
          text={el.text}
          key={el.title}
        ></AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ title, num, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : " "}`} onClick={handleToggle}>
      <p className="number">{num <= 9 ? `0 ${num + 1} ` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

*/

import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are the chairs assembled",
    text: "Lorem ipsum dolor sit amet cosectetur,adipisicni elit.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum dolor sit amet cosectetur,adipisicni elit.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Lorem ipsum dolor sit amet cosectetur,adipisicni elit.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onCurOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onCurOpen={setCurOpen}
        title="Test 1"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to :</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ title, num, curOpen, onCurOpen, children }) {
  const isOpen = num === curOpen;
  function handleToggle() {
    onCurOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num <= 9 ? `0 ${num + 1}` : num + 1} </p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

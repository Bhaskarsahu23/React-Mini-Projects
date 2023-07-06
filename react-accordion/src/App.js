import { useState } from 'react';
import './index.css';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
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
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          num={i}
          key={el.title}
          currOpen={currOpen}
          onOpen={setCurrOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        title="How to learn React"
        num={4}
        key={5439814566}
        currOpen={currOpen}
        onOpen={setCurrOpen}
      >
        <p>This is step by step guid on how to learn React:</p>
        <ul>
          <li>Learn history of React</li>
          <li>Learn creating components</li>
          <li>Learn about props</li>
          <li>Learn about states</li>
          <li>Learn how and where to use state</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, currOpen, onOpen, children }) {
  const isOpen = num === currOpen;

  function handleOpen() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={isOpen ? 'open item' : 'item'} onClick={handleOpen}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '+' : '-'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

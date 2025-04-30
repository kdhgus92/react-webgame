const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("권오현");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  // const onSubmitForm = (e) => {
  //   e.preventDefault();
  //   if (word[word.length - 1] === value[0]) {
  //     setResult("딩동댕");
  //     setWord(value);
  //     setValue("");
  //     inputRef.current.focus();
  //   } else {
  //     setResult("땡");
  //     setValue("");
  //     inputRef.current.focus();
  //   }
  // };

  // const onChangeInput = (e) => {
  //   setValue(e.target.value);
  // };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === e.target.children.word.value[0]) {
      setResult("딩동댕");
      setWord(e.target.children.word.value);
      e.target.children.word.value = "";
      inputRef.current.focus();
    } else {
      setResult("땡");
      e.target.children.word.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        {/* <input
          id="wordInput"
          className="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
        /> */}
        <input id="word" ref={inputRef} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;

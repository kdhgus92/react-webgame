import React, { useState, useRef } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요.");
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요.");
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("지금 클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
    } else if (state === "ready") {
      // 성급하게 클릭
      clearTimeout(timeout.current);
      setState("waiting");
      setMessage("너무 성급하시군요! 초록색이 된 후에 클릭하세요.");
    } else if (state === "now") {
      // 반응속도 체크
      endTime.current = new Date();
      setState("waiting");
      setMessage("클릭해서 시작하세요.");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균 시간:{result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {(() => {
        if (result.length === 0) {
          return null;
        } else {
          return (
            <>
              <div>
                평균 시간:{result.reduce((a, c) => a + c) / result.length}ms
              </div>
              <button onClick={onReset}>리셋</button>
            </>
          );
        }
      })()}
      {/* {renderAverage()} */}
    </>
  );
};

export default ResponseCheck;

// ref 값이 바뀐다고 해서 다시 렌더링되지 않는다.
// 값이 바뀌지만 화면에 영향 없고 싶을 때.

// 즉시 실행함수를 만들어서 내부에서 if문을 쓸 수 있다.

// 배열에 태그를 담아서 반환해도 유효한 문법. 대신 key를 잘 넣자.

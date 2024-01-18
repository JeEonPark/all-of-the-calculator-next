import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsRunning(true);
    countRef.current = setInterval(() => {
      setTime((time) => time + 10); // 밀리세컨드 단위로 증가
    }, 10);
  };

  const handleStop = () => {
    clearInterval(countRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(countRef.current);
  }, []);

  const formatTime = () => {
    const getMilliseconds = `0${Math.floor((time / 10) % 100)}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}:${getMilliseconds}`;
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="간단한 스톱워치 도구로 시간을 정확하게 측정하세요. 운동, 공부, 요리 등 다양한 활동에 이용할 수 있습니다."
        />
        <title>스톱워치 | 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>스톱워치</h1>
          <p>간단한 스톱워치 도구입니다.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div style={{ fontSize: "2em", fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>
              <span>{formatTime()}</span>
            </div>
            <div className="stopwatch-controls">
              {!isRunning && (
                <button style={{ margin: "5px" }} className="btn btn-primary" onClick={handleStart}>
                  시작
                </button>
              )}
              {isRunning && (
                <button style={{ margin: "5px" }} className="btn btn-secondary" onClick={handleStop}>
                  정지
                </button>
              )}
              <button style={{ margin: "5px" }} className="btn btn-danger" onClick={handleReset}>
                리셋
              </button>
            </div>
          </div>

          <div className="info">
            <h2>스톱워치 사용 방법:</h2>
            <br />
            <p>
              이 스톱워치는 간편하게 시간을 측정할 수 있도록 도와줍니다. '시작' 버튼을 눌러 시간 측정을 시작하고, '정지'
              버튼으로 중단할 수 있습니다.
            </p>
            <br />
            <p>
              시간 측정 중에는 '정지' 버튼이 활성화되며, 측정을 멈추고 싶을 때 사용할 수 있습니다. '리셋' 버튼으로
              시간을 초기화할 수 있습니다.
            </p>
            <br />
            <p>
              이 도구는 운동 시간 측정, 공부 시간 관리, 요리 시간 추적 등 다양한 상황에서 유용하게 사용할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;

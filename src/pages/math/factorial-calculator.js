import React, { useState } from "react";
import Head from "next/head";

function FactorialCalculator() {
  const [number, setNumber] = useState("");
  const [factorial, setFactorial] = useState(0);
  const [inputError, setInputError] = useState(false);

  const handleNumberChange = (e) => {
    const newNumber = e.target.value;
    if (!/^\d+$/.test(newNumber) && newNumber !== "") {
      setInputError(true);
    } else {
      setNumber(newNumber);
      setInputError(false);
    }
  };

  const calculateFactorial = () => {
    let result = 1;
    const n = parseInt(number);
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    setFactorial(result);
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="팩토리얼 계산기. 간단한 숫자 입력으로 팩토리얼 값을 계산하는 온라인 도구입니다. 숫자를 입력하고 계산 버튼을 눌러 팩토리얼 값을 얻으세요."
        />
        <title>팩토리얼 계산기 | 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>팩토리얼 계산기</h1>
          <p>숫자의 팩토리얼 값을 계산합니다.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>숫자 입력:</h4>
              <input
                type="text"
                id="number"
                className="form-control"
                value={number}
                onChange={handleNumberChange}
                placeholder="숫자를 입력하세요"
              />
            </div>
            {inputError && <p>유효한 정수를 입력하세요.</p>}

            <button className="btn btn-primary" onClick={calculateFactorial}>
              계산하기
            </button>

            <div className="result">
              <p className="result-text">
                <strong>계산 결과 : {factorial}</strong>
              </p>
            </div>
          </div>

          <div className="info">
            <h2>팩토리얼 계산기 설명:</h2>
            <br />
            <p>
              이 팩토리얼 계산기는 사용자가 입력한 숫자의 팩토리얼 값을 계산해주는 도구입니다. 숫자를 입력란에 입력하고
              '계산하기' 버튼을 누르면 해당 숫자의 팩토리얼 값이 계산됩니다.
            </p>
            <br />
            <p>
              팩토리얼은 주어진 숫자부터 1까지의 모든 정수의 곱입니다. 예를 들어, 5의 팩토리얼(5!)은 5 x 4 x 3 x 2 x 1 =
              120입니다.
            </p>
            <br />
            <p>이 계산기는 수학적 계산, 통계학, 확률론 등 여러 분야에서 유용하게 사용됩니다.</p>
            <br />
            <p>유효한 정수만 입력해야 하며, 대규모 숫자의 팩토리얼 계산은 시간이 오래 걸릴 수 있으니 주의하세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FactorialCalculator;

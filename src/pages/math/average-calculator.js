import React, { useState } from "react";
import Head from 'next/head';

function AverageCalculator() {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(0);
  const [numberCount, setNumberCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [inputError, setInputError] = useState(false);

  const handleNumberChange = (e) => {
    const newNumbers = e.target.value;
    const filteredNumbers = newNumbers.replace(/[^-0-9.\s]/g, '');
    const cleanedNumbers = filteredNumbers.replace(/\s+/g, ' ');

    if (cleanedNumbers !== newNumbers) {
      setInputError(true);
    } else {
      setNumbers(cleanedNumbers);
      setInputError(false);
    }
  };

  const calculateAverage = () => {
    const trimmedNumbers = numbers.trim();
    const numberArray = trimmedNumbers.split(' ').map(Number);
    const totalSum = numberArray.reduce((acc, num) => acc + num, 0);
    const count = numberArray.length;
    const avg = count === 0 ? 0 : totalSum / count;

    setSum(totalSum);
    setNumberCount(count);
    setAverage(avg);
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="숫자들의 평균, 숫자 갯수, 합계를 계산하는 계산기" />
        <title>평균 계산기 - 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>평균 계산기</h1>
          <p>숫자들의 평균, 숫자 갯수, 합계를 계산합니다.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>숫자 입력:</h4>
              <textarea
                id="numbers"
                className="form-control"
                value={numbers}
                onChange={handleNumberChange}
                placeholder="숫자를 입력하세요"
                rows={3}
              />
            </div>
            <p>숫자를 스페이스로 구분하여 입력하세요.</p>

            <button className="btn btn-primary" onClick={calculateAverage}>
              계산하기
            </button>

            <div className="result">
              <p className="result-text"><strong>평균 : {average}</strong></p>
              <p className="result-text"><strong>숫자 갯수 : {numberCount}</strong></p>
              <p className="result-text"><strong>숫자 합계 : {sum}</strong></p>
            </div>
          </div>

          <div className="info">
            <h2>평균 계산기 설명:</h2>
            <br />
            <p>
              이 평균 계산기는 입력된 숫자들의 평균, 숫자 갯수, 합계를 계산하는 도구입니다.
              간단한 입력란에 숫자를 스페이스로 구분하여 입력한 후 '계산하기' 버튼을 누르면 아래에서 바로 계산된 결과를 확인할 수 있습니다.
            </p>
            <br />
            <p>
              입력한 숫자는 숫자, 소숫점, 마이너스 기호, 스페이스 이외의 문자가 제거되며,
              연속된 스페이스는 하나로 대체되어 처리됩니다.
            </p>
            <br />
            <p>
              이 계산기는 숫자의 평균을 계산하여 다양한 상황에서 유용하게 활용할 수 있습니다.
              예를 들어 점수나 평가지표들의 평균을 쉽게 구할 수 있습니다.
            </p>
            <br />
            <p>
              또한, 숫자들의 합계와 숫자 갯수를 파악하여 데이터 분석이나 통계 작업에 활용할 수 있습니다.
              입력된 데이터를 간편하게 가공하여 결과를 얻을 수 있습니다.
            </p>
            <br />
            <p>
              숫자의 평균, 합계, 숫자 갯수를 빠르게 계산하고 싶을 때 이 평균 계산기를 활용하세요.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AverageCalculator;

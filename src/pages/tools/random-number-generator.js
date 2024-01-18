import React, { useState } from "react";
import Head from "next/head";

function RandomNumberGenerator() {
  const [startNumber, setStartNumber] = useState(1);
  const [endNumber, setEndNumber] = useState(10);
  const [numberCount, setNumberCount] = useState(1);
  const [allowDuplicates, setAllowDuplicates] = useState(true);
  const [randomNumbers, setRandomNumbers] = useState([]);

  const handleStartNumberChange = (e) => {
    setStartNumber(parseInt(e.target.value));
  };

  const handleEndNumberChange = (e) => {
    setEndNumber(parseInt(e.target.value));
  };

  const handleNumberCountChange = (e) => {
    const newNumberCount = parseInt(e.target.value);

    // 중복을 허용하지 않는 경우 뽑을 숫자의 최소치를 설정
    if (!allowDuplicates && newNumberCount > endNumber - startNumber + 1) {
      alert("뽑을 수 있는 숫자의 범위를 초과하였습니다.");
      return;
    }

    setNumberCount(newNumberCount);
  };

  const handleAllowDuplicatesChange = (e) => {
    const newAllowDuplicates = e.target.checked;
    setAllowDuplicates(newAllowDuplicates);

    // 중복을 허용하지 않는 경우 뽑을 숫자의 최소치를 설정
    if (!newAllowDuplicates && numberCount > endNumber - startNumber + 1) {
      setNumberCount(endNumber - startNumber + 1);
    }
  };

  const handleGenerateNumbers = () => {
    if (startNumber > endNumber) {
      alert("시작 숫자는 끝 숫자보다 작아야 합니다.");
      return;
    }

    const generatedNumbers = [];

    while (generatedNumbers.length < numberCount) {
      const randomNumber = Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;
      if (!allowDuplicates && generatedNumbers.includes(randomNumber)) {
        continue;
      }
      generatedNumbers.push(randomNumber);
    }

    setRandomNumbers(generatedNumbers);
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="랜덤 번호 추첨기. 이 랜덤 번호 추첨기는 사용자가 지정한 범위에서 원하는 개수의 랜덤한 숫자를 추첨합니다. 중복 허용 여부를 선택할 수 있습니다."
        />
        <title>랜덤 번호 추첨기 | 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>랜덤 번호 추첨기</h1>
          <p>원하는 범위에서 랜덤한 숫자를 추첨합니다.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>범위 설정:</h4>
              <br />
              <label htmlFor="startNumber">시작 숫자:</label>
              <input
                type="number"
                id="startNumber"
                className="form-control"
                value={startNumber}
                onChange={handleStartNumberChange}
              />
              <br />
              <label htmlFor="endNumber">끝 숫자:</label>
              <input
                type="number"
                id="endNumber"
                className="form-control"
                value={endNumber}
                onChange={handleEndNumberChange}
              />
              <br />
              <label htmlFor="numberCount">뽑을 숫자 개수:</label>
              <input
                type="number"
                id="numberCount"
                className="form-control"
                value={numberCount}
                onChange={handleNumberCountChange}
              />
              <br />
              <label>
                <input type="checkbox" checked={allowDuplicates} onChange={handleAllowDuplicatesChange} /> 중복 포함
              </label>
            </div>

            <button className="btn btn-primary" onClick={handleGenerateNumbers}>
              숫자 추첨하기
            </button>

            <div className="result">
              <p className="result-text">
                <strong>추첨된 숫자:</strong> {randomNumbers.join(", ")}
              </p>
            </div>
          </div>

          <div className="info">
            <h2>랜덤 번호 추첨기 설명:</h2>
            <br />
            <p>
              이 랜덤 번호 추첨기는 사용자가 지정한 범위에서 원하는 개수의 랜덤한 숫자를 추첨합니다. 중복 허용 여부를
              선택할 수 있습니다.
            </p>
            <br />
            <p>
              시작 숫자와 끝 숫자를 설정하고 뽑을 숫자 개수를 입력한 후 "숫자 추첨하기" 버튼을 클릭하면 추첨 결과를
              확인할 수 있습니다.
            </p>
            <br />
            <p>중복 허용을 체크하지 않으면 같은 숫자가 중복되지 않도록 추첨됩니다.</p>
            <br />
            <p>
              이 추첨기를 사용하여 무작위 선택이 필요한 상황에서 활용하세요. 예를 들어 저녁 메뉴를 무작위로 정할 때,
              뽑을 인원을 정할 때 등에 유용합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomNumberGenerator;

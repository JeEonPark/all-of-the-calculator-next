import React, { useState } from "react";
import Head from 'next/head';

function PyongSquareMeterConverter() {
  const [pyong, setPyong] = useState('');
  const [squareMeter, setSquareMeter] = useState('');

  const handlePyongChange = (value) => {
    setPyong(value);
    if (value !== '') {
      const squareMeterValue = parseFloat(value) * 3.30579;
      setSquareMeter(squareMeterValue.toFixed(2));
    } else {
      setSquareMeter('');
    }
  };

  const handleSquareMeterChange = (value) => {
    setSquareMeter(value);
    if (value !== '') {
      const pyongValue = parseFloat(value) / 3.30579;
      setPyong(pyongValue.toFixed(2));
    } else {
      setPyong('');
    }
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="평수와 제곱미터를 변환하는 변환 도구입니다." />
        <title>평수 제곱미터 변환기 - 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>평수 제곱미터 계산기</h1>
          <p>평수와 제곱미터를 변환해보세요.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>평:</h4>
              <input
                type="number"
                id="pyong"
                className="form-control"
                value={pyong}
                onChange={(e) => handlePyongChange(e.target.value)}
                placeholder="평을 입력하세요"
              />
            </div>

            <div className="form-group">
              <h4>제곱미터 (m²):</h4>
              <input
                type="number"
                id="squareMeter"
                className="form-control"
                value={squareMeter}
                onChange={(e) => handleSquareMeterChange(e.target.value)}
                placeholder="제곱미터를 입력하세요"
              />
            </div>
          </div>

          <div className="info">
            <h2>평과 제곱미터 변환기 설명:</h2>
            <p>
              평과 제곱미터를 변환하는 간단한 도구입니다.
              입력된 평을 제곱미터로 변환하거나, 입력된 제곱미터를 평으로 변환할 수 있습니다.
            </p>
            <br />

            <h3>변환 공식:</h3>
            <p>
              평을 제곱미터로 변환하는 공식: 제곱미터 = 평 × 3.30579
            </p>
            <p>
              제곱미터를 평으로 변환하는 공식: 평 = 제곱미터 ÷ 3.30579
            </p>
            <br />

            <h3>사용 방법:</h3>
            <p>
              변환하고자 하는 값을 각각의 입력 창에 입력한 후, 자동으로 변환이 이루어집니다.
            </p>

            <br />
            <h3>예시:</h3>
            <p>
              - 10 평을 제곱미터로 변환하면: 10 × 3.30579 ≈ 33.0579 m²
            </p>
            <p>
              - 20 m²를 평으로 변환하면: 20 ÷ 3.30579 ≈ 6.0502 평
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PyongSquareMeterConverter;

import React, { useState } from "react";
import Head from "next/head";

function CircleAreaCalculator() {
  const [radius, setRadius] = useState("");
  const [area, setArea] = useState(0);
  const [inputError, setInputError] = useState(false);

  const handleRadiusChange = (e) => {
    const newRadius = e.target.value;
    const filteredRadius = newRadius.replace(/[^-0-9.]/g, "");

    if (filteredRadius !== newRadius) {
      setInputError(true);
    } else {
      setRadius(filteredRadius);
      setInputError(false);
    }
  };

  const calculateArea = () => {
    const r = parseFloat(radius);
    const calculatedArea = Math.PI * r * r;
    setArea(calculatedArea);
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="원의 넓이 계산기. 반지름을 입력하면 즉시 원의 넓이를 계산해주는 간편한 온라인 도구입니다. 원의 넓이 계산은 π(파이) x 반지름² 공식을 사용합니다. 원형 물체의 표면적을 빠르고 정확하게 계산하세요."
        />
        <title>원의 넓이 계산기 | 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>원의 넓이 계산기</h1>
          <p>원의 반지름을 입력하여 넓이를 계산합니다.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>반지름 입력:</h4>
              <input
                type="text"
                id="radius"
                className="form-control"
                value={radius}
                onChange={handleRadiusChange}
                placeholder="반지름을 입력하세요"
              />
            </div>
            {inputError && <p>유효한 숫자를 입력하세요.</p>}

            <button className="btn btn-primary" onClick={calculateArea}>
              넓이 계산
            </button>

            <div className="result">
              <p className="result-text">
                <strong>원의 넓이 : {area}</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="info">
          <h2>원의 넓이 계산기 설명:</h2>
          <br />
          <p>
            이 원의 넓이 계산기는 사용자가 입력한 반지름을 바탕으로 원의 넓이를 계산합니다. 넓이를 계산하기 위해, 원의
            반지름을 입력 필드에 입력하고 '넓이 계산' 버튼을 클릭하면 됩니다.
          </p>
          <br />
          <p>입력란에는 숫자, 소숫점, 마이너스 기호만 입력할 수 있습니다. 이외의 문자는 자동으로 제거됩니다.</p>
          <br />
          <p>
            원의 넓이는 π(파이) x 반지름² 공식을 사용하여 계산됩니다. 이 계산기는 π(파이) 값을 3.14159로 사용하여 정확한
            계산 결과를 제공합니다.
          </p>
          <br />
          <p>
            원의 넓이 계산은 다양한 분야에서 유용하게 사용될 수 있습니다. 예를 들어, 원형 테이블의 표면적을 계산하거나,
            원형 장식의 크기를 결정할 때 도움이 됩니다.
          </p>
          <br />
          <p>이 계산기를 사용하여 간편하게 원의 넓이를 계산해 보세요. 빠르고 정확한 계산 결과를 얻을 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default CircleAreaCalculator;

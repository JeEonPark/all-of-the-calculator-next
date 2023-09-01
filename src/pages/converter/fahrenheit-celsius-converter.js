import { useState } from "react";
import Head from 'next/head';

function FahrenheitCelciusConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    if (value !== '') {
      const fahrenheitValue = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    if (value !== '') {
      const celsiusValue = (parseFloat(value) - 32) * (5 / 9);
      setCelsius(celsiusValue.toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="공식을 이용하여 섭씨와 화씨를 변환합니다. 입력하면 자동으로 변환되는 변환 도구 입니다." />
        <title>섭씨 화씨 변환기 - 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>섭씨 화씨 변환기</h1>
          <p>섭씨와 화씨를 변환해보세요.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>섭씨 (°C):</h4>
              <input
                type="number"
                id="celsius"
                className="form-control"
                value={celsius}
                onChange={(e) => handleCelsiusChange(e.target.value)}
                placeholder="섭씨를 입력하세요"
              />
            </div>

            <div className="form-group">
              <h4>화씨 (°F):</h4>
              <input
                type="number"
                id="fahrenheit"
                className="form-control"
                value={fahrenheit}
                onChange={(e) => handleFahrenheitChange(e.target.value)}
                placeholder="화씨를 입력하세요"
              />
            </div>
          </div>


          <div className="info">
            <h2>섭씨 화씨 변환기 설명:</h2>
            <p>
              섭씨 화씨 변환기는 섭씨와 화씨를 서로 변환하는 간단한 도구입니다.
              입력된 섭씨 온도를 화씨로 변환하거나, 입력된 화씨 온도를 섭씨로 변환할 수 있습니다.
            </p>

            <br />
            <h3>섭씨와 화씨 간 변환 공식</h3>
            <p>
              섭씨와 화씨 사이의 온도 변환에는 다음과 같은 공식을 사용합니다:
            </p>
            <p>
              화씨(°F) = (섭씨(°C) × 9/5) + 32
            </p>
            <p>
              섭씨(°C) = (화씨(°F) - 32) × 5/9
            </p>

            <br />
            <h3>입력 방법</h3>
            <p>
              변환하고자 하는 온도를 각각의 입력 창에 입력한 후, 자동으로 변환이 이루어집니다.
            </p>

            <br />
            <h3>예시</h3>
            <p>
              - 섭씨 30도를 화씨로 변환하면 (30 × 9/5) + 32 = 86°F 입니다.
            </p>
            <p>
              - 화씨 86도를 섭씨로 변환하면 (86 - 32) × 5/9 ≈ 30°C 입니다.
            </p>
          </div>

        </div>
      </div>
    </div>
  );

}

export default FahrenheitCelciusConverter;
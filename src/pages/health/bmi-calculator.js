import { useState } from "react";
import Head from 'next/head';


function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height) {
      setBmiResult(null);
      return;
    }

    const heightInMeters = parseFloat(height) / 100; // Convert height to meters
    const bmi = parseFloat(weight) / (heightInMeters * heightInMeters);
    setBmiResult(bmi.toFixed(2));
  };

  const getBmiCategory = () => {
    if (bmiResult === null) {
      return '';
    } else if (bmiResult < 18.5) {
      return '저체중';
    } else if (bmiResult >= 18.5 && bmiResult < 25) {
      return '정상범위';
    } else if (bmiResult >= 25 && bmiResult < 30) {
      return '과체중';
    } else if (bmiResult >= 30 && bmiResult < 35) {
      return '1단계 비만 (경도비만)';
    } else if (bmiResult >= 35 && bmiResult < 40) {
      return '2단계 비만 (중등도비만)';
    } else {
      return '3단계 비만 (고도비만)';
    }
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="키와 몸무게로 나의 체질량지수(BMI)를 알아보세요. 정상, 저체중, 과체중 등 비만 여부를 알 수 있습니다." />
        <title>BMI 계산기 - 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>BMI 계산기</h1>
          <p>BMI 계산기로 비만도를 측정해보세요.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="form-group form-inline"> {/* Add form-inline class */}
            <h4>키 (cm):</h4>
            <input
              type="number"
              id="height"
              className="form-control"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="키를 입력하세요"
            />

            <h4 style={{ marginTop: '20px' }}>체중 (kg):</h4>
            <input
              type="number"
              id="weight"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="체중을 입력하세요"
            />
          </div>

          <button className="btn btn-primary" onClick={calculateBMI}>
            BMI 계산
          </button>

          {bmiResult !== null && (
            <div className="result">
              <h4>결과:</h4>
              <p className="result-text"><strong>BMI: {bmiResult}</strong></p>
              <p className="result-text"><strong>비만도: {getBmiCategory()}</strong></p>
            </div>
          )}


          <div className="info">
            <h2>BMI(체질량지수) 계산기 설명:</h2>
            <p>
              BMI 계산기는 키와 체중을 입력하면 BMI 수치와 정상 체중 여부, 비만 여부를 알려줍니다.
              계산된 BMI 결과는 소수점 3자리에서 반올림하여 표시됩니다.
            </p>

            <br />
            <h3>정상 체중과 비만 여부 판별</h3>
            <p>
              정상 체중과 비만 여부는 대한비만학회 기준에 따라 판별됩니다.
              성인의 경우 남성과 여성을 구분하지 않고 동일한 기준으로 BMI를 계산하고 판별합니다.
            </p>

            <br />
            <h3>키와 체중 입력</h3>
            <p>
              키는 센치미터(㎝) 단위로 입력하며, 체중은 킬로그램(㎏) 단위로 입력합니다.
              정확한 BMI 산출을 위해 체중은 소수점 1자리까지 입력하는 것이 좋습니다.
            </p>

            <br />
            <h3>BMI 계산 방법</h3>
            <p>
              BMI 계산은 체중(㎏)을 키(m)의 제곱으로 나누어서 수행됩니다.
              센치미터(㎝) 단위의 키를 사용하는 경우에는 체중(㎏)을 (키(㎝) ÷ 100)의 제곱으로 나누어 계산합니다.
            </p>
            <p>
              BMI를 계산하는 공식은 다음과 같습니다:
            </p>
            <p>
              BMI = 체중(㎏) ÷ 키(m)²
              BMI = 체중(㎏) ÷ (키(㎝) ÷ 100)²
            </p>
            <p>
              예를 들어, 체중이 60㎏이고 키가 165㎝인 경우:
              BMI = 60 ÷ (165 ÷ 100)² = 22.03857 입니다. 소수점 3자리에서 반올림하면 22.04가 됩니다.
            </p>

            <br />
            <h3>BMI의 단위</h3>
            <p>
              BMI의 단위는 "㎏/㎡"로 표기됩니다.
              보통 단위인 "㎏/㎡"는 생략하고 수치만 사용합니다.
              예를 들어, BMI가 22.04인 경우 정확하게 표현하면 "22.04㎏/㎡"이지만 보통은 "22.04"로 사용합니다.
            </p>

            <br />
            <h3>BMI 구간과 판별</h3>
            <p>
              BMI 구간에 따라 저체중, 정상 체중, 과체중, 비만 여부를 판별합니다.
              대한비만학회 기준은 다음과 같습니다:
            </p>
            <ul>
              <li>BMI 18.5 미만: 저체중</li>
              <li>BMI 18.5 이상 23 미만: 정상 체중</li>
              <li>BMI 23 이상 25 미만: 과체중</li>
              <li>BMI 25 이상 30 미만: 1단계 비만</li>
              <li>BMI 30 이상 35 미만: 2단계 비만</li>
              <li>BMI 35 이상: 3단계 비만</li>
            </ul>
            <p>
              2018년 개정 이전에는 18.5 이상 25 미만을 정상 체중으로 보았지만, 개정 후에는 18.5 이상 23 미만을 정상 체중으로 판별하고 있습니다.
            </p>

            <br />
            <p>
              <strong>주의:</strong> BMI는 비만 정도를 파악하는 지수이며, 개인의 신체 조건과 근육량 등을 고려하지 않기 때문에 정확한 평가를 위해서는 의료 전문가와 상담하는 것이 좋습니다.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default BmiCalculator;
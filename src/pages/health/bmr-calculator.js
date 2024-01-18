import { useState } from "react";
import Head from "next/head";

function BMRCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmr, setBMR] = useState("");

  const calculateBMR = () => {
    if (!weight || !height || !age) {
      setBMR("");
      return;
    }

    let bmrResult = 0;
    if (gender === "male") {
      bmrResult = 88.362 + 13.397 * parseFloat(weight) + 4.799 * parseFloat(height) - 5.677 * parseFloat(age);
    } else {
      bmrResult = 447.593 + 9.247 * parseFloat(weight) + 3.098 * parseFloat(height) - 4.33 * parseFloat(age);
    }

    setBMR(bmrResult.toFixed(2));
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="기초대사량을 계산하는 계산기입니다. 몸무게, 키, 나이, 성별을 입력하면 기초대사량을 계산합니다. 기초대사량은 정상적인 상태에서 하루 동안 유지하기 위해 필요한 최소 칼로리량을 의미합니다."
        />
        <title>기초대사량 계산기 | 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>기초대사량 계산기</h1>
          <p>몸무게, 키, 나이, 성별을 입력하여 기초대사량을 계산하세요.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group form-inline">
              <h4>몸무게 (kg):</h4>
              <input
                type="number"
                id="weight"
                className="form-control"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="몸무게를 입력하세요"
              />

              <h4 style={{ marginTop: "20px" }}>키 (cm):</h4>
              <input
                type="number"
                id="height"
                className="form-control"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="키를 입력하세요"
              />

              <h4 style={{ marginTop: "20px" }}>나이:</h4>
              <input
                type="number"
                id="age"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="나이를 입력하세요"
              />

              <h4 style={{ marginTop: "20px" }}>성별:</h4>
              <select id="gender" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
            </div>

            <button className="btn btn-primary" onClick={calculateBMR}>
              기초대사량 계산
            </button>

            {bmr && (
              <div className="result">
                <h4>기초대사량:</h4>
                <p className="result-text">
                  <strong>{bmr} kcal/day</strong>
                </p>
              </div>
            )}
          </div>

          <div className="info">
            <h2>기초대사량 계산기 설명:</h2>
            <p>
              기초대사량 계산기는 몸무게, 키, 나이, 성별을 입력하면 기초대사량을 계산합니다. 기초대사량은 정상적인
              상태에서 하루 동안 유지하기 위해 필요한 최소 칼로리량을 의미합니다.
            </p>

            <br />
            <h3>몸무게와 키 입력</h3>
            <p>몸무게와 키를 각각 kg와 cm 단위로 입력하세요.</p>

            <br />
            <h3>나이 입력</h3>
            <p>나이를 입력하세요. 기초대사량은 나이에 따라 변화할 수 있습니다.</p>

            <br />
            <h3>성별 선택</h3>
            <p>성별을 선택하세요. 성별에 따라 기초대사량 계산식이 다릅니다.</p>

            <br />
            <p>
              <strong>참고:</strong> 기초대사량 계산기는 대략적인 칼로리 추정을 위한 도구로, 실제 필요 칼로리는 활동
              수준 등 여러 요인에 의해 달라질 수 있습니다. 식이 변화나 운동 계획을 세울 때 참고용으로 사용해보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMRCalculator;

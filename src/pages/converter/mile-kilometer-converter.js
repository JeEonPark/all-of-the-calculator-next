import React, { useState } from "react";
import Head from "next/head";

function MileKilometerConverter() {
  const [mile, setMile] = useState("");
  const [kilometer, setKilometer] = useState("");

  const handleMileChange = (value) => {
    setMile(value);
    if (value !== "") {
      const kilometerValue = parseFloat(value) * 1.60934;
      setKilometer(kilometerValue.toFixed(2));
    } else {
      setKilometer("");
    }
  };

  const handleKilometerChange = (value) => {
    setKilometer(value);
    if (value !== "") {
      const mileValue = parseFloat(value) / 1.60934;
      setMile(mileValue.toFixed(2));
    } else {
      setMile("");
    }
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="마일과 킬로미터를 변환하는 변환 도구입니다. 입력된 마일을 킬로미터로 변환하거나, 입력된 킬로미터를 마일로 변환할 수 있습니다."
        />
        <title>마일 킬로미터 변환기 | 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>마일 킬로미터 변환기</h1>
          <p>마일과 킬로미터를 변환해보세요.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>마일 (mile):</h4>
              <input
                type="number"
                id="mile"
                className="form-control"
                value={mile}
                onChange={(e) => handleMileChange(e.target.value)}
                placeholder="마일을 입력하세요"
              />
            </div>

            <div className="form-group">
              <h4>킬로미터 (km):</h4>
              <input
                type="number"
                id="kilometer"
                className="form-control"
                value={kilometer}
                onChange={(e) => handleKilometerChange(e.target.value)}
                placeholder="킬로미터를 입력하세요"
              />
            </div>
          </div>

          <div className="info">
            <h2>마일 킬로미터 변환기 설명:</h2>
            <p>
              마일과 킬로미터를 변환하는 간단한 도구입니다. 입력된 마일을 킬로미터로 변환하거나, 입력된 킬로미터를
              마일로 변환할 수 있습니다.
            </p>

            <br />

            <h3>변환 공식:</h3>
            <p>마일(mile)을 킬로미터(km)로 변환하는 공식: 킬로미터 = 마일 × 1.60934</p>
            <br />
            <p>킬로미터(km)를 마일(mile)로 변환하는 공식: 마일 = 킬로미터 ÷ 1.60934</p>

            <br />
            <h3>사용 방법:</h3>
            <p>변환하고자 하는 값을 각각의 입력 창에 입력한 후, 자동으로 변환이 이루어집니다.</p>

            <br />
            <h3>예시:</h3>
            <p>- 10 마일을 킬로미터로 변환하면: 10 × 1.60934 ≈ 16.0934 km</p>
            <p>- 20 킬로미터를 마일로 변환하면: 20 ÷ 1.60934 ≈ 12.4274 mile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MileKilometerConverter;

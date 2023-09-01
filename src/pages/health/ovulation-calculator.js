import { useState } from "react";
import Head from 'next/head';

function OvulationCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [ovulationDate, setOvulationDate] = useState('');

  const calculateOvulationDate = () => {
    if (!lastPeriodDate || !cycleLength) {
      setOvulationDate('');
      return;
    }

    const cycleDays = parseInt(cycleLength);
    const lastPeriod = new Date(lastPeriodDate);
    const ovulation = new Date(lastPeriod.getTime() + (cycleDays - 14) * 24 * 60 * 60 * 1000);

    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const ovulationDayOfWeek = daysOfWeek[ovulation.getDay()];

    setOvulationDate(`${ovulation.getMonth() + 1}월 ${ovulation.getDate()}일 (${ovulationDayOfWeek})`);
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="배란일을 예측하는 계산기입니다. 최근 월경 시작일과 평균 주기를 입력하세요." />
        <title>배란일 계산기 - 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>배란일 계산기</h1>
          <p>월경 주기와 최근 월경 시작일을 입력하여 배란일을 예측하세요.</p>
        </div>
      </div>

      <div className="wide-container">

        <div className="container">
          <div className="small-container">
            <div className="form-group form-inline">
              <h4>최근 월경 시작일:</h4>
              <input
                type="date"
                id="lastPeriodDate"
                className="form-control"
                value={lastPeriodDate}
                onChange={(e) => setLastPeriodDate(e.target.value)}
              />

              <h4 style={{ marginTop: '20px' }}>평균 주기 (일):</h4>
              <input
                type="number"
                id="cycleLength"
                className="form-control"
                value={cycleLength}
                onChange={(e) => setCycleLength(e.target.value)}
                placeholder="평균 주기를 입력하세요"
              />
            </div>

            <button className="btn btn-primary" onClick={calculateOvulationDate}>
              배란일 계산
            </button>

            {ovulationDate && (
              <div className="result">
                <h4>예상 배란일:</h4>
                <p className="result-text"><strong>{ovulationDate}</strong></p>
              </div>
            )}
          </div>

          <div className="info">
            <h2>배란일 계산기 설명:</h2>
            <p>
              배란일 계산기는 최근 월경 시작일과 평균 주기를 입력하면, 다음 월경 시작일을 기준으로 배란일을 예측합니다.
              배란일은 일반적으로 월경 주기의 14일 전에 해당합니다.
            </p>

            <br />
            <h3>날짜 입력</h3>
            <p>
              최근 월경 시작일을 년, 월, 일로 입력하세요.
              정확한 날짜 입력은 정확한 배란일 예측을 위해 중요합니다.
            </p>

            <br />
            <h3>평균 주기</h3>
            <p>
              월경 주기는 일반적으로 첫날부터 다음 월경 첫날까지의 기간을 말합니다.
              평균 주기를 입력하면 배란일을 예측하는 데 도움이 됩니다.
            </p>

            <br />
            <h3>예상 배란일 확인</h3>
            <p>
              "배란일 계산" 버튼을 클릭하면 입력한 최근 월경 시작일과 평균 주기를 기반으로 배란일을 계산합니다.
              계산된 배란일은 월과 일로 표시되며, 해당 날짜의 요일도 함께 표기됩니다.
            </p>

            <br />
            <p>
              <strong>주의:</strong> 배란일 계산기는 예측을 위한 도구로, 정확한 날짜와 주기에 따라 실제 결과와 차이가 있을 수 있습니다.
              임신을 계획하거나 예방하기 위해서는 의료 전문가와 상담하는 것이 좋습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OvulationCalculator;

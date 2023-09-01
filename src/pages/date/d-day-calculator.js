import React, { useState } from "react";
import Head from 'next/head';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DDayCalculator() {
  const [targetDate, setTargetDate] = useState(null);
  const [baseDate, setBaseDate] = useState(new Date());
  const [useZeroDay, setUseZeroDay] = useState(true);
  const [daysRemaining, setDaysRemaining] = useState(0);

  const handleTargetDateChange = (date) => {
    setTargetDate(date);
    calculateDaysRemaining(baseDate, date, useZeroDay);
  };

  const handleBaseDateChange = (date) => {
    setBaseDate(date);
    calculateDaysRemaining(date, targetDate, useZeroDay);
  };

  const handleUseZeroDayChange = (e) => {
    const newUseZeroDay = e.target.checked;
    setUseZeroDay(newUseZeroDay);
    calculateDaysRemaining(baseDate, targetDate, newUseZeroDay);
  };

  const calculateDaysRemaining = (base, target, tempUseZeroDay) => {
    if (base && target) {
      const timeDiff = target - base;
      let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;

      if (tempUseZeroDay) {
        daysDiff++;
      }

      setDaysRemaining(daysDiff);
    } else {
      setDaysRemaining(0);
    }
  };


  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="디데이를 계산하는 도구입니다. 디데이 계산기" />
        <title>디데이 계산기 - 계산기의 모든 것</title>
      </Head>

      <div className="jumbotron">
        <div className="container">
          <h1>디데이 계산기</h1>
          <p>특정 날짜까지 남은 일수를 계산합니다.</p>
        </div>
      </div>


      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>기준일:</h4>
              <DatePicker
                selected={baseDate}
                onChange={handleBaseDateChange}
                className="form-control"
                dateFormat="yyyy-MM-dd"
                placeholderText="날짜를 선택하세요"
              />
            </div>

            <div className="form-group">
              <h4>목표 날짜:</h4>
              <DatePicker
                selected={targetDate}
                onChange={handleTargetDateChange}
                className="form-control"
                dateFormat="yyyy-MM-dd"
                placeholderText="날짜를 선택하세요"
              />
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="useZeroDay"
                checked={useZeroDay}
                onChange={handleUseZeroDayChange}
              />
              <label className="form-check-label" htmlFor="useZeroDay">
                기준일 포함
              </label>
            </div>

            <div className="result">
              <p className="result-text"><strong>디데이까지 남은 일수: {daysRemaining}일</strong></p>
            </div>
          </div>

          <div className="info">
            <h2>디데이 계산기 설명:</h2>
            <br />
            <p>
              이 디데이 계산기는 특정 날짜까지 남은 일수를 계산하는 도구입니다.
              기준일과 목표 날짜를 선택하고, 기준일 포함 여부를 설정하면 남은 일수를 확인할 수 있습니다.
            </p>
            <br />
            <p>
              기준일은 디데이 계산의 기준이 되는 날짜로 설정되며, 목표 날짜는 디데이를 계산할 대상 날짜입니다.
              기준일을 포함할지 여부를 설정하여 디데이 계산 결과를 조정할 수 있습니다.
            </p>
            <br />
            <p>
              또한, '기준일 포함' 옵션을 선택하면, 디데이 계산 시 기준일을 1일로 카운트하여 결과를 표시합니다.
              이를 통해 기준일 당일도 디데이로 확인할 수 있습니다.
            </p>
            <br />
            <p>
              계산된 디데이 남은 일수는 디데이까지 얼마나 남았는지 빠르게 확인할 수 있도록 도와줍니다.
              중요한 날짜나 이벤트까지 얼마나 남았는지를 쉽게 파악하여 준비를 할 수 있습니다.
            </p>
            <br />
            <p>
              디데이 계산을 편리하게 하고 싶다면 이 디데이 계산기를 활용하세요.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DDayCalculator;

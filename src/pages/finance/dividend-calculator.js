import React, { useState } from "react";
import Head from "next/head";

function DividendCalculator() {
  const [investment, setInvestment] = useState("");
  const [dividendYield, setDividendYield] = useState("");
  const [dividendPeriod, setDividendPeriod] = useState("");
  const [totalDividend, setTotalDividend] = useState("");

  const calculateDividend = () => {
    if (!investment || !dividendYield || !dividendPeriod) {
      setTotalDividend("");
      return;
    }

    const inv = parseFloat(investment);
    const yieldRate = parseFloat(dividendYield) / 100;
    const period = parseFloat(dividendPeriod);

    const total = inv * yieldRate * period;
    setTotalDividend(total.toFixed(2));
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="주식 배당금 계산기입니다. 투자금, 배당수익률, 배당주기를 입력하여 예상 배당금을 계산하는 도구입니다. 이를 통해 투자에 따른 배당 수익을 파악할 수 있습니다."
        />
        <title>주식 배당금 계산기 | 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>주식 배당금 계산기</h1>
          <p>투자금, 배당수익률, 배당주기를 입력하여 예상 배당금을 계산하세요.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group form-inline">
              <h4>투자금: (원)</h4>
              <input
                type="number"
                id="investment"
                className="form-control"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
                placeholder="투자금을 입력하세요"
              />

              <h4 style={{ marginTop: "20px" }}>배당수익률: (%)</h4>
              <input
                type="number"
                id="dividendYield"
                className="form-control"
                value={dividendYield}
                onChange={(e) => setDividendYield(e.target.value)}
                placeholder="배당수익률을 입력하세요"
              />

              <h4 style={{ marginTop: "20px" }}>배당주기: (회/년)</h4>
              <input
                type="number"
                id="dividendPeriod"
                className="form-control"
                value={dividendPeriod}
                onChange={(e) => setDividendPeriod(e.target.value)}
                placeholder="배당주기를 입력하세요"
              />
            </div>

            <button className="btn btn-primary" onClick={calculateDividend}>
              배당금 계산
            </button>

            {totalDividend !== "" && (
              <div className="result">
                <h4>예상 배당금:</h4>
                <p className="result-text">
                  <strong>{totalDividend} 원</strong>
                </p>
              </div>
            )}
          </div>

          <div className="info">
            <h2>주식 배당금 계산기 설명:</h2>
            <p>
              이 계산기는 투자금, 배당수익률, 배당주기를 기반으로 예상 배당금을 계산합니다. 투자금은 주식 투자에 사용한
              총 금액, 배당수익률은 연간 주식 배당금이 투자금에 대해 차지하는 비율, 배당주기는 배당금이 지급되는 주기를
              의미합니다.
            </p>
            <br />
            <p>
              입력된 정보를 기반으로 총 예상 배당금을 계산하여 투자의 효과를 미리 파악할 수 있습니다. 이 도구는 투자
              결정을 내리기 전 예상 수익을 평가하는 데 도움을 줄 수 있습니다.
            </p>
            <br />
            <p>
              <strong>주의:</strong> 실제 배당금은 시장 상황, 회사의 배당 정책 등에 따라 달라질 수 있으므로 실제 투자
              결정에 앞서 전문가의 조언을 구하는 것이 중요합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DividendCalculator;

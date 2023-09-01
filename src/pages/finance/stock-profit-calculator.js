import { useState } from "react";
import Head from 'next/head';

function StockProfitCalculator() {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [sellingQuantity, setSellingQuantity] = useState('');
  const [commission, setCommission] = useState('');
  const [totalProfit, setTotalProfit] = useState('');
  const [profitPercentage, setProfitPercentage] = useState('');

  const calculateProfit = () => {
    if (!purchasePrice || !sellingPrice || !sellingQuantity || !commission) {
      setTotalProfit('');
      setProfitPercentage('');
      return;
    }

    const purchase = parseFloat(purchasePrice);
    const selling = parseFloat(sellingPrice);
    const quantity = parseFloat(sellingQuantity);
    const commissionValue = parseFloat(commission);

    const totalCost = purchase * quantity;
    const totalRevenue = (selling * quantity) - commissionValue;
    const profit = totalRevenue - totalCost;
    const percentage = (profit / totalCost) * 100;

    setTotalProfit(profit.toFixed(2));
    setProfitPercentage(percentage.toFixed(2));
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="주식 수익률을 계산하는 계산기입니다. 매수단가, 매도단가, 수량, 수수료를 입력하세요." />
        <title>주식 수익률 계산기 - 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>주식 수익률 계산기</h1>
          <p>매수단가, 매도단가, 수량, 수수료를 입력하여 총 손익 및 수익률을 계산하세요.</p>
        </div>
      </div>

      <div className="wide-container">

        <div className="container">
          <div className="small-container">
            <div className="form-group form-inline">
              <h4>매수단가: (원)</h4>
              <input
                type="number"
                id="purchasePrice"
                className="form-control"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                placeholder="매수단가를 입력하세요"
              />

              <h4 style={{ marginTop: '20px' }}>매도단가: (원)</h4>
              <input
                type="number"
                id="sellingPrice"
                className="form-control"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                placeholder="매도단가를 입력하세요"
              />

              <h4 style={{ marginTop: '20px' }}>수량: (주)</h4>
              <input
                type="number"
                id="sellingQuantity"
                className="form-control"
                value={sellingQuantity}
                onChange={(e) => setSellingQuantity(e.target.value)}
                placeholder="수량을 입력하세요"
              />

              <h4 style={{ marginTop: '20px' }}>수수료: (%)</h4>
              <input
                type="number"
                id="commission"
                className="form-control"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
                placeholder="수수료를 입력하세요"
              />
            </div>

            <button className="btn btn-primary" onClick={calculateProfit}>
              수익 계산
            </button>

            {totalProfit !== '' && profitPercentage !== '' && (
              <div className="result">
                <h4>총 손익:</h4>
                <p className="result-text"><strong>{totalProfit}</strong></p>
                <h4>수익률:</h4>
                <p className="result-text"><strong>{profitPercentage}%</strong></p>
              </div>
            )}
          </div>

          <div className="info">
            <h2>주식 수익률 계산기 설명:</h2>
            <p>
              주식 수익률 계산기는 매수단가, 매도단가, 매도수량 및 수수료를 입력하여 주식 거래의 총 손익과 수익률을 계산하는 도구입니다.
              이를 통해 특정 주식 거래의 수익성을 간편하게 파악할 수 있습니다.
            </p>

            <br />
            <h3>매수단가</h3>
            <p>
              매수단가란 주식을 구매할 때 지불한 가격을 말합니다. 이 가격은 주식을 처음에 사게 될 때의 가격을 의미합니다.
            </p>

            <br />
            <h3>매도단가</h3>
            <p>
              매도단가란 주식을 판매할 때 받는 가격을 말합니다. 주식을 팔 때 얻을 수 있는 가격으로, 이 가격으로 주식을 팔 경우 얼마의 수익을 얻게 될지 계산합니다.
            </p>

            <br />
            <h3>수량</h3>
            <p>
              수량은 판매하고자 하는 주식의 수량을 의미합니다. 주식을 여러 주 단위로 보유하고 있다면 이를 입력하여 해당 수량만큼의 거래를 기준으로 수익을 계산합니다.
            </p>

            <br />
            <h3>수수료</h3>
            <p>
              수수료는 주식 거래 시 발생하는 거래 수수료를 말합니다. 매수나 매도 시에는 이 수수료를 고려하여 실제 수익이나 손실이 어떻게 변화하는지 확인할 수 있습니다.
            </p>

            <br />
            <h3>수익 계산</h3>
            <p>
              "수익 계산" 버튼을 클릭하면 입력한 매수단가, 매도단가, 매도수량 및 수수료를 기반으로 주식 거래의 총 손익과 수익률을 계산합니다.
              계산된 결과는 총 손익 금액과 함께 수익률로 표시됩니다.
            </p>

            <br />
            <p>
              <strong>주의:</strong> 이 도구는 예측을 위한 도구로서 실제 거래 결과와 차이가 있을 수 있습니다.
              주식 투자나 거래를 계획할 때에는 실제 시장 상황과 전문가의 조언을 고려하는 것이 중요합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockProfitCalculator;

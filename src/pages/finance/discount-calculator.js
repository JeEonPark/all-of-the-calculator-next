import { useState } from "react";
import Head from "next/head";

function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [finalPrice, setFinalPrice] = useState("");

  const formatNumber = (number) => {
    return number.toLocaleString("ko-KR", {
      style: "currency",
      currency: "KRW",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const calculateDiscount = () => {
    if (!originalPrice || !discountRate) {
      setDiscountAmount("");
      setFinalPrice("");
      return;
    }

    const price = parseFloat(originalPrice.replace(/[^0-9]/g, ""));
    const rate = parseFloat(discountRate.replace(/[^0-9]/g, ""));

    const amount = (price * rate) / 100;
    const final = price - amount;

    setDiscountAmount(formatNumber(amount));
    setFinalPrice(formatNumber(final));
  };

  const handleOriginalPriceChange = (e) => {
    const formattedValue = formatNumber(e.target.value);
    setOriginalPrice(formattedValue);
  };

  const handleDiscountRateChange = (e) => {
    const formattedValue = formatNumber(e.target.value);
    setDiscountRate(formattedValue);
  };
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="할인율을 계산하는 계산기입니다. 원가와 할인율을 입력하여 할인금액과 최종금액을 계산하는 도구입니다. 이를 통해 상품의 최종 가격을 계산할 수 있습니다."
        />
        <title>할인율 계산기 | 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>할인율 계산기</h1>
          <p>원가와 할인율을 입력하여 할인금액과 최종금액을 계산하세요.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group form-inline">
              <h4>원가: (원)</h4>
              <input
                type="text"
                id="originalPrice"
                className="form-control"
                value={originalPrice}
                onChange={handleOriginalPriceChange}
                placeholder="원가를 입력하세요"
              />

              <h4 style={{ marginTop: "20px" }}>할인율: (%)</h4>
              <input
                type="text"
                id="discountRate"
                className="form-control"
                value={discountRate}
                onChange={handleDiscountRateChange}
                placeholder="할인율을 입력하세요"
              />
            </div>

            <button className="btn btn-primary" onClick={calculateDiscount}>
              할인 계산
            </button>

            {discountAmount !== "" && finalPrice !== "" && (
              <div className="result">
                <h4>할인금액:</h4>
                <p className="result-text">
                  <strong>{discountAmount}</strong>
                </p>
                <h4>최종금액:</h4>
                <p className="result-text">
                  <strong>{finalPrice}</strong>
                </p>
              </div>
            )}
          </div>

          <div className="info">
            <h2>할인율 계산기 설명:</h2>
            <p>
              할인율 계산기는 원가와 할인율을 입력하여 할인금액과 최종금액을 계산하는 도구입니다. 이를 통해 상품의 최종
              가격을 계산할 수 있습니다.
            </p>

            <br />
            <h3>원가</h3>
            <p>원가란 상품의 기본 가격을 말합니다. 이 가격에 할인율을 적용하여 할인된 금액을 계산합니다.</p>

            <br />
            <h3>할인율</h3>
            <p>할인율은 원가에서 할인되는 비율을 나타냅니다. 주어진 원가에 할인율을 적용하여 할인금액을 계산합니다.</p>

            <br />
            <h3>할인 계산</h3>
            <p>"할인 계산" 버튼을 클릭하면 입력한 원가와 할인율을 기반으로 할인금액과 최종금액을 계산합니다.</p>

            <br />
            <p>
              <strong>주의:</strong> 이 도구는 예측을 위한 도구로서 실제 상품 가격과 차이가 있을 수 있습니다. 실제 구매
              결정 시에는 판매자의 조건과 정책을 확인하는 것이 중요합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountCalculator;

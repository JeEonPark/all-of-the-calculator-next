import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

function DecimalHexadecimalConverter() {
  const [decimal, setDecimal] = useState("");
  const [hexadecimal, setHexadecimal] = useState("");

  const handleDecimalChange = (value) => {
    const cleanValue = value.replace(/[^\d]/g, "");
    setDecimal(cleanValue);

    if (cleanValue !== "") {
      const hexadecimalValue = parseInt(cleanValue, 10).toString(16).toUpperCase();
      setHexadecimal(hexadecimalValue);
    } else {
      setHexadecimal("");
    }
  };

  const handleHexadecimalChange = (value) => {
    const cleanValue = value.replace(/[^0-9A-Fa-f]/g, "");
    setHexadecimal(cleanValue.toUpperCase());

    if (cleanValue !== "") {
      const decimalValue = parseInt(cleanValue, 16);
      setDecimal(decimalValue.toString());
    } else {
      setDecimal("");
    }
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="10진수 16진수 변환기는 10진수와 16진수를 서로 변환하는 간단한 도구입니다. 입력된 10진수를 16진수로 변환하거나, 입력된 16진수를 10진수로 변환할 수 있습니다."
        />
        <title>10진수 16진수 변환기 | 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>10진수 16진수 변환기</h1>
          <p>10진수와 16진수를 변환해보세요.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>10진수:</h4>
              <input
                type="text"
                id="decimal"
                className="form-control"
                value={decimal}
                onChange={(e) => handleDecimalChange(e.target.value)}
                placeholder="10진수를 입력하세요"
              />
            </div>

            <div className="form-group">
              <h4>16진수:</h4>
              <input
                type="text"
                id="hexadecimal"
                className="form-control"
                value={hexadecimal}
                onChange={(e) => handleHexadecimalChange(e.target.value)}
                placeholder="16진수를 입력하세요"
              />
            </div>
          </div>

          <div className="info">
            <h2>10진수 16진수 변환기 설명:</h2>
            <p>
              10진수 16진수 변환기는 10진수와 16진수를 서로 변환하는 간단한 도구입니다. 입력된 10진수를 16진수로
              변환하거나, 입력된 16진수를 10진수로 변환할 수 있습니다.
            </p>
            <p>이 변환기는 사용자가 10진수나 16진수를 입력하면 자동으로 변환 결과를 제공합니다.</p>
            <br />
            <h2>더 많은 진수 변환기</h2>
            <ul>
              <li>
                <Link href="./binary-octal-converter">2진수 8진수 변환기</Link>
              </li>
              <li>
                <Link href="./binary-decimal-converter">2진수 10진수 변환기</Link>
              </li>
              <li>
                <Link href="./binary-hexadecimal-converter">2진수 16진수 변환기</Link>
              </li>
              <li>
                <Link href="./octal-hexadecimal-converter">8진수 16진수 변환기</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DecimalHexadecimalConverter;

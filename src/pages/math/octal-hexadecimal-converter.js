import { useState } from "react";
import Head from 'next/head';
import Link from "next/link";

function OctalHexadecimalConverter() {
  const [octal, setOctal] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');

  const handleOctalChange = (value) => {
    const cleanValue = value.replace(/[^0-7]/g, '');
    setOctal(cleanValue);

    if (cleanValue !== '') {
      const hexadecimalValue = parseInt(cleanValue, 8).toString(16).toUpperCase();
      setHexadecimal(hexadecimalValue);
    } else {
      setHexadecimal('');
    }
  };

  const handleHexadecimalChange = (value) => {
    const cleanValue = value.replace(/[^0-9A-Fa-f]/g, '');
    setHexadecimal(cleanValue.toUpperCase());

    if (cleanValue !== '') {
      const octalValue = parseInt(cleanValue, 16).toString(8);
      setOctal(octalValue);
    } else {
      setOctal('');
    }
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="8진수와 16진수를 변환하는 간단한 변환 도구입니다." />
        <title>8진수 16진수 변환기 - 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>8진수 16진수 변환기</h1>
          <p>8진수와 16진수를 변환해보세요.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>8진수:</h4>
              <input
                type="text"
                id="octal"
                className="form-control"
                value={octal}
                onChange={(e) => handleOctalChange(e.target.value)}
                placeholder="8진수를 입력하세요"
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
            <h2>8진수 16진수 변환기 설명:</h2>
            <p>
              8진수 16진수 변환기는 8진수와 16진수를 서로 변환하는 간단한 도구입니다.
              입력된 8진수를 16진수로 변환하거나, 입력된 16진수를 8진수로 변환할 수 있습니다.
            </p>
            <p>
              이 변환기는 사용자가 8진수나 16진수를 입력하면 자동으로 변환 결과를 제공합니다.
            </p>
            <br />
            <h2>더 많은 진수 변환기</h2>
            <ul>
              <li><Link href="./binary-octal-converter">2진수 8진수 변환기</Link></li>
              <li><Link href="./binary-decimal-converter">2진수 10진수 변환기</Link></li>
              <li><Link href="./binary-hexadecimal-converter">2진수 16진수 변환기</Link></li>
              <li><Link href="./decimal-hexadecimal-converter">10진수 16진수 변환기</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OctalHexadecimalConverter;

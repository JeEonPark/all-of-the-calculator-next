import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

function BinaryOctalConverter() {
  const [binary, setBinary] = useState("");
  const [octal, setOctal] = useState("");

  const handleBinaryChange = (value) => {
    const cleanValue = value.replace(/[^01]/g, "");
    setBinary(cleanValue);

    if (cleanValue !== "") {
      const octalValue = parseInt(cleanValue, 2).toString(8);
      setOctal(octalValue);
    } else {
      setOctal("");
    }
  };

  const handleOctalChange = (value) => {
    const cleanValue = value.replace(/[^\d]/g, "");
    setOctal(cleanValue);

    if (cleanValue !== "") {
      const binaryValue = parseInt(cleanValue, 8).toString(2);
      setBinary(binaryValue);
    } else {
      setBinary("");
    }
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="2진수 8진수 변환기는 2진수와 8진수를 서로 변환하는 간단한 도구입니다. 입력된 2진수를 8진수로 변환하거나, 입력된 8진수를 2진수로 변환할 수 있습니다."
        />
        <title>2진수 8진수 변환기 | 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>2진수 8진수 변환기</h1>
          <p>2진수와 8진수를 변환해보세요.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>2진수:</h4>
              <input
                type="text"
                id="binary"
                className="form-control"
                value={binary}
                onChange={(e) => handleBinaryChange(e.target.value)}
                placeholder="2진수를 입력하세요"
              />
            </div>

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
          </div>

          <div className="info">
            <h2>2진수 8진수 변환기 설명:</h2>
            <p>
              2진수 8진수 변환기는 2진수와 8진수를 서로 변환하는 간단한 도구입니다. 입력된 2진수를 8진수로 변환하거나,
              입력된 8진수를 2진수로 변환할 수 있습니다.
            </p>
            <p>이 변환기는 사용자가 2진수나 8진수를 입력하면 자동으로 변환 결과를 제공합니다.</p>
            <br />
            <h2>더 많은 진수 변환기</h2>
            <ul>
              <li>
                <Link href="./binary-decimal-converter">2진수 10진수 변환기</Link>
              </li>
              <li>
                <Link href="./binary-hexadecimal-converter">2진수 16진수 변환기</Link>
              </li>
              <li>
                <Link href="./octal-hexadecimal-converter">8진수 16진수 변환기</Link>
              </li>
              <li>
                <Link href="./decimal-hexadecimal-converter">10진수 16진수 변환기</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BinaryOctalConverter;

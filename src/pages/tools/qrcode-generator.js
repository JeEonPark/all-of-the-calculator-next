import React, { useState, useRef } from "react";
import Head from "next/head";
import QRCode from "qrcode.react";

function QRCodeGenerator() {
  const [inputText, setInputText] = useState("");
  const [qrGenerated, setQrGenerated] = useState(true);
  const qrRef = useRef();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const generateQRCode = () => {
    setQrGenerated(true);
  };

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="QR 코드 생성기 - 사용자의 텍스트를 바탕으로 QR 코드를 즉시 생성해주는 온라인 도구. 생성된 QR 코드를 쉽게 다운로드할 수 있습니다."
        />
        <title>QR 코드 생성기 | 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>QR 코드 생성기</h1>
          <p>원하는 텍스트를 입력하여 QR 코드를 생성하고 다운로드합니다.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>텍스트 입력:</h4>
              <p>텍스트를 입력하면 실시간으로 변경됩니다.</p>
              <input
                type="text"
                className="form-control"
                value={inputText}
                onChange={handleInputChange}
                placeholder="QR 코드로 변환할 텍스트나 Url을 입력하세요"
              />
            </div>

            {/* <button className="btn btn-primary" onClick={generateQRCode}>
              QR 코드 생성
            </button> */}

            {qrGenerated && (
              <button className="btn btn-primary" onClick={downloadQRCode}>
                다운로드
              </button>
            )}

            <div className="result" ref={qrRef}>
              {qrGenerated && <QRCode value={inputText} renderAs="canvas" />}
            </div>
          </div>

          <div className="info">
            <h2>QR 코드 생성기 설명:</h2>
            <br />
            <p>
              이 QR 코드 생성기는 사용자가 입력한 텍스트를 기반으로 QR 코드를 생성하고, 생성된 QR 코드를 다운로드할 수
              있게 해줍니다.
            </p>
            <br />
            <p>
              웹사이트 URL, 연락처 정보, 간단한 메시지 등 다양한 텍스트를 QR 코드로 변환할 수 있습니다. 생성된 QR 코드는
              스캔 시 입력한 텍스트 정보를 표시합니다.
            </p>
            <br />
            <p>
              'QR 코드 생성' 입력하면 실시간으로 QR코드를 생성하며, 이후 '다운로드' 버튼으로 QR 코드를 저장할 수
              있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRCodeGenerator;

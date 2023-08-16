import Tool from "@/components/Tool";
import Head from 'next/head';

function ConverterPage() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="온도 변환, 길이 환산 등 단위 변환기" />
        <title>단위 변환기 - 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>단위 변환기</h1>
          <p>각종 단위 변환기</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <h3 style={{ marginBottom: '20px' }}>카테고리 - 단위 변환기</h3>
          <div className="row">
            <Tool
              title="섭씨 화씨 변환기"
              link="/converter/fahrenheit-celsius-converter"
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default ConverterPage;
import Tool from "@/components/Tool";
import Head from 'next/head';

function DatePage() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="건강과 관련된 계산기 및 편리한 도구" />
        <title>날짜 - 계산기의 모든 것</title>
      </Head>

      <div className="jumbotron">
        <div className="container">
          <h1>날짜 계산기</h1>
          <p>각종 날짜 계산기</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <h3 style={{ marginBottom: '20px' }}>카테고리 - 건강</h3>
          <div className="row">
            <Tool
              title="D-Day (디데이) 계산기"
              link="/date/d-day-calculator"
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default DatePage;
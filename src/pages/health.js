import Tool from "@/components/Tool";
import Head from 'next/head';

function HealthPage() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="건강과 관련된 계산기 및 편리한 도구" />
        <title>건강 - 계산기의 모든 것</title>
      </Head>

      <div className="jumbotron">
        <div className="container">
          <h1>건강 계산기</h1>
          <p>각종 건강 계산기</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <h3 style={{ marginBottom: '20px' }}>카테고리 - 건강</h3>
          <div className="row">
            <Tool
              title="BMI 계산기"
              link="/health/bmi-calculator"
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default HealthPage;
import Tool from "@/components/Tool";
import Head from "next/head";

function MathPage() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="수학과 관련된 계산기 및 편리한 도구" />
        <title>수학 | 계산기의 모든 것</title>
      </Head>

      <div className="jumbotron">
        <div className="container">
          <h1>수학 계산기</h1>
          <p>각종 수학 계산기</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <h3 style={{ marginBottom: "20px" }}>카테고리 - 수학</h3>
          <h5 style={{ marginBottom: "20px" }}>진수 변환기</h5>
          <div className="row">
            <Tool title="2진수 10진수 변환기" link="/math/binary-decimal-converter" />
            <Tool title="2진수 8진수 변환기" link="/math/binary-octal-converter" />
            <Tool title="2진수 16진수 변환기" link="/math/binary-hexadecimal-converter" />
            <Tool title="8진수 16진수 변환기" link="/math/octal-hexadecimal-converter" />
            <Tool title="10진수 16진수 변환기" link="/math/decimal-hexadecimal-converter" />
            <h5 style={{ marginBottom: "20px" }}>수학 계산기</h5>
            <Tool title="평균 계산기" link="/math/average-calculator" />
            <Tool title="원의 넓이 계산기" link="/math/circle-area-calculator" />
            <Tool title="팩토리얼 계산기" link="/math/factorial-calculator" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MathPage;

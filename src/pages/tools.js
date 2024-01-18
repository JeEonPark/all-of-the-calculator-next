import Tool from "@/components/Tool";
import Head from "next/head";

function ToolsPage() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="각종 유용한 도구들" />
        <title>도구 | 계산기의 모든 것</title>
      </Head>

      <div className="jumbotron">
        <div className="container">
          <h1>도구 계산기</h1>
          <p>각종 도구 계산기</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <h3 style={{ marginBottom: "20px" }}>카테고리 - 도구</h3>
          <div className="row">
            <Tool title="글자수 세기" link="/tools/character-count-calculator" />
            <Tool title="랜덤 번호 추첨기" link="/tools/random-number-generator" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsPage;

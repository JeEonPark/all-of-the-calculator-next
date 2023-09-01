import React, { useState } from "react";
import Head from 'next/head';

function CharacterCountCalculator() {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [charCountWithSpaces, setCharCountWithSpaces] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setCharCount(newText.length);
    setCharCountWithSpaces(newText.replace(/\s+/g, '').length);
    setWordCount(newText.trim().split(/\s+/).filter(word => word !== '').length);
  };

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="텍스트의 글자수, 단어수를 측정합니다. 글자수 계산기, 글자수 세기" />
        <title>글자수 세기 - 계산기의 모든 것</title>
      </Head>
      <div className="jumbotron">
        <div className="container">
          <h1>글자수 세기</h1>
          <p>텍스트의 글자수, 단어수를 측정합니다.</p>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <div className="small-container">
            <div className="form-group">
              <h4>텍스트 입력:</h4>
              <textarea
                id="text"
                className="form-control"
                value={text}
                onChange={handleTextChange}
                placeholder="텍스트를 입력하세요"
                rows={13}
              />
            </div>

            <div className="result">
              <p className="result-text"><strong>글자 수 (공백 미포함) : {charCount}</strong></p>
              <p className="result-text"><strong>글자 수 (공백 포함) : {charCountWithSpaces}</strong></p>
              <p className="result-text"><strong>단어 수 : {wordCount}</strong></p>
            </div>
          </div>

          <div className="info">
            <h2>글자 수 세기 설명:</h2>
            <br />
            <p>
              이 글자 수 세기는 텍스트의 글자 수, 공백 포함 글자 수, 단어 수를 신속하게 계산하는 도구입니다.
              간단한 입력란에 텍스트를 입력하면 아래에서 바로 계산된 결과를 확인할 수 있습니다.
            </p>
            <br />
            <p>
              텍스트 편집기는 여러 줄의 텍스트를 입력할 수 있도록 설계되어 있으며,
              글자 수 및 단어 수를 쉽게 파악할 수 있도록 정리되어 있습니다.
            </p>
            <br />
            <p>
              글자 수 계산은 모든 문자 및 공백을 포함하여 이루어지며,
              또한 공백을 제외한 글자 수도 함께 표시됩니다.
              더불어 입력한 텍스트를 단어로 분리하여 단어 수도 확인하실 수 있습니다.
            </p>
            <br />
            <p>
              이 계산기는 글자 수와 단어 수를 카운트하는 데 유용하게 사용될 수 있습니다.
              예를 들어 에세이나 논문을 작성 중인 경우 텍스트의 길이를 파악하여 요구 사항을 충족시킬 수 있습니다.
            </p>
            <br />
            <p>
              또한, 텍스트의 길이를 제한해야 하는 상황에서도 유용하게 활용할 수 있습니다.
              문자 수가 특정 길이를 초과하지 않도록 확인하거나, 제한된 공간에 들어갈 수 있는 내용인지 판단할 때 유용합니다.
            </p>
            <br />
            <p>
              글자 수 계산기를 사용하여 효율적으로 텍스트의 길이와 내용을 관리하세요.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CharacterCountCalculator;

import Footer from '@/components/Footer';
import NavigationBar from '@/components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="계산기의 모든 것에 오신 것을 환영합니다. 다양한 유용한 도구를 이용해보세요." />
        <meta name="keywords" content="계산기, 수학, 금융, 건강, 변환기, 웹 디자인, 생활" />
        <title>계산기의 모든 것</title>
      </Head>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
      <style jsx global>{`
        a {
          text-decoration : none;
        }

        .wide-container {
            padding: 30px 30px;
            background-color: rgb(248, 248, 248);
            margin-top: 0px;
        }

        .jumbotron {
            background-color: #343a40;
            color: #fff;
            padding: 60px 0;
            border-radius: 0;
        }

        .jumbotron h1 {
            font-size: 3.5rem;
            font-weight: bold;
        }

        .jumbotron p {
            font-size: 1.5rem;
        }

        {/* 도구 랜딩 페이지 공통 */}
        .form-group {
          margin-bottom: 15px;
        }

        .form-control {
            width: 100%;
        }

        .btn-primary {
            margin-top: 10px;
        }

        .result {
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .info {
            margin-top: 50px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .info h4 {
            margin-bottom: 10px;
        }

        .info p {
            margin-bottom: 5px;
        }

        .info ul {
            margin-bottom: 10px;
        }

        .info li {
            list-style: disc;
            margin-left: 20px;
        }

        .result {
            margin-top: 30px;
            padding: 10px;
            background-color: #f0f0f0;
            border-radius: 5px;
        }

        .result h4 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .result-text {
            font-size: 20px;
            margin-bottom: 5px;
        }

        .input-group label {
            flex: 1;
            margin-right: 10px;
        }

        .form-control {
          flex: 2;
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default App;
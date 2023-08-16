// import NavigationBar from '../../components/NavigationBar';
// import Category from '../../components/Category';
import Category from '@/components/Category';
import NavigationBar from '@/components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '../../components/Footer';

function HomePage() {
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h1>환영합니다!</h1>
          <h4>계산기의 모든 것에 오신 것을 환영합니다. 다양한 유용한 도구를 이용해보세요.</h4>
        </div>
      </div>

      <div className="wide-container">
        <div className="container">
          <h3 style={{ marginBottom: '20px' }}>카테고리</h3>
          <div className="row">
            <Category
              title="수학"
              description="각종 수학적 계산기"
              link="/math"
            />
            <Category title="금융" description="돈과 관련된 모든 계산기" link="/" />
            <Category title="건강" description="BMI 계산기 등 건강 관련 도구" link="/health" />
            <Category title="단위 변환기" description="m, cm 등 여러가지 단위 변환기" link="/converter" />
            <Category title="웹" description="웹 디자인 및 개발 도구" link="/" />
            <Category title="이모티콘" description="이모티콘, 이모지 관련 도구" link="/" />
          </div>
        </div>
      </div>
      <style jsx>{`
      .row.justify-content-center {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      `}</style>

      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
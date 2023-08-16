import Footer from '@/components/Footer';
import NavigationBar from '@/components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ Component, pageProps }) {
  return (
    <div>
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
      `}</style>
    </div>
  )
}

export default App;
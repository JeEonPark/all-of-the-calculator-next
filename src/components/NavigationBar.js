import Link from 'next/link';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <Link href="/">
          <span className="navbar-brand mx-auto">계산기의 모든 것</span>
        </Link>
        {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav"></ul>
        </div>
      </div>
      <style jsx>{`
        {/* .container {
            max-width: 1135px;
            margin: 0 auto;
        } */}

        nav {
            background-color: #1A1C20;
        }

        span {
            font-weight: bold;
        }

        span:hover {
            color: #444;
        }
      `}</style>
    </nav>
  );
}

export default NavigationBar;

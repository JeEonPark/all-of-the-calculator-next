function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} 계산기의 모든 것</p>
      </div>
      <style jsx>{`
        .footer {
          background-color: #1A1C20;
          color: #fff;
          padding: 20px 0;
          text-align: center;
          margin-top: 0px;
        }

        .footer p {
          margin-bottom: 0;
        }

        .footer a {
          color: #fff;
        }

        .footer a:hover {
          color: #ccc;
        }
      `}</style>
    </footer>
  )
}

export default Footer;
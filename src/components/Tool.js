const { default: Link } = require("next/link")

function Tool({ title, link }) {
  return (
    <div className="col-md-4 px-2">
      <Link href={link}>
        <div className="tool">
          <h5>{title}</h5>
        </div>
      </Link>
      <style jsx>{`
        .tool {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 15px 0;
          margin-bottom: 20px;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
  
        .tool h5 {
          color: black;
        }
        
        .tool p {
          margin: 5px;
          color: black;
        }
        
        .tool:hover {
          background-color: #f0f0f0;
        }
  
      `}</style>
    </div>
  )
}

export default Tool;
import Link from 'next/link';

function Category({ title, description, link }) {
  return (
    <div className="col-md-4 px-2">
      <Link href={link}>
        <div className='category'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

      </Link>
      <style jsx>{`
        .category {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 50px 0;
          margin-bottom: 20px;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .category h3 {
          color: black;
        }
        
        .category p {
          margin: 5px;
          color: black;
        }
        
        .category:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
}

export default Category;

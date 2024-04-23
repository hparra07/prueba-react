import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article, index }) => {
    // Determinar si el índice es par o impar para alternar el orden de la imagen
    const isEven = index % 2 === 0;

    return (
        <div className='row m-5 p-4'>
            <div className={`col-lg-6 d-flex flex-column justify-content-center align-items-start ${isEven ? 'order-lg-1' : 'order-lg-2'}`}>
                <h2 className='fw-bold'>{article.title}</h2>
                <p className='text-secondary'>{article.content}</p>
                <Link to={`/article/${article.id}`} className="btn btn-danger">Read More</Link>
            </div>

            <div className={`col-lg-6 ${isEven ? 'order-lg-2' : 'order-lg-1'}`}>
                <img src={`${article.img}`} alt={article.title} className='img-fluid' />
            </div>
        </div>
    );
};

export default ArticleCard;


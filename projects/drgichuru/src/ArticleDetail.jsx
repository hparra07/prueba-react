import React from 'react';
import './ArticleDetail.css'
import { useParams } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import Sidebar from './Sidebar';
import Pagination from './Pagination';

const ArticleDetail = ({ articles }) => {
    // Obtener los parámetros de la URL
    const { id } = useParams();

    // Convertir el id a entero
    const articleId = parseInt(id);

    // Buscar el artículo correspondiente en la lista de artículos
    const article = articles.find(article => article.id === articleId);

    // Verificar si el artículo fue encontrado
    if (!article) {
        return <div>Artículo no encontrado</div>;
    }

    // Encuentra los IDs de los artículos anterior y siguiente
    const currentIndex = articles.findIndex(article => article.id === articleId);
    const prevArticleId = currentIndex > 0 ? articles[currentIndex - 1].id : null;
    const nextArticleId = currentIndex < articles.length - 1 ? articles[currentIndex + 1].id : null;

    return (
        <div className="container mt-4">
            <Breadcrumb />
            <div className="row">
                <div className="col-lg-8">
                    <img src={article.img} className="img-fluid mb-4" alt={article.title} />
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                    <Pagination prevArticleId={prevArticleId} nextArticleId={nextArticleId} prevArticleTitle={articles[currentIndex - 1]?.title} nextArticleTitle={articles[currentIndex + 1]?.title} />
                </div>
                
                <div className="col-lg-4 sidebar">
                    <Sidebar articles={articles} />
                </div>
            </div>
        </div>
    );
};

export default ArticleDetail;
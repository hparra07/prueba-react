import React from 'react';
import './Blog.css'
import ArticleCard from './ArticleCard'

const Blog = ({ articles }) => {
    return (
        <div className='container'>
            <h1 className='my-h1'>Blog</h1>
            <p className='mt-4 lead'><span className='fw-bold text-decoration-underline'>Disclaimer:</span> This website is for informational purposes only and should not be misconstrued as medical advice. The content is not intended to be a substitute for professional medical advice, diagnosis or treatment. Furthermore, never disregard professional medical advice or delay in seeking it because of something you read on this site. Always consult your doctor, psychologist or health provider for medical or mental health advice.</p>

            {/* Renderiza el card de cada article*/}
            {articles.map(
                (article, index) => (
                <ArticleCard key={index} article={article} index={index} className="row" />
                )
                )
            }
        </div>
    );
};

export default Blog;

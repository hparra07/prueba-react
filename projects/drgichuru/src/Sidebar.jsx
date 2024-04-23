import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ articles }) => {
    return (
        <div className="sidebar">
            <ul className='sidebar-list'>
                {articles.map(article => (
                    <li key={article.id} className='thumbnail-entry'>
                        <Link to={`/article/${article.id}`}>
                            <img src={article.img} alt={article.title} className='img-fluid' />
                            <div className='thumbnail-titles'>
                                <span>{article.title}</span>
                                <span>Date, TBD</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
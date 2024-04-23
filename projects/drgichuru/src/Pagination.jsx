import React from 'react';
import './Pagination.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';


const Pagination = ({ prevArticleId, nextArticleId, prevArticleTitle, nextArticleTitle }) => {
    return (
      <div className="pagination">
        {prevArticleId && (
          <Link to={`/article/${prevArticleId}`} className="prev">
            <div className="icon-container">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className='handle-container'>
                <span className="label">Previous Post</span>
                <span className="title">{prevArticleTitle}</span>
            </div>
          </Link>
        )}
        <Link to="/" className="all">
          <FontAwesomeIcon icon={faBorderAll} />
        </Link>
        {nextArticleId && (
          <Link to={`/article/${nextArticleId}`} className="next">
            <div className='handle-container'>
                <span className="label">Next Post</span>
                <span className="title">{nextArticleTitle}</span>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </Link>
        )}
      </div>
    );
  };

export default Pagination;
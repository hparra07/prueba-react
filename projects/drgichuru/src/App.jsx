import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import ArticleDetail from './ArticleDetail';

const App = () => {
  const articles = [
    {
      id:1,
      title: 'Urinary Incontinence',
      content: "Urinary incontinence refers to the un-intentional loss of urine. The amount of urine lost may range from a few drops to fully emptying one's bladder.",
      img: 'https://drgichuru.com/images/blog/urinary-incontence-3.jpg'
    },
    {
      id:2,
      title: 'Menopause (part 2)',
      content: "Menopause is the time that marks the end of your menstrual cycles. It's diagnosed after you've gone 12 months without a menstrual period. Menopause can happen in your 40s or 50s.",
      img: 'https://drgichuru.com/images/blog/menopausal-5.jpg'
    },
    {
      id:3,
      title: 'Menopause',
      content: "Menopause is marked by the ending of a woman's menstrual cycle. A woman is considered menopausal after she has had 12 consecutive months without a period.",
      img: 'https://drgichuru.com/images/blog/menopausal-1.jpg'
    }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog articles={articles} />} />
        <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
      </Routes>
    </Router>
  );
};

export default App;


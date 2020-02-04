import React, { Component } from 'react';
import articleContent from './Article-content';
import { Link } from 'react-router-dom';

const ArticleList = () => (
    <>
        <h1>Article List</h1>
        {articleContent.map(article => (
            <Link to={`/article/${article.name}`}>
            <h3>{article.title}</h3>
            </Link>
        ))}
    </>
);

export default ArticleList;
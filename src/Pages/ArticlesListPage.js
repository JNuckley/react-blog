import React, { Component } from 'react';
import ArticlesList from '../components/ArticlesList'
import articleContent from './Article-content';


const ArticleListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticlesList articles={articleContent}/>
    </>
);

export default ArticleListPage;
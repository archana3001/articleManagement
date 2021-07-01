import React from 'react';
import Header from './Header';
import ArticleCreate from './ArticleCreate';

export function Articles(){



  return(
    <>
    <Header/>
    <div className="col-sm-6 offset-sm-3">
    <hr/>
    <hr/>
    <ArticleCreate/>
     <hr/>
     <hr/>
    </div>
    </>
  )
}

export default Articles;

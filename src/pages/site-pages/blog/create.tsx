import React from 'react';
import CreateArticleView from '../../../components/organisam/blog-page/create-article';

import Sidebar from "../../../components/organisam/common/SideBar";


function ArticleCreatePage() {
    return (
       <>
            <Sidebar></Sidebar>
            <CreateArticleView></CreateArticleView>
       </>
    );
  }
  
  export default ArticleCreatePage;
  
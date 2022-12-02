import React from 'react';
import AllArticlesView from '../../../components/organisam/blog-page/articles';

import Sidebar from "../../../components/organisam/common/SideBar";


function BlogPage() {
    return (
       <>
            <Sidebar></Sidebar>
            <AllArticlesView></AllArticlesView>
       </>
    );
  }
  
  export default BlogPage;
  
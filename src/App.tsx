import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import LoginForm from './components/organisam/auth/LoginForm';
import HomeReport from './pages/reports/home';
import HomePage from './pages/site-pages/home';
import BlogPage from './pages/site-pages/blog';
import ArticleCreatePage from './pages/site-pages/blog/create';
import SectionEditPage from './pages/site-pages/home/edit-section';
import CreateNewPagePage from './pages/site-pages/create-page/CreatePage';
import EditPageComponent from './pages/site-pages/edit-page-component/EditPageComponent';
import AllPages from './pages/site-pages';
import EditPage from './pages/site-pages/edit-page/EditPage';
import CreateArticlePage from './pages/site-pages/blog/create';
// import Sidebar from './components/organisam/common/SideBar';

function App() {
   
   // const [login, setLogin] = useState<boolean>(true);

  return ( 
     <>
         {/* {login && <Sidebar></Sidebar>} */}

         <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginForm/>} />
              <Route path="/" element={<HomeReport/>} />
              <Route path="/pages/home" element={<HomePage/>} />
              <Route path="/blog/articles" element={<BlogPage/>} />
              <Route path="/blog/create-article" element={<ArticleCreatePage/>} />
              <Route path="/pages/edit/section/:id" element={<SectionEditPage/>} />
              <Route path="/pages/create" element={<CreateNewPagePage />} />
              <Route path="/page/:pageid/component/:componentid" element={<EditPageComponent />} />
              <Route path="/pages" element={<AllPages />} />
              <Route path="/page/:id" element={<EditPage />} />
              <Route path="/blog/articles/create" element={<CreateArticlePage />} />

            </Routes>
         </BrowserRouter>
     </>
  );
}

export default App;

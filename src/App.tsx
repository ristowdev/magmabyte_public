import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes  } from 'react-router-dom';
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
import EditArticle from './pages/site-pages/blog/edit';
import EditMenu from './pages/site-pages/menu/EditMenu';
import EditSettings from './pages/site-pages/settings/EditSettings';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './store/hook';
import { setUser } from './slices/auth/authSlice'; 
// import Sidebar from './components/organisam/common/SideBar'; 
 

function App() {
   const dispatch = useAppDispatch();

   // const token = localStorage.getItem("token");
   // const [token, setToken] = useState<string>();
   const token = useSelector((state: any) => state.auth.token);
   // const token = localStorage.getItem("token");

   // const token = localStorage.getItem("token");
   
//   const token = useSelector((state: any) => state.auth.token);
   // const [login, setLogin] = useState<boolean>(true);
   useEffect(()=>{
      const _token = localStorage.getItem("token");
      if(_token){ 
         dispatch(setUser({ token: _token}));
         console.log(_token);
      }
   },[]);

  return ( 
     <>
         {/* {login && <Sidebar></Sidebar>} */}

         <BrowserRouter>
            <Routes>
               {token && <>
               {/* <PrivateRoute path="/pages/home" element={<HomePage/>} /> */}
               {/* <PrivateRoute path="/pages/home" element={<HomePage/>} /> */}
               {/* <Route path="/pages" element={<ProtectedRoute outlet={<AllPages />} /> } /> */}

               {/* <Route path="/" element={<Navigate to="/pages"/>} /> */}
               <Route path="/pages/home" element={token ? <HomePage/> :<Navigate to="/login"/>} />
               <Route path="/blog/articles" element={token ? <BlogPage/> :<Navigate to="/login"/>} />
               <Route path="/blog/create-article" element={token ? <ArticleCreatePage/> :<Navigate to="/login"/>} />
               <Route path="/pages/edit/section/:id" element={token ? <SectionEditPage/>:<Navigate to="/login"/>} />
               <Route path="/pages/create" element={token ? <CreateNewPagePage /> :<Navigate to="/login"/>} />
               <Route path="/page/:pageid/component/:componentid" element={token ? <EditPageComponent /> :<Navigate to="/login"/>} />
               <Route path="/pages" element={token ? <AllPages /> :<Navigate to="/login"/>} />
               <Route path="/page/:id" element={token ? <EditPage /> :<Navigate to="/login"/>} />
               <Route path="/blog/articles/create" element={token ? <CreateArticlePage /> :<Navigate to="/login"/>} />
               <Route path="/blog/article/:id" element={token ? <EditArticle /> :<Navigate to="/login"/>} />
               <Route path="/menu" element={token ? <EditMenu /> :<Navigate to="/login"/>} />
               <Route path="/settings" element={token ? <EditSettings /> :<Navigate to="/login"/>} />
               </>}
               <Route path="/login" element={token ? <Navigate to="/pages" /> : <LoginForm/> } />
            </Routes>
         </BrowserRouter>
     </>
  );
}

export default App;

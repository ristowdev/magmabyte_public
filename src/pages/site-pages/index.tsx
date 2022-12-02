
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PageContent from '../../components/atoms/Contents/PageContent';

import SidebarAndHeader from '../../components/templates/HeaderWithSideBar';
import { useAllPagesQuery } from '../../slices/page/pageApiSlices';
 

function AllPages() {
    const {
        id = null
    } = useParams();

    const { data, isError, isLoading, isSuccess, error } = useAllPagesQuery();
    return (
       <>   
            <SidebarAndHeader />

            {isLoading ? (<>loading..</>) : data && (<>
            
                <PageContent
                    // headerTitle={`Edit ${(id !== '0' && id !== '7') ? 'section '+id : (id==='0') ? 'header' : (id==='7') ? 'footer' : ''}`}
                >
                    <>
                        {data?.map((page: any)=>(
                            <>
                                {page.page_title}
                                <Link to={`/page/${page._id}`}>Edit</Link>
                            </>
                        ))}
                    </>
                </PageContent>
            </>)}

       </>
    );
  }
  
  export default AllPages;
  

import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PageContent from '../../components/atoms/Contents/PageContent';
import MagmabyteTable from '../../components/atoms/Datatable/MagmabyteTable';

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
                    headerTitle='All pages'
                    // headerTitle={`Edit ${(id !== '0' && id !== '7') ? 'section '+id : (id==='0') ? 'header' : (id==='7') ? 'footer' : ''}`}
                >
                    <>
                        <MagmabyteTable 
                            columns={data}
                        />
                        
                    </>
                </PageContent>  
                <div style={{marginBottom:'100px'}}></div>
            </>)}

       </>
    );
  }
  
  export default AllPages;
  
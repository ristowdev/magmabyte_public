import React from 'react';
import { Link } from 'react-router-dom';
import { useAllArticlesQuery } from '../../../../slices/blog/blogApiSlices';
import PageContent from '../../../atoms/Contents/PageContent';
import MagmabyteTable from '../../../atoms/Datatable/MagmabyteTable';



function AllArticlesView() {
    // 
    const { data, isError, isLoading, isSuccess, error } = useAllArticlesQuery();

    return (
       <>

            <PageContent
                headerTitle='All articles'
                // headerTitle={`Edit ${(id !== '0' && id !== '7') ? 'section '+id : (id==='0') ? 'header' : (id==='7') ? 'footer' : ''}`}
            >
                <>
                    
                    {data?.map((article: any)=>(
                        <>
                            {article.article_name} <br/>
                            {article.article_visibility} <br/>
                            {article.article_status}<br/>
                            <Link to={`/blog/article/${article._id}`}>Edit</Link>
                        </>
                    ))}
                </>
            </PageContent>  
       </>
    );
  }
  
  export default AllArticlesView;
  
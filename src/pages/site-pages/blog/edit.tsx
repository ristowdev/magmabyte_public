import React, { useEffect, useMemo, useRef, useState } from 'react';
import SuccessButton from '../../../components/atoms/Buttons/CustomButtons';
import PageContentDefault from '../../../components/atoms/Contents/PageContentDefault';
import SideBarMainComponent from '../../../components/atoms/CustomComponents/SideBarMainComponent';
import { ActionButtons } from '../../../components/atoms/CustomComponents/styles';
import DefaultForm from '../../../components/atoms/Forms/DefaultForm';
import ErrorMessage from '../../../components/atoms/Snacbars/ErrorMessage';
import CreateArticle from '../../../components/organisam/article-create';
import CreateArticleView from '../../../components/organisam/blog-page/create-article';

import Sidebar from "../../../components/organisam/common/SideBar";
import SidebarAndHeader from '../../../components/templates/HeaderWithSideBar';
import { Container, Detail, Details, PpText, PublishPageContent, PublishPageFeild, PublishPageHeader } from './styles';
import * as yup from 'yup';
import {FaEye} from "react-icons/fa";
import DefaultMenu from '../../../components/atoms/Menus/DefaultMenu';
import { useAddNewArticleMutation, useSingleArticleQuery, useUpdateArticleMutation } from '../../../slices/blog/blogApiSlices';
import { useParams } from 'react-router-dom';
import LinkButton from '../../../components/atoms/Buttons/LinkButton';


function EditArticle() {

    const {
        id = null
    } = useParams();

    const { data, isError, isLoading, isSuccess, error } = useSingleArticleQuery(id);

    const [selectPageVisibility, setSelectPageVisibility] = useState<string>("Private");

    const [articleContent, setArticleContnet] = useState();
    // const _articleStatusRef = useRef<string>("publish")

    const [updateArticle,
        { isLoading: isSubmitting }, // This is the destructured mutation result
    ] = useUpdateArticleMutation();

    //error snack bar
    const [openSnackErrorBar, setOpenSnackErrorBar] = useState<boolean>(false);
    const [snackBarErrorMessage, setSnackBarErrorMessage] = useState<string>('');


    const handleSubmitForm = async ({ ...values }) => {
        if(articleContent){
            Object.assign(values, { 
                article_visibility:selectPageVisibility.toLowerCase(),
                article_content: articleContent,
                // article_status:_articleStatusRef.current,
                article_id:data[0]._id
            });

            updateArticle(values)
                .unwrap()
                .then(() => {
                })
                .then((error) => {
                    console.log(error)
                }); 

        }else{ 
            setOpenSnackErrorBar(true);
            setSnackBarErrorMessage('The article must have content!');
        }
    }
    
    const initialValues = useMemo(() => {
        // alert(data); 
        if(data){
            return {
                article_name:data[0]?.article_name
            };
        };
    },[data]);

    useEffect(()=>{
        if(data){
            setSelectPageVisibility(data[0]?.article_visibility);
            setArticleContnet(data[0]?.article_content);
        }
    },[data]);
    
    return (
       <>
            <SidebarAndHeader />
            <DefaultForm
                onSubmit={handleSubmitForm}
                schema={yup.object({
                    article_name: yup.string().required('required'),
                })}
                initialValues={initialValues}
                // ref={_pageStatusRef}


                >
                {isLoading ? (<>loading..</>) : data && (<>


                <PageContentDefault
                    headerTitle={`Edit article`}
                >
                    <>
                        <SideBarMainComponent
                            leftElements={
                                <>
                                    <Container>
                                          <CreateArticle 
                                            setArticleContnet={setArticleContnet}
                                            editData={data}
                                          />
                                    </Container>
                                </>
                            }
                            rightElements={
                                <>
                                    <PublishPageFeild>
                                        <PublishPageHeader>
                                            <PpText>Edit</PpText>
                                        </PublishPageHeader>
                                        <PublishPageContent>
                                            <Container style={{paddingBottom:'0px'}}>
                                                <Details>
                                                <Detail>
                                                        <FaEye 
                                                            size={17}
                                                            color="#c9c9c9"
                                                        />
                                                        {/* <DetailText>Visibility: <span style={{color:'black'}}><b>Public</b></span></DetailText> */}
                                                        <DefaultMenu
                                                            options={
                                                                ['Public', 'Private']
                                                            }
                                                            label="Visibility: "
                                                            // defaultSelected="Public"
                                                            defaultSelected={`${data[0]?.article_visibility === 'private' ? 'Private' : 'Public'}`}

                                                            selectPageVisibility={setSelectPageVisibility}
                                                        />
                                                    </Detail>
                                                </Details>

                                            </Container>

                                            <ActionButtons> 
                                                <LinkButton
                                                    buttonText='Back'
                                                    className='sd-ff34xd2'
                                                    linkTo={`/blog/articles/`}
                                                />
                                                <SuccessButton
                                                    label='Save'
                                                    className='sd-ff34xd3'
                                                    onClick={(e)=>{
                                                        // _articleStatusRef.current = 'publish';
                                                    }}
                                                    type="submit"
                                                    loading={isSubmitting}
                                                />
                                            </ActionButtons>
                                        </PublishPageContent>
                                    </PublishPageFeild>
                                </>
                            }
                        />
                        
                    </>
                </PageContentDefault>
            </>)}
            </DefaultForm>

            <ErrorMessage
                open={openSnackErrorBar}
                onClose={setOpenSnackErrorBar}
                errorMessage={snackBarErrorMessage}
            />
       </>
    );
  }
  
  export default EditArticle;
  
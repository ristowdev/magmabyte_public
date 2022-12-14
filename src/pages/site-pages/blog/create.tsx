import React, { useMemo, useRef, useState } from 'react';
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
import { useAddNewArticleMutation } from '../../../slices/blog/blogApiSlices';

function CreateArticlePage() {
    const [selectPageVisibility, setSelectPageVisibility] = useState<string>("Public");

    const [articleContent, setArticleContnet] = useState();
    const _articleStatusRef = useRef<string>("publish")

    const [addNewArticle,
        { isLoading: isSubmitting }, // This is the destructured mutation result
    ] = useAddNewArticleMutation();

    //error snack bar
    const [openSnackErrorBar, setOpenSnackErrorBar] = useState<boolean>(false);
    const [snackBarErrorMessage, setSnackBarErrorMessage] = useState<string>('');


    const handleSubmitForm = async ({ ...values }) => {
        if(articleContent){


            var __element = document.querySelector("input[name='items.0.icon_name']");
            const icon = (__element as HTMLInputElement).value;

            if(icon.length<1){
                setOpenSnackErrorBar(true);
                setSnackBarErrorMessage(`Article dosen't have thumbnail. Upload thumbnail!`);
                return 0;
            }

            Object.assign(values, { 
                article_visibility:selectPageVisibility.toLowerCase(),
                article_content: articleContent,
                article_status:_articleStatusRef.current,
                article_thumbnail: icon
            });

            addNewArticle(values)
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


    

    return (
       <>
            <SidebarAndHeader />
            <DefaultForm
                onSubmit={handleSubmitForm}
                schema={yup.object({
                    article_name: yup.string().required('required'),
                })}
                // ref={_pageStatusRef} 
                >
                <PageContentDefault
                    headerTitle={`Create new article`}
                >
                    <>
                        <SideBarMainComponent
                            leftElements={
                                <>
                                    <Container>
                                          <CreateArticle 
                                            setArticleContnet={setArticleContnet}
                                          />
                                    </Container>
                                </>
                            }
                            rightElements={
                                <>
                                    <PublishPageFeild>
                                        <PublishPageHeader>
                                            <PpText>Publish</PpText>
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
                                                            defaultSelected="Public"
                                                            selectPageVisibility={setSelectPageVisibility}
                                                        />
                                                    </Detail>
                                                </Details>

                                            </Container>

                                            <ActionButtons> 
                                                <SuccessButton
                                                    label='Save draft'
                                                    className='sd-ff34xd2'
                                                    type="submit"
                                                    name="save_draft"
                                                    onClick={(e)=>{
                                                        _articleStatusRef.current = 'draft';
                                                        // handleCreatePage(e, 'draft')
                                                    }}
                                                    // loading={isSubmitting}
                                                />
                                                <SuccessButton
                                                    label='Publish'
                                                    className='sd-ff34xd3'
                                                    onClick={(e)=>{
                                                        _articleStatusRef.current = 'publish';
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
            </DefaultForm>

            <ErrorMessage
                open={openSnackErrorBar}
                onClose={setOpenSnackErrorBar}
                errorMessage={snackBarErrorMessage}
            />
       </>
    );
  }
  
  export default CreateArticlePage;
  
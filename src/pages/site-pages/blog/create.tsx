import React from 'react';
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


function CreateArticlePage() {
   const handleSubmitForm = (e: any) =>{

   }
    return (
       <>
            <SidebarAndHeader />
            <DefaultForm
                onSubmit={handleSubmitForm}
                 
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
                                          <CreateArticle />
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
                                                   
                                                </Details>

                                            </Container>

                                            <ActionButtons> 
                                                <SuccessButton
                                                    label='Save draft'
                                                    className='sd-ff34xd2'
                                                    type="submit"
                                                    name="save_draft"
                                                    onClick={(e)=>{
                                                        // handleCreatePage(e, 'draft')
                                                    }}
                                                    // loading={isSubmitting}
                                                />
                                                <SuccessButton
                                                    label='Publish'
                                                    className='sd-ff34xd3'
                                                    onClick={(e)=>{
                                                    }}
                                                    type="submit"
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

            {/* <ErrorMessage
                open={openSnackErrorBar}
                onClose={setOpenSnackErrorBar}
                errorMessage={snackBarErrorMessage}
            /> */}
       </>
    );
  }
  
  export default CreateArticlePage;
  
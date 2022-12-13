import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageContentDefault from '../../../components/atoms/Contents/PageContentDefault';
import SideBarMainComponent from '../../../components/atoms/CustomComponents/SideBarMainComponent';

import Sidebar from "../../../components/organisam/common/SideBar";
import PageBuilder from '../../../components/organisam/page-builder';
import { Container, Detail, Details, DetailText, PpText, PublishPageContent, PublishPageFeild, PublishPageHeader } from './styles';
import {BsFillPinFill} from "react-icons/bs";
import {FaEye} from "react-icons/fa";
import { ActionButtons } from '../../../components/atoms/CustomComponents/styles';
import SuccessButton from '../../../components/atoms/Buttons/CustomButtons';
import SidebarAndHeader from '../../../components/templates/HeaderWithSideBar';
import { useAddNewPageMutation } from '../../../slices/page/pageApiSlices';
import MagmabyteForm from '../../../components/atoms/Forms/MagmabyteForm';
import { useFormik } from "formik";
import DefaultMenu from '../../../components/atoms/Menus/DefaultMenu';
import ErrorMessage from '../../../components/atoms/Snacbars/ErrorMessage';
import DefaultForm from '../../../components/atoms/Forms/DefaultForm';
import * as yup from 'yup';

function CreateNewPagePage() {
    const {
        id = null
    } = useParams();

    const navigate = useNavigate();


    const _pageStatusRef = useRef<string>("publish")

    const [addNewPage,
        { isLoading: isSubmitting }, // This is the destructured mutation result
    ] = useAddNewPageMutation();
    
    
    const [loading, setLoading] = useState<boolean>(false);

    //error snack bar
    const [openSnackErrorBar, setOpenSnackErrorBar] = useState<boolean>(false);
    const [snackBarErrorMessage, setSnackBarErrorMessage] = useState<string>('');

    // page components
    const [returnedPageComponents, setReturnedPageComponentsSet] = useState<any>(null);
    const [selectPageVisibility, setSelectPageVisibility] = useState<string>("Private");
    const [selectPageTemplate, setSelectPageTemplate] = useState<string>("Home page");

    const handleCreatePage = (e: any, type: string) =>{
        formik.setFieldValue('page_visibility', 
            selectPageVisibility ? selectPageVisibility.toLowerCase() : 'private'
        );
        formik.setFieldValue('page_status', type);
        formik.handleSubmit();
    }

    // const validationSchema = Yup.object().shape({
    //     page_title: Yup.string().required("Required"), 
    // });
    
    const handleFormSubmit = (values: any) => {
         
        if(returnedPageComponents?.length > 0){
		    const _arr = [
                {
                    page_title:values.page_title,
                    page_status:values.page_status,
                    page_visibility:values.page_visibility,
                    components:returnedPageComponents
                }
            ];

            addNewPage(_arr)  
                .unwrap()
                .then(() => {
                })
                .then((error) => {
                    console.log(error)
                }); 
        }else{ 
            setOpenSnackErrorBar(true);
            setSnackBarErrorMessage('The page must have at least one component!');
        }
    }; 


    const formik = useFormik({
        initialValues: {
          page_title: "",
          page_status: "draft",
          page_visibility:"private"
        },
        // validationSchema,
        onSubmit: handleFormSubmit,
    });

    

    const handleCreateNewPage = async ({ ...values }) => {
        if(returnedPageComponents?.length > 0){
            Object.assign(values, { 
                page_status:_pageStatusRef.current,
                page_visibility: selectPageVisibility.toLowerCase(),
                components:returnedPageComponents,
                page_template: selectPageTemplate === 'Home page' ? 'home_page' : 'blog_post' 
            });
            addNewPage(values)
                .unwrap()
                .then(() => {
                    navigate('/pages');
                })
                .then((error) => {
                    console.log(error)
                }); 
        }else{ 
            setOpenSnackErrorBar(true);
            setSnackBarErrorMessage('The page must have at least one component!');
        }
    } 
    return (
       <>   
            <SidebarAndHeader /> 
            <DefaultForm
                onSubmit={handleCreateNewPage}
                schema={yup.object({
                    page_title: yup.string().required('required'),
                })}
                // ref={_pageStatusRef}
                >
                <PageContentDefault
                    headerTitle={`Create new page`}
                >
                    <>
                        <SideBarMainComponent
                            leftElements={
                                <>
                                    <Container>
                                            <PageBuilder 
                                                returnNewPageContent={
                                                    setReturnedPageComponentsSet
                                                }
                                                formik={
                                                    formik
                                                }
                                                template={selectPageTemplate}
                                            />
                                        {/* </MagmabyteForm> */}
                                    </Container>
                                </>
                            }
                            rightElements={
                                <>
                                    <PublishPageFeild
                                        style={{
                                            marginBottom:'15px'
                                        }}
                                    >
                                        <PublishPageHeader>
                                            <PpText>Template</PpText>
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
                                                                ['Home page', 'Blog post']
                                                            }
                                                            label="Template: "
                                                            defaultSelected="Home page"
                                                            selectPageVisibility={setSelectPageTemplate}
                                                        />
                                                    </Detail>
                                                     
                                                </Details>
 
                                            </Container>
 
                                        </PublishPageContent>
                                    </PublishPageFeild>


                                    <PublishPageFeild>
                                        <PublishPageHeader>
                                            <PpText>Publish</PpText>
                                        </PublishPageHeader>
                                        <PublishPageContent>
                                            <Container style={{paddingBottom:'0px'}}>
                                                <Details>
                                                    <Detail>
                                                        <BsFillPinFill 
                                                            size={17}
                                                            color="#c9c9c9"
                                                        />
                                                        <DetailText>Status: <span style={{color:'black'}}><b>Draft</b></span></DetailText>
                                                    </Detail>
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
                                                            defaultSelected="Private"
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
                                                        _pageStatusRef.current = 'draft'
                                                        // handleCreatePage(e, 'draft')
                                                    }}
                                                    // loading={isSubmitting}
                                                />
                                                <SuccessButton
                                                    label='Publish'
                                                    className='sd-ff34xd3'
                                                    onClick={(e)=>{
                                                        _pageStatusRef.current = 'publish'
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
  
  export default CreateNewPagePage;
  
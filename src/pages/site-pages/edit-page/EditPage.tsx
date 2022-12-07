import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import { useAddNewPageMutation, useSinglePageQuery, useUpdatePageMutation } from '../../../slices/page/pageApiSlices';
import MagmabyteForm from '../../../components/atoms/Forms/MagmabyteForm';
import { useFormik } from "formik";
import * as Yup from "yup";
import DefaultMenu from '../../../components/atoms/Menus/DefaultMenu';
import ErrorMessage from '../../../components/atoms/Snacbars/ErrorMessage';
import DefaultForm from '../../../components/atoms/Forms/DefaultForm';
import * as yup from 'yup';
import LinkButton from '../../../components/atoms/Buttons/LinkButton';

function EditPage() {
    const {
        id = null
    } = useParams(); 

    const _pageStatusRef = useRef<string>("publish")

    // get page data
    const { data, isError, isLoading, isSuccess, error } = useSinglePageQuery(id);
    
    const [updatePage,
        { isLoading: isSubmitting }, // This is the destructured mutation result
    ] = useUpdatePageMutation();
    
    const [loading, setLoading] = useState<boolean>(false);

    //error snack bar
    const [openSnackErrorBar, setOpenSnackErrorBar] = useState<boolean>(false);
    const [snackBarErrorMessage, setSnackBarErrorMessage] = useState<string>('');

    // page components
    const [returnedPageComponents, setReturnedPageComponentsSet] = useState<any>(null);
    const [selectPageVisibility, setSelectPageVisibility] = useState<string>("");
    const [currentComponents, setCurrentComponents] = useState<any>(null);
    const [selectPageStatus, setSelectPageStatus] = useState<string>("");


    const handleCreatePage = (e: any, type: string) =>{
        formik.setFieldValue('page_visibility', 
            selectPageVisibility ? selectPageVisibility.toLowerCase() : 'private'
        );
        formik.setFieldValue('page_status', type);
        formik.handleSubmit();
    }

    const validationSchema = Yup.object().shape({
        page_title: Yup.string().required("Required"), 
    });
    
    const handleFormSubmit = (values: any) => {
         
        if(returnedPageComponents?.length > 0){
		    const _arr = [
                {
                    page_title:values.page_title,
                    page_status:values.page_status,
                    page_visibility:values.page_visibility,
                    components:returnedPageComponents,
                }
            ];

            updatePage(_arr)  
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
          page_title: data?.page_title,
          page_status: "draft",
          page_visibility:"private"
        },
        validationSchema,
        onSubmit: handleFormSubmit,
    }); 

    const handleEditPageComponent = async ({ ...values }) => {
        
        Object.assign(values, {
            page_visibility: selectPageVisibility.toLowerCase(),
            components:returnedPageComponents,
            current_components:currentComponents,
            page_id:id,
            page_status:selectPageStatus.toLowerCase(),
        });
        console.log(values);
        updatePage(values).unwrap()
        .then(() => {
            // navigate(`/page/${data.page_id}`);
            
        })
        .then((error) => {
        }); 
    }

    const initialValues = useMemo(() => {
        // alert(data);
   
        if(data){
            return {
                page_title:data.page_title
            };
        };
    },[data]);

    useEffect(()=>{
        if(data){
            setSelectPageStatus(data?.page_status);
            setSelectPageVisibility(data?.page_visibility);
            setCurrentComponents(data?.components);
        }
    },[data]);

    const handleArchivePage = (e: any) => {
        e.preventDefault();
        
        
    }

    return (
       <>   
            <SidebarAndHeader />
            <DefaultForm
                onSubmit={handleEditPageComponent}
                schema={yup.object({
                    page_title: yup.string().required('required'), 
                })}
                initialValues={initialValues}
            >
            {isLoading ? (<>loading..</>) : data && (<>

            <PageContentDefault
                headerTitle={`Edit ${data.page_title} page`}
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
                                            editData={data}
                                        />
                                    {/* </MagmabyteForm> */}
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
                                                    <BsFillPinFill 
                                                        size={17}
                                                        color="#c9c9c9"
                                                    />
                                                    <DefaultMenu
                                                        options={
                                                            // ['Draft', 'Published', 'Archived']
                                                            ['Published', 'Archived']
                                                        }
                                                        label="Status: "
                                                        defaultSelected={`${data.page_status === 'published' ? 'Published' : data.page_status === 'archived' ? 'Archived' : 'Draft'}`}
                                                        selectPageVisibility={setSelectPageStatus}
                                                    />
                                                    {/* <DetailText>Status: <span style={{color:'black'}}><b>{data.page_status === 'publish' ? 'Published' : data.page_status === 'archive' ? 'Archived' : 'Draft'}</b></span></DetailText> */}
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
                                                        defaultSelected={`${data.page_visibility === 'private' ? 'Private' : 'Public'}`}
                                                        selectPageVisibility={setSelectPageVisibility}
                                                    />
                                                </Detail>
                                            </Details>

                                        </Container>

                                        <ActionButtons> 
                                            <LinkButton
                                                buttonText='Back'
                                                className='sd-ff34xd2'
                                                linkTo={`/pages/`}
                                            />
                                            <SuccessButton 
                                                label='Save'
                                                className='sd-ff34xd3'
                                                onClick={(e)=>{
                                                    // handleCreatePage(e, 'publish')
                                                    // _pageStatusRef.current = 'publish'

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

            <ErrorMessage
                open={openSnackErrorBar}
                onClose={setOpenSnackErrorBar}
                errorMessage={snackBarErrorMessage}
            />
            </>)}
            </DefaultForm>


       </>
       
    );
  }
  
  export default EditPage;
  
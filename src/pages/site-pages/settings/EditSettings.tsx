import React, { useEffect, useMemo, useRef, useState } from 'react';
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
import EditMenuComponent from '../../../components/organisam/edit-menu';
import { useEditMenuLinksMutation, useGetMenuQuery } from '../../../slices/menu/menuApiSlices';
import EditSiteSettings from '../../../components/organisam/edit-site-settings';
import { useEditSiteSettingsMutation, useGetSiteSettingsQuery } from '../../../slices/settings/menuApiSlices';
// import EditSiteSettings from '../../../components/organisam/edit-settings';

function EditSettings() {
    const {
        id = null
    } = useParams();

    const [__formWithInputsInputs, setFormWithInputsInputs] = useState([]);
    const navigate = useNavigate();

    const { data: siteSettings, isError, isLoading, isSuccess, error } = useGetSiteSettingsQuery();

    // 
    const _pageStatusRef = useRef<string>("publish")

    const [addNewPage,
        { isLoading: isSubmitting }, // This is the destructured mutation result
    ] = useAddNewPageMutation();

    const [editSiteSettings,
        { isLoading: __isSubmitting } // This is the destructured mutation result
    ] = useEditSiteSettingsMutation();
    
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
    // const initialValues = useMemo(() => {
    //     return {
    //         button_title:menuData?.button_title
            
    //     }
    // }, [menuData]);
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


        var __element = document.querySelector("select[name='items.0.default_home_page']");
        const default_home_page = (__element as HTMLSelectElement).value;
        console.log(default_home_page);
        Object.assign(values, {
            default_home_page:default_home_page
        }); 

        editSiteSettings(values).unwrap()
            .then(() => {
                // navigate(``);
            })
            .then((error) => {
            }); 
        // console.log(__formWithInputsInputs);
        // var element = document.querySelector("input[name='items.0.icon_name']");
        // const main_text = (element as HTMLInputElement).value;
        // if(returnedPageComponents?.length > 0){
        //     Object.assign(values, { 
        //         page_status:_pageStatusRef.current,
        //         page_visibility: selectPageVisibility.toLowerCase(),
        //         components:returnedPageComponents,
        //         page_template: selectPageTemplate === 'Home page' ? 'home_page' : 'blog_post' 
        //     });
        //     addNewPage(values)
        //         .unwrap()
        //         .then(() => {
        //             navigate('/pages');
        //         })
        //         .then((error) => {
        //             console.log(error)
        //         }); 
        // }else{ 
        //     setOpenSnackErrorBar(true);
        //     setSnackBarErrorMessage('The page must have at least one component!');
        // }
    } 
    return (
       <>   
            <SidebarAndHeader /> 
            <DefaultForm
                onSubmit={handleCreateNewPage}
              
                // initialValues={initialValues}
                // ref={_pageStatusRef} 
                >

                {isLoading ? (<>loading..</>) : siteSettings && (<>

                <PageContentDefault
                    headerTitle={`Edit settings`}
                >
                    <>
                        <SideBarMainComponent
                            leftElements={
                                <>
                                    <Container>
                                        <EditSiteSettings
                                            data={siteSettings}
                                            setListOfItemsInBoxAndCenterText={setFormWithInputsInputs}
                                        />
                                    </Container>
                                </>
                            }
                            rightElements={
                                <>
                                    <PublishPageFeild>
                                        <PublishPageHeader>
                                            <PpText>Save edit</PpText>
                                        </PublishPageHeader>
                                        <PublishPageContent>
                            
                                            <ActionButtons> 
                                              
                                                <SuccessButton
                                                    label='Save'
                                                    className='sd-ff34xd3'
                                                    onClick={(e)=>{
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
  
  export default EditSettings;
  
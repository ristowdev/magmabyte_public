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

function EditMenu() {
    const {
        id = null
    } = useParams();

    const [__formWithInputsInputs, setFormWithInputsInputs] = useState([]);
    const navigate = useNavigate();

    const { data: menuData, isError, isLoading, isSuccess, error } = useGetMenuQuery();

    // 
    const _pageStatusRef = useRef<string>("publish")

    const [addNewPage,
        { isLoading: isSubmitting }, // This is the destructured mutation result
    ] = useAddNewPageMutation();

    const [editMenuLinks,
        { isLoading: __isSubmitting } // This is the destructured mutation result
    ] = useEditMenuLinksMutation();
    
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
    const initialValues = useMemo(() => {
        return {
            button_title:menuData?.button_title
            
        }
    }, [menuData]);
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
        if(__formWithInputsInputs?.length>0){
            let __component_items = [];
            
            for(let i=0; i<__formWithInputsInputs.length; i++){
                var __element = document.querySelector("select[name='items."+i+".page_slug']");
                const page_slug = (__element as HTMLSelectElement).value;


                var __element = document.querySelector("input[name='items."+i+".link_text']");
                const link_text = (__element as HTMLInputElement).value;

                const sort_number = __formWithInputsInputs[i]['sortNumber'];

                __component_items.push({ 
                    page_slug: page_slug,
                    sort_number:sort_number,
                    link_text: link_text, 
                });

            }

            Object.assign(values, {
                page_links:__component_items
            });
        }else{ 
            setOpenSnackErrorBar(true);
            setSnackBarErrorMessage('The site must have at least one link!');
            return 0;
        }

        editMenuLinks(values).unwrap()
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
                schema={yup.object({
                    button_title: yup.string().required('required'),
                })}
                initialValues={initialValues}
                // ref={_pageStatusRef}
                >

                {isLoading ? (<>loading..</>) : menuData && (<>

                <PageContentDefault
                    headerTitle={`Edit menu`}
                >
                    <>
                        <SideBarMainComponent
                            leftElements={
                                <>
                                    <Container>
                                        <EditMenuComponent
                                            data={menuData}
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
  
  export default EditMenu;
  
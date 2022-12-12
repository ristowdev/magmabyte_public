import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageContentDefault from '../../../components/atoms/Contents/PageContentDefault';
import SideBarMainComponent from '../../../components/atoms/CustomComponents/SideBarMainComponent';
import { Form, Field } from 'react-final-form'
import Sidebar from "../../../components/organisam/common/SideBar";
import PageBuilder from '../../../components/organisam/page-builder';
import {RiPagesFill} from "react-icons/ri";
import {TbSection} from "react-icons/tb";
import {VscListOrdered} from "react-icons/vsc";
import { ActionButtons } from '../../../components/atoms/CustomComponents/styles';
import SuccessButton from '../../../components/atoms/Buttons/CustomButtons';
import SidebarAndHeader from '../../../components/templates/HeaderWithSideBar';
import LeftTextsWithRightImage from '../../../components/molecules/page-components/LeftTextsWithRightImage';
import { Container, Detail, Details, DetailText, PpText, PublishPageContent, PublishPageFeild, PublishPageHeader } from './styles';
import AddItemsComponet from '../../../components/molecules/page-components/AddItemsAndHeader';
import { useGetSingleComponentQuery } from '../../../slices/components/pageComponentsApiSlices';
import CustomInput from '../../../components/atoms/Inputs/CustomInput';
import DefaultForm from '../../../components/atoms/Forms/DefaultForm';
import * as yup from 'yup';
import LinkButton from '../../../components/atoms/Buttons/LinkButton';
import { useAddNewItemsToComponentMutation } from '../../../slices/component-items/componentItemsApiSlices';
import AddItemsAndHeader from '../../../components/molecules/page-components/AddItemsAndHeader';
import { array, boolean, number, object, string, ValidationError } from 'yup';
import InputWithMoreDetails2 from '../../../components/atoms/Inputs/InputWithMoreDetails2';
import ErrorMessage from '../../../components/atoms/Snacbars/ErrorMessage';
import ListOfItemsInBoxAndCenterText from '../../../components/molecules/page-components/ListOfItemsInBoxAndCenterText';
import GetInTouchForm from '../../../components/molecules/page-components/GetInTouchForm';
import { useUploadImageMutation } from '../../../slices/media/mediaApiSlices';

interface IEditPageComponentProps {
}

export default function EditPageComponent(props: IEditPageComponentProps) {

    const {
        pageid = null,
        componentid = null
    } = useParams();
 
    const navigate = useNavigate();


    //error snack bar
    const [openSnackErrorBar, setOpenSnackErrorBar] = useState<boolean>(false);
    const [snackBarErrorMessage, setSnackBarErrorMessage] = useState<string>('');


    const [addItemsAndHeaderItems, setAddItemsAndHeaderItems] = useState([]);
    const [_listOfItemsInBoxAndCenterText, setListOfItemsInBoxAndCenterText] = useState([]);
    
    const { data, isError, isLoading, isSuccess, error } = useGetSingleComponentQuery([pageid, componentid]);
    const [addNewItemsToComponent,
        { isLoading: isSubmitting }, // This is the destructured mutation result
    ] = useAddNewItemsToComponentMutation();

    const [uploadImage,
        { isLoading: isUploadingImage }, // This is the destructured mutation result
    ] = useUploadImageMutation();


    
    
    const initialValues = useMemo(() => {
        // alert(data);
   
        if(data?.component_key === 'leftTextsRightImage'){
            return {
                main_text_left:data?.items[0]?.leftTextsRightImage[0]?.main_text_left,
                sub_text_left:data?.items[0]?.leftTextsRightImage[0]?.sub_text_left,
                button_text:data?.items[0]?.leftTextsRightImage[0]?.button_text,
                checkpoint_1:data?.items[0]?.leftTextsRightImage[0]?.checkpoint_1,
                checkpoint_2:data?.items[0]?.leftTextsRightImage[0]?.checkpoint_2,
                checkpoint_3:data?.items[0]?.leftTextsRightImage[0]?.checkpoint_3,
                checkpoint_4:data?.items[0]?.leftTextsRightImage[0]?.checkpoint_4,
                checkpoint_5:data?.items[0]?.leftTextsRightImage[0]?.checkpoint_5,
            };
        };

        if(data?.component_key === 'addItemsAndHeader'){
            return {
                main_text_center:data?.items[0]?.addItemsAndHeader?.main_text_center
            };
        };

        if(data?.component_key === 'listOfItemsInBoxAndCenterText'){
            return {
                main_text_center:data?.items[0]?.listOfItemsInBoxAndCenterText?.main_text_center
            };
        };


        if(data?.component_key === 'getInTouchForm'){
            return {
                main_text_left:data?.items[0]?.getInTouchForm[0]?.main_text_left,
                button_text:data?.items[0]?.getInTouchForm[0]?.button_text,
                email:data?.items[0]?.getInTouchForm[0]?.email,
                phone_number:data?.items[0]?.getInTouchForm[0]?.phone_number,
                address:data?.items[0]?.getInTouchForm[0]?.address,
                right_location_text:data?.items[0]?.getInTouchForm[0]?.right_location_text,
                right_sub_location_text:data?.items[0]?.getInTouchForm[0]?.right_sub_location_text,
            };
        };
    },[data]);

    const componentItemsSchema = useMemo(() => {
        // alert(data);
   
        if(data?.component_key === 'leftTextsRightImage'){
            return (
                yup.object({
                    // right_main_image: yup.string().required('required'),
                    main_text_left: yup.string().required('required'),
                    sub_text_left: yup.string().required('required'),
                    button_text: yup.string().required('required'),
                    checkpoint_1: yup.string().required('required'),
                })
            );
        };
 
        if(data?.component_key === 'addItemsAndHeader'){
            return (
                yup.object({
                    main_text_center: yup.string().required('required'),
                })
            );
        }; 

        if(data?.component_key === 'listOfItemsInBoxAndCenterText'){
            return (
                yup.object({
                    main_text_center: yup.string().required('required'),
                })
            );
        }; 

        if(data?.component_key === 'getInTouchForm'){
            return (
                yup.object({
                    main_text_left: yup.string().required('required'),
                    right_location_text: yup.string().required('required'),
                    right_sub_location_text: yup.string().required('required'),
                    address: yup.string().required('required'),
                    email: yup.string().required('required'),
                    phone_number: yup.string().required('required'),
                    button_text: yup.string().required('required'),
                })
            );
        }; 

        

    },[data]);
    // const initialValues = {
    //     main_text_left:data.items[0].
    // };
    
    const handleEditPageComponent = async ({ ...values }) => {
        
        if(data?.component_key === 'addItemsAndHeader'){
            if(addItemsAndHeaderItems?.length>0){

                let __component_items = [];
                for(let i=0; i<addItemsAndHeaderItems.length; i++){
                    var element = document.querySelector("input[name='items."+i+".main_text']");
                    var _element = document.querySelector("textarea[name='items."+i+".description']");
                    const main_text = (element as HTMLInputElement).value;
                    const description = (_element as HTMLInputElement).value;
                    const sort_number = addItemsAndHeaderItems[i]['sortNumber'];
    
                    if(main_text.length<1){
                        setOpenSnackErrorBar(true);
                        setSnackBarErrorMessage(`Item with place ${sort_number} dosen't have main text add it or remove the item.`);
                        return 0;
                    }

                    if(description.length<1){
                        setOpenSnackErrorBar(true);
                        setSnackBarErrorMessage(`Item with place ${sort_number} dosen't have description add it or remove the item.`);
                        return 0;
                    }

                    __component_items.push({
                        main_text:main_text,
                        description:description,
                        sort_number:sort_number
                    });
                }

                Object.assign(values, {
                    page_id: pageid,
                    component_id: componentid,
                    component_key: data.component_key,
                    component_items:__component_items
                });

            }else{ 
                setOpenSnackErrorBar(true);
                setSnackBarErrorMessage('The component must have at least one item!');
                return 0;
            }

            addNewItemsToComponent(values).unwrap()
            .then(() => {
                navigate(`/page/${data.page_id}`);
            })
            .then((error) => {
            }); 
        }


        if(data?.component_key === 'listOfItemsInBoxAndCenterText'){
            if(_listOfItemsInBoxAndCenterText?.length>0){

                let __component_items = [];
                for(let i=0; i<_listOfItemsInBoxAndCenterText.length; i++){
                    var element = document.querySelector("input[name='items."+i+".main_text']");
                    var _element = document.querySelector("textarea[name='items."+i+".description']");
                    const main_text = (element as HTMLInputElement).value;
                    const description = (_element as HTMLInputElement).value;
                    const sort_number = _listOfItemsInBoxAndCenterText[i]['sortNumber'];
    
                    if(main_text.length<1){
                        setOpenSnackErrorBar(true);
                        setSnackBarErrorMessage(`Item with place ${sort_number} dosen't have main text add it or remove the item.`);
                        return 0;
                    }

                    if(description.length<1){
                        setOpenSnackErrorBar(true);
                        setSnackBarErrorMessage(`Item with place ${sort_number} dosen't have description add it or remove the item.`);
                        return 0;
                    }

                    __component_items.push({
                        main_text:main_text,
                        description:description,
                        sort_number:sort_number
                    });
                }

                Object.assign(values, {
                    page_id: pageid,
                    component_id: componentid,
                    component_key: data.component_key,
                    component_items:__component_items
                });
                
            }else{ 
                setOpenSnackErrorBar(true);
                setSnackBarErrorMessage('The component must have at least one item!');
                return 0;
            }

            addNewItemsToComponent(values).unwrap()
            .then(() => {
                navigate(`/page/${data.page_id}`);
            })
            .then((error) => {
            }); 
        }

        if(data?.component_key === 'leftTextsRightImage'){

            
            const element = document.getElementById('right_main_image') as HTMLInputElement;
            // alert("hi")
            const payload = new FormData();
            if(element.files){  
                payload.append("file", element.files[0]); 
            }
            // // payload.append("file", values)

            // console.log(payload)
            // Object.assign(values, {
            //     page_id: pageid,
            //     component_id: componentid,
            //     component_key: data.component_key
            // });
            uploadImage(payload).unwrap()
            .then(() => {
                // navigate(`/page/${data.page_id}`);
            })
            .then((error) => {
            }); 
        }

        if(data?.component_key === 'getInTouchForm'){
            
            Object.assign(values, {
                page_id: pageid,
                component_id: componentid,
                component_key: data.component_key
            });
            addNewItemsToComponent(values).unwrap()
            .then(() => {
                navigate(`/page/${data.page_id}`);
            })
            .then((error) => {
            }); 
        }
    }
        

    return (
       <>   
            <SidebarAndHeader />
             
            <DefaultForm
                onSubmit={handleEditPageComponent}
                schema={componentItemsSchema}
                initialValues={initialValues}
            >
                {isLoading ? (<>loading..</>) : data && (<>

                    <PageContentDefault
                        headerTitle={`Edit page comonent`}
                    >
                        <>
                            <SideBarMainComponent
                                leftElements={
                                    <>

                                        {data?.component_key === 'leftTextsRightImage' && 
                                            <LeftTextsWithRightImage 
                                                // formik={_formik && _formik}
                                                data={data.items[0]}
                                            />
                                        }

                                        {data?.component_key === 'addItemsAndHeader' && 
                                            <AddItemsAndHeader
                                                // formik={_formik && _formik}
                                                data={data.items[0]}
                                                setAddItemsAndHeaderItems={setAddItemsAndHeaderItems}
                                            />
                                        }

                                        {data?.component_key === 'listOfItemsInBoxAndCenterText' && 
                                            <ListOfItemsInBoxAndCenterText
                                                // formik={_formik && _formik}
                                                data={data.items[0]}
                                                setListOfItemsInBoxAndCenterText={setListOfItemsInBoxAndCenterText}
                                            />
                                        }

                                        {data?.component_key === 'getInTouchForm' && 
                                            <GetInTouchForm
                                                // formik={_formik && _formik}
                                                data={data.items[0]}
                                            />
                                        }

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
                                                            <RiPagesFill 
                                                                size={17}
                                                                color="#c9c9c9"
                                                            />
                                                            <DetailText>Page: <span style={{color:'black'}}><b>Home</b></span></DetailText>
                                                        </Detail>
                                                        <Detail>
                                                            <TbSection 
                                                                size={17}
                                                                color="#c9c9c9"
                                                            />
                                                            <DetailText>Component: <span style={{color:'black'}}><b>{data.component_name}</b></span></DetailText>
                                                        </Detail>
                                                        <Detail>
                                                            <VscListOrdered 
                                                                size={17}
                                                                color="#c9c9c9"
                                                            />
                                                            <DetailText>Position: <span style={{color:'black'}}><b>#{data.sort_number}</b></span></DetailText>
                                                        </Detail>
                                                    </Details>

                                                </Container>

                                                <ActionButtons>
                                                    <LinkButton
                                                        buttonText='Cancle'
                                                        className='sd-ff34xd2'
                                                        linkTo={`/page/${data.page_id}`}
                                                    />
                                                    <SuccessButton 
                                                        label='Save'
                                                        className='sd-ff34xd3'
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
  
  
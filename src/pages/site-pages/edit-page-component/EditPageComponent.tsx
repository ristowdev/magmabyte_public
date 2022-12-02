import React, { useMemo } from 'react';
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
import AddItemsComponet from '../../../components/molecules/page-components/AddItemsSection';
import { useGetSingleComponentQuery } from '../../../slices/components/pageComponentsApiSlices';
import CustomInput from '../../../components/atoms/Inputs/CustomInput';
import DefaultForm from '../../../components/atoms/Forms/DefaultForm';
import * as yup from 'yup';
import LinkButton from '../../../components/atoms/Buttons/LinkButton';
import { useAddNewItemsToComponentMutation } from '../../../slices/component-items/componentItemsApiSlices';

interface IEditPageComponentProps {
}

export default function EditPageComponent(props: IEditPageComponentProps) {

    const {
        pageid = null,
        componentid = null
    } = useParams();

    const navigate = useNavigate();

    const { data, isError, isLoading, isSuccess, error } = useGetSingleComponentQuery([pageid, componentid]);
    const [addNewItemsToComponent,
        { isLoading: isSubmitting }, // This is the destructured mutation result
    ] = useAddNewItemsToComponentMutation();
    
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
    },[data]);

    // const initialValues = {
    //     main_text_left:data.items[0].
    // };
    
    const handleEditPageComponent = async ({ ...values }) => {
        // console.log(values);
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

    return (
       <>   
            <SidebarAndHeader />
             
            <DefaultForm
                onSubmit={handleEditPageComponent}
                schema={yup.object({
                    main_text_left: yup.string().required('required'),
                    sub_text_left: yup.string().required('required'),
                    button_text: yup.string().required('required'),
                    checkpoint_1: yup.string().required('required'),
                })}
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

       </>
    );
  }
  
  
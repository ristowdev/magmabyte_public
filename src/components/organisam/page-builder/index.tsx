// import React, { MouseEvent, ReactElement, SetStateAction, useEffect } from 'react';
// import { ChangeEvent, useState } from 'react';
// import CustomInput from '../../atoms/Inputs/CustomInput';
// import { AddComponents, AddComponentText, AddedComponents, Container, DragDropFeild } from './styles';

// import {IoAddCircleSharp} from 'react-icons/io5';
// import InputWithMoreDetails from '../../atoms/Inputs/InputWithMoreDetails';
// import CustomTextArea from '../../atoms/Textareas/CustomeTextArea';
// import EditButton from '../../atoms/Buttons/EditButton';

// import {FiChevronDown} from "react-icons/fi";
// import { AiOutlineQuestionCircle } from 'react-icons/ai';
// import ComponentItemsHeader from '../../atoms/ComponentItemsHeader/ComponentWithHeader';
// import DefaultModal from '../modals/DefaultModal';
// import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
// import { ComponetWithItemsHeader } from '../../atoms/ComponentItemsHeader/styles';
// import DeleteComponentModal from '../modals/DeleteComponentModal';
// import MagmabyteForm from '../../atoms/Forms/MagmabyteForm';


// interface IPageBuilderProps {
//     className?: string;
//     headerTitle?: string;
//     returnNewPageContent: Dispatch<SetStateAction<any>>;
//     formik: any;
//     editData?: any;
// }

// interface Provider { 
//     component: string;
// }

// type Component = {
//     _id?: string;
//     id: number;
//     name: string;
//     key?: string;
//     sortNumber?: number;
// };

// type Dispatch<A> = (value: A) => void;
 
// const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
// 	padding: 10,
// 	margin: `0 50px 15px 50px`,
// 	background: isDragging ? "#4a2975" : "white",
// 	color: isDragging ? "white" : "black",
// 	border: `1px solid black`,
// 	fontSize: `20px`,
// 	borderRadius: `5px`,

// 	...draggableStyle
// })

// export default function PageBuilder(props: IPageBuilderProps) {
//     const {
//         returnNewPageContent,
//         formik,
//         editData
//     } = props;

//     // delete component states
//     const [componentForDeleting, setComponentForDeleting] = useState<any>([]);
//     const [openDeleteComponentModal, setOpenDeleteComponentModal] = useState(false);
//     const [confirmedDelete, setConfirmedDelete] = useState(false);
//     // add component states
//     const [openModal, setOpenModal] = useState(false);
//     const [choosedComponent, _setChoosedComponent] = useState<any>([]);

//     // components states
//     const [pageComponents, setPageComponents] = useState<Component[]>([]);
    
//     function randomNumberInRange(min:number, max:number) {
//         // 👇️ get number between min (inclusive) and max (inclusive)
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
    
//     useEffect(()=>{
//         if(choosedComponent!=''){
//             setPageComponents(prev => [
//                 ...prev,
//                 {
//                     id: randomNumberInRange(1,10000),  
//                     // id: pageComponents.length, 
//                     name: choosedComponent.name, 
//                     key:choosedComponent.key,
//                     sortNumber: pageComponents.length
//                 },
//               ]);
//             _setChoosedComponent('');
//         }
//     }, [choosedComponent]);
 

// 	const onDragEnd = (result: DropResult) => {
// 		const { source, destination } = result
// 		if (!destination) return

// 		const items = Array.from(pageComponents)
// 		const [ newOrder ] = items.splice(source.index, 1)
// 		items.splice(destination.index, 0, newOrder) 
//         items.map((im, index) => (
//             im.sortNumber = index
//         ));
// 		setPageComponents(items)
// 	}
 

// 	const onDragStart = (result: DropResult) => {
// 	}

//     useEffect(()=>{
//         if(confirmedDelete!==false){
//             setComponentForDeleting(null);
//             setConfirmedDelete(false);
//             var items_filter = pageComponents.filter(c => c.id !== componentForDeleting.id);
//             items_filter.map((im, index) => (
//                 im.sortNumber = index
//             ));
//             setPageComponents(items_filter);
//         }
//     },[confirmedDelete])


//     useEffect(()=>{
//         if(pageComponents.length > 0){ 
//             returnNewPageContent(pageComponents);
//         }else{
//             returnNewPageContent(null);
//         }
//     }, [pageComponents]);

//     useEffect(()=>{
//         if(editData){
//             var __initial_components: any = [];
//             editData?.components.map((__ck: any, index: number)=>{
//                 __initial_components.push({
//                     _id:__ck._id,
//                     id: randomNumberInRange(1,10000),
//                     // id: pageComponents.length, 
//                     name: __ck.component_name, 
//                     key:__ck.component_key,
//                     sortNumber: __ck.sort_number
//                 });
//             });
//             __initial_components.sort((a: any, b: any) => (a.sortNumber > b.sortNumber) ? 1 : -1)
//             setPageComponents(__initial_components);
//             // console.log(__initial_components);
//         }
//     }, [editData]);


//     return (
//         <>
//             <MagmabyteForm
//                 onSubmit={formik.handleSubmit}
//             >
//                 <CustomInput
//                     type='text' 
//                     id="page_title"
//                     name="page_title"
//                     labelText='Page title' 
//                     placeholder='Enter page title'
//                     className='login-input'
//                     value={formik.values.page_title}
//                     handleChange={formik.handleChange}
//                     error={formik.touched.page_title && formik.errors.page_title}
//                     defaultValue={editData && editData.page_title}
//                 />

//                 <label className={'input-label '} style={{marginBottom:'5px'}}>Components</label>
//                 <AddedComponents>
//                     <div style={{display:'flex', width:'100%'}}>
//                         <Container>
//                             <DragDropContext 
//                                 onDragEnd={onDragEnd}
//                                 onDragStart={onDragStart}
//                             >
//                                 <Droppable 
//                                     droppableId="componets" 
//                                     direction="vertical"
//                                     isCombineEnabled={false}
//                                     ignoreContainerClipping={true}
//                                 >
//                                     {(provided) => (
//                                         <div className="componets" 
//                                             {...provided.droppableProps} 
//                                             ref={provided.innerRef}
//                                             style={{width:'99.6%'}}
//                                         >
//                                             {pageComponents.map((component, index) => {
//                                                 return (
//                                                     <Draggable 
//                                                         key={component.id.toString()} 
//                                                         draggableId={component.id.toString()} 
//                                                         index={index}
//                                                     >
//                                                         {(provided, snapshot) => (
//                                                             <div
//                                                                 ref={provided.innerRef}
//                                                                 {...provided.draggableProps}
//                                                                 {...provided.dragHandleProps}
//                                                                 // style={{display:'flex', width:'100%'}}
//                                                                 // style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
//                                                             >
//                                                                 <ComponentItemsHeader
//                                                                     key={component.id}
//                                                                     componentName={component.name + component.sortNumber}
//                                                                     component={component}
//                                                                     onOpenDeleteComponent={setOpenDeleteComponentModal}
//                                                                     setComponentForDeleting={setComponentForDeleting}
//                                                                     editData={editData}
//                                                                 />
//                                                             </div>
//                                                         )}
//                                                     </Draggable>
//                                                 )
//                                             })}
//                                             {provided.placeholder}
//                                         </div>
//                                     )}
//                                 </Droppable>
//                             </DragDropContext>
    
//                             <AddComponents 
//                                 onClick={(e) => {
//                                     setOpenModal(true);
//                                 }}
//                                 style={{width:'99.6%'}}
//                             >
//                                 <IoAddCircleSharp
//                                     size={45}
//                                     color='#03a9f4'
//                                 />
//                                 <AddComponentText>Add component</AddComponentText>
//                             </AddComponents> 
//                         </Container>
//                     </div>
//                 </AddedComponents>
//             </MagmabyteForm>
             
//             <DefaultModal 
//                 open={openModal}
//                 onCloseModal={setOpenModal}
//                 headerText='Page components'
//                 setChoosedComponent={_setChoosedComponent}
//             />

//             <DeleteComponentModal
//                 open={openDeleteComponentModal}
//                 onCloseModal={setOpenDeleteComponentModal}
//                 headerText='Delete component'
//                 deleteText='Are you sure you want to delete component?'
//                 setConfirmedDelete={setConfirmedDelete}
//                 componetForDeleting={componentForDeleting}
//             />
//         </>
//     );
// }





import React, { MouseEvent, ReactElement, SetStateAction, useEffect } from 'react';
import { ChangeEvent, useState } from 'react';
import CustomInput from '../../atoms/Inputs/CustomInput';
import { AddComponents, AddComponentText, AddedComponents, Container, DragDropFeild } from './styles';

import {IoAddCircleSharp} from 'react-icons/io5';
import InputWithMoreDetails from '../../atoms/Inputs/InputWithMoreDetails';
import CustomTextArea from '../../atoms/Textareas/CustomeTextArea';
import EditButton from '../../atoms/Buttons/EditButton';

import {FiChevronDown} from "react-icons/fi";
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import ComponentItemsHeader from '../../atoms/ComponentItemsHeader/ComponentWithHeader';
import DefaultModal from '../modals/DefaultModal';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { ComponetWithItemsHeader } from '../../atoms/ComponentItemsHeader/styles';
import DeleteComponentModal from '../modals/DeleteComponentModal';
import MagmabyteForm from '../../atoms/Forms/MagmabyteForm';
import InputWithMoreDetails2 from '../../atoms/Inputs/InputWithMoreDetails2';


interface IPageBuilderProps {
    className?: string;
    headerTitle?: string;
    returnNewPageContent: Dispatch<SetStateAction<any>>;
    formik: any;
    editData?: any;
}

interface Provider { 
    component: string;
}

type Component = {
    _id?: string;
    id: number;
    name: string;
    key?: string;
    sortNumber?: number;
};

type Dispatch<A> = (value: A) => void;
 
const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
	padding: 10,
	margin: `0 50px 15px 50px`,
	background: isDragging ? "#4a2975" : "white",
	color: isDragging ? "white" : "black",
	border: `1px solid black`,
	fontSize: `20px`,
	borderRadius: `5px`,

	...draggableStyle
})

export default function PageBuilder(props: IPageBuilderProps) {
    const {
        returnNewPageContent,
        formik,
        editData
    } = props;

    // delete component states
    const [componentForDeleting, setComponentForDeleting] = useState<any>([]);
    const [openDeleteComponentModal, setOpenDeleteComponentModal] = useState(false);
    const [confirmedDelete, setConfirmedDelete] = useState(false);
    // add component states
    const [openModal, setOpenModal] = useState(false);
    const [choosedComponent, _setChoosedComponent] = useState<any>([]);

    // components states
    const [pageComponents, setPageComponents] = useState<Component[]>([]);
    
    function randomNumberInRange(min:number, max:number) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    useEffect(()=>{
        if(choosedComponent!=''){
            setPageComponents(prev => [
                ...prev,
                {
                    id: randomNumberInRange(1,10000),  
                    // id: pageComponents.length, 
                    name: choosedComponent.name, 
                    key:choosedComponent.key,
                    sortNumber: pageComponents.length
                },
              ]);
            _setChoosedComponent('');
        }
    }, [choosedComponent]);
 

	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result
		if (!destination) return

		const items = Array.from(pageComponents)
		const [ newOrder ] = items.splice(source.index, 1)
		items.splice(destination.index, 0, newOrder) 
        items.map((im, index) => (
            im.sortNumber = index
        ));
		setPageComponents(items)
	}
 

	const onDragStart = (result: DropResult) => {
	}

    useEffect(()=>{
        if(confirmedDelete!==false){
            setComponentForDeleting(null);
            setConfirmedDelete(false);
            var items_filter = pageComponents.filter(c => c.id !== componentForDeleting.id);
            items_filter.map((im, index) => (
                im.sortNumber = index
            ));
            setPageComponents(items_filter);
        }
    },[confirmedDelete])


    useEffect(()=>{
        if(pageComponents.length > 0){ 
            returnNewPageContent(pageComponents);
        }else{
            returnNewPageContent(null);
        }
    }, [pageComponents]);

    useEffect(()=>{
        if(editData){
            var __initial_components: any = [];
            editData?.components.map((__ck: any, index: number)=>{
                __initial_components.push({
                    _id:__ck._id,
                    id: randomNumberInRange(1,10000),
                    // id: pageComponents.length, 
                    name: __ck.component_name, 
                    key:__ck.component_key,
                    sortNumber: __ck.sort_number
                });
            });
            __initial_components.sort((a: any, b: any) => (a.sortNumber > b.sortNumber) ? 1 : -1)
            setPageComponents(__initial_components);
            // console.log(__initial_components);
        }
    }, [editData]);


    return (
        <>
                <InputWithMoreDetails2
                    name="page_title"
                    labelText="Page title"
                    placeholder='Enter page title'
                    className='edit-input'
                    type='text'
                />
                {/* <CustomInput
                    type='text' 
                    id="page_title"
                    name="page_title"
                    labelText='Page title' 
                    placeholder='Enter page title'
                    className='login-input'
                    value={formik.values.page_title}
                    handleChange={formik.handleChange}
                    error={formik.touched.page_title && formik.errors.page_title}
                    defaultValue={editData && editData.page_title}
                /> */}

                <label className={'input-label '} style={{marginBottom:'5px'}}>Components</label>
                <AddedComponents>
                    <div style={{display:'flex', width:'100%'}}>
                        <Container>
                            <DragDropContext 
                                onDragEnd={onDragEnd}
                                onDragStart={onDragStart}
                            >
                                <Droppable 
                                    droppableId="componets" 
                                    direction="vertical"
                                    isCombineEnabled={false}
                                    ignoreContainerClipping={true}
                                >
                                    {(provided) => (
                                        <div className="componets" 
                                            {...provided.droppableProps} 
                                            ref={provided.innerRef}
                                            style={{width:'99.6%'}}
                                        >
                                            {pageComponents.map((component, index) => {
                                                return (
                                                    <Draggable 
                                                        key={component.id.toString()} 
                                                        draggableId={component.id.toString()} 
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                // style={{display:'flex', width:'100%'}}
                                                                // style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                                            >
                                                                <ComponentItemsHeader
                                                                    key={component.id}
                                                                    componentName={component.name + component.sortNumber}
                                                                    component={component}
                                                                    onOpenDeleteComponent={setOpenDeleteComponentModal}
                                                                    setComponentForDeleting={setComponentForDeleting}
                                                                    editData={editData}
                                                                />
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                )
                                            })}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>
    
                            <AddComponents 
                                onClick={(e) => {
                                    setOpenModal(true);
                                }}
                                style={{width:'99.6%'}}
                            >
                                <IoAddCircleSharp
                                    size={45}
                                    color='#03a9f4'
                                />
                                <AddComponentText>Add component</AddComponentText>
                            </AddComponents> 
                        </Container>
                    </div>
                </AddedComponents>
             
            <DefaultModal 
                open={openModal}
                onCloseModal={setOpenModal}
                headerText='Page components'
                setChoosedComponent={_setChoosedComponent}
            />

            <DeleteComponentModal
                open={openDeleteComponentModal}
                onCloseModal={setOpenDeleteComponentModal}
                headerText='Delete component'
                deleteText='Are you sure you want to delete component?'
                setConfirmedDelete={setConfirmedDelete}
                componetForDeleting={componentForDeleting}
            />
        </>
    );
}


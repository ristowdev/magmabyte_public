import React, { MouseEvent, ReactElement, SetStateAction } from 'react';
import { ChangeEvent, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import EditButton from '../Buttons/EditButton';
import InputWithMoreDetails from '../Inputs/InputWithMoreDetails';
import CustomTextArea from '../Textareas/CustomeTextArea';
import { Actions, ComponentWithItmes, ComponetWithItemsHeader, Container, CWIHBox, CWIHText, DeleteActionButton } from './styles';
import {RiDeleteBin5Line} from "react-icons/ri";
import DeleteComponentModal from '../../organisam/modals/DeleteComponentModal';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import {AiOutlineEye} from "react-icons/ai";
import {  useNavigate } from 'react-router-dom';

interface IComponentItemsHeaderProps {
    className?: string;
    headerTitle?: string;
    children?: ReactElement;
    componentName?: string;
    component?: any;
    onOpenDeleteComponent: 
        (active: boolean, reason?: 'deleteComponent') 
    => void;
    setComponentForDeleting: Dispatch<SetStateAction<any>>;
    editData?: any;
}

type Dispatch<A> = (value: A) => void;

type Component = {
    id: number;
    name: string;
    key?: string;
    sortNumber?: number;
};  

export default function ComponentItemsHeader(props: IComponentItemsHeaderProps) {
    const {
        className,
        headerTitle,
        children,
        componentName,
        component,
        onOpenDeleteComponent,
        setComponentForDeleting,
        editData
    } = props;
    const [pageComponents, setPageComponents] = useState<Component[]>([

        {
            id: randomNumberInRange(1,10000),  
            // id: pageComponents.length, 
            name: 'hi', 
            key:'hi',
            sortNumber: 0
        },{
            id: randomNumberInRange(1,10000),  
            // id: pageComponents.length, 
            name: 'hi', 
            key:'hi',
            sortNumber: 0
        },
    ]);


    function randomNumberInRange(min:number, max:number) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [toggleItem, setToggleItem] = useState(false);
    
    const handleDeleteItem = (e: any, component:any) => {
        e.stopPropagation();
        onOpenDeleteComponent(true);
        setComponentForDeleting(component)
    }

    const navigate = useNavigate();

	const onDragEnd = (result: DropResult) => {
		 
	}
    return (
        <ComponentWithItmes
            className={`
                ${toggleItem == true ? `f43d-xb34-i12` : ``}
            `}
        >
            <div style={{display:'flex'}}>
                
                {editData ? (<>
                    <ComponetWithItemsHeader className={`
                            ${toggleItem == false ? `` : `kf432-df-sdv34`}
                        `} onClick={(e)=>{
                            navigate(`/page/${editData._id}/component/${component._id}`);
                        }}>
                    <CWIHBox>
                        <CWIHText>{componentName}</CWIHText>
                        <AiOutlineQuestionCircle
                            size={17} 
                            style={{
                                // marginTop:'-5px',
                                marginLeft:'10px'
                            }}
                            color="#9a9a9a"
                            
                        />
                    </CWIHBox> 
                    <Actions>
                        {/* <FiChevronDown 
                            size={18}
                            className={`
                                ${toggleItem == true ? `rotate-down-icon-d34` : ``}
                            `}
                        /> */}
                        <AiOutlineEye 
                            size={18}
                        />
                        <DeleteActionButton onClick={(e)=>{handleDeleteItem(e, component)}}>
                            <RiDeleteBin5Line 
                                size={16}
                                color='#ff2d2d'
                            />
                        </DeleteActionButton>
                        
                    </Actions>

                </ComponetWithItemsHeader>
                
                
                </>) : (<>
                
                    <ComponetWithItemsHeader className={`
                            ${toggleItem == false ? `` : `kf432-df-sdv34`}
                        `} onClick={(e)=>{
                            // navigate("/page/home/component/55458295902539530342/")

                        }}>
                    <CWIHBox>
                        <CWIHText>{componentName}</CWIHText>
                        <AiOutlineQuestionCircle
                            size={17} 
                            style={{
                                // marginTop:'-5px',
                                marginLeft:'10px'
                            }}
                            color="#9a9a9a"
                            
                        />
                    </CWIHBox> 
                    <Actions>
                        {/* <FiChevronDown 
                            size={18}
                            className={`
                                ${toggleItem == true ? `rotate-down-icon-d34` : ``}
                            `}
                        /> */}
                        {/* <AiOutlineEye 
                            size={18}
                        /> */}
                        <DeleteActionButton onClick={(e)=>{handleDeleteItem(e, component)}}>
                            <RiDeleteBin5Line 
                                size={16}
                                color='#ff2d2d'
                            />
                        </DeleteActionButton>
                        
                    </Actions>

                </ComponetWithItemsHeader>
                </>)}
                
                
            </div>
            <div style={{display:'flex'}}
            >

                {/* <Container
                    className={`
                        ${toggleItem == true ? `open-item-details-430430xd` : `s4dkfew343212-3closed`}
                    `}
                >
                
                    
                    <div className='ddf0f-f'
                        onDragStart={(e)=>{
                        e.stopPropagation();

                        }}   
                    >
                 
                    <DragDropContext 
                        onDragEnd={onDragEnd}
                    >
                    <Droppable 
                        droppableId="componets" 
                        direction="vertical"
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
                                                    
                        <div className='f-ps-da'>
                            <div className='f-ps-da-d'>
                                <InputWithMoreDetails
                                    labelText="Text"
                                    placeholder='Analysis'
                                    className='edit-input'
                                />
                                <label className={'input-label '}  style={{marginBottom:'5px'}}>
                                    Description
                                </label>
                                <CustomTextArea 
                                    className='text-area-edit'
                                    placeholder="We begin by analysing the project and diving into the requirements as well as the current implementation of the Software development lifecycle on the project."
                                />
                            </div>
                            <div className='d-ds-dsa'>
                                <div className='dd2ld-dd'>
                                    <span>X</span>
                                </div>
                            </div>  
                        </div>
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

                        <EditButton 
                            className='add-item-section'
                            label='Add item'
                        />
                    </div>
                </Container> */}
            </div> 
        </ComponentWithItmes>
    );
}

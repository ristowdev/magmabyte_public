import React from 'react';
import LinkButton from '../../atoms/Buttons/LinkButton';

import PageContent from '../../atoms/Contents/PageContent';
import { InsideLocalTable, LocalTableHeader, LocalTableHeaderItem, LocalTableHeaderText, LocalTableMain, LocalTableMainItem, LocalTableMainText, SomeTable } from './style';


function HomeEdit() {
    return (
       <> 
            <PageContent 
                headerTitle='Home landing page'
            >
                <SomeTable>
                    <InsideLocalTable>
                        <LocalTableHeader>
                            <LocalTableHeaderItem>
                                <LocalTableHeaderText>Section</LocalTableHeaderText>
                            </LocalTableHeaderItem>
                            <LocalTableHeaderItem>
                                <LocalTableHeaderText>Actions</LocalTableHeaderText>
                            </LocalTableHeaderItem>
                        </LocalTableHeader>

                        <LocalTableMain>
                            <LocalTableMainItem>
                                <LocalTableMainText>Header</LocalTableMainText>
                            </LocalTableMainItem>
                            <LocalTableMainItem>
                                <LinkButton 
                                    linkTo='/pages/edit/section/0' 
                                    buttonText='Edit'
                                    className='edit-button'
                                    buttonStyle='edit-button-style'
                                />
                            </LocalTableMainItem>
                        </LocalTableMain>

                        <LocalTableMain>

                            <LocalTableMainItem>
                                <LocalTableMainText>Section 1</LocalTableMainText>
                            </LocalTableMainItem>
                            <LocalTableMainItem>
                                <LinkButton 
                                    linkTo='/pages/edit/section/1' 
                                    buttonText='Edit'
                                    className='edit-button'
                                    buttonStyle='edit-button-style'
                                />
                            </LocalTableMainItem>
                        </LocalTableMain>

                        <LocalTableMain>
                            <LocalTableMainItem>
                                <LocalTableMainText>Section 2</LocalTableMainText>
                            </LocalTableMainItem>
                            <LocalTableMainItem>
                                <LinkButton 
                                    linkTo='/pages/edit/section/2' 
                                    buttonText='Edit'
                                    className='edit-button'
                                    buttonStyle='edit-button-style'
                                />
                            </LocalTableMainItem>
                        </LocalTableMain>


                        <LocalTableMain>
                            <LocalTableMainItem>
                                <LocalTableMainText>Section 3</LocalTableMainText>
                            </LocalTableMainItem>
                            <LocalTableMainItem>
                                <LinkButton 
                                    linkTo='/pages/edit/section/3' 
                                    buttonText='Edit'
                                    className='edit-button'
                                    buttonStyle='edit-button-style'
                                />
                            </LocalTableMainItem>
                        </LocalTableMain>

                        <LocalTableMain>
                            <LocalTableMainItem>
                                <LocalTableMainText>Section 4</LocalTableMainText>
                            </LocalTableMainItem>
                            <LocalTableMainItem>
                                <LinkButton 
                                    linkTo='/pages/edit/section/4' 
                                    buttonText='Edit'
                                    className='edit-button'
                                    buttonStyle='edit-button-style'
                                />
                            </LocalTableMainItem>
                        </LocalTableMain>

                        <LocalTableMain>
                            <LocalTableMainItem>
                                <LocalTableMainText>Section 5</LocalTableMainText>
                            </LocalTableMainItem>
                            <LocalTableMainItem>
                                <LinkButton 
                                    linkTo='/pages/edit/section/5' 
                                    buttonText='Edit'
                                    className='edit-button'
                                    buttonStyle='edit-button-style'
                                />
                            </LocalTableMainItem>
                        </LocalTableMain>

                        <LocalTableMain>
                            <LocalTableMainItem>
                                <LocalTableMainText>Section 6</LocalTableMainText>
                            </LocalTableMainItem>
                            <LocalTableMainItem>
                                <LinkButton 
                                    linkTo='/pages/edit/section/6' 
                                    buttonText='Edit'
                                    className='edit-button'
                                    buttonStyle='edit-button-style'
                                />
                            </LocalTableMainItem>
                        </LocalTableMain>

                        <LocalTableMain>
                            <LocalTableMainItem>
                                <LocalTableMainText>Footer</LocalTableMainText>
                            </LocalTableMainItem>
                            <LocalTableMainItem>
                                <LinkButton 
                                    linkTo='/pages/edit/section/7' 
                                    buttonText='Edit'
                                    className='edit-button'
                                    buttonStyle='edit-button-style'
                                />
                            </LocalTableMainItem>
                        </LocalTableMain>
 
                    </InsideLocalTable>
                </SomeTable>
            </PageContent>

       </>
    );
  }
  
  export default HomeEdit;
  
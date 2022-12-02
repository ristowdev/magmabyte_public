import React, { MouseEvent, ReactElement } from 'react';

import { ChangeEvent, useState } from 'react';
import { Container, Content, Element, Header, InsideContent, Wrapper } from './style';


interface IPageContentProps {
    className?: string;
    headerTitle?: string;
    children?: ReactElement;

}

export default function PageContent(props: IPageContentProps) {
    const {
        className,
        headerTitle,
        children,
    } = props;
    
    return (
        <Content className={className}>
            <Container>
                <Wrapper>
                    <InsideContent>

                        <Header>
                            {headerTitle}
                        </Header>

                        <Element>
                            {children}
                        </Element>

                    </InsideContent>
                </Wrapper>
            </Container>
        </Content>
    );
}

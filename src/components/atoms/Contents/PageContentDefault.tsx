import React, { MouseEvent, ReactElement } from 'react';

import { ChangeEvent, useState } from 'react';
import { Container, Content, Element, Header, InsideContent, Wrapper } from './style';


interface IPageContentDefaultProps {
    className?: string;
    headerTitle?: string;
    children?: ReactElement;

}

export default function PageContentDefault(props: IPageContentDefaultProps) {
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

                        <div>
                            {children}
                        </div>

                    </InsideContent>
                </Wrapper>
            </Container>
        </Content>
    );
}

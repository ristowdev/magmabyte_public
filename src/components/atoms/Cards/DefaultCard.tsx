import React, { MouseEvent } from 'react';

import { ChangeEvent, useState } from 'react';
import { Card } from './styles';


interface IDefaultCardProps {
    className?: string;
}

export default function DefaultCard(props: IDefaultCardProps) {
    const {
        className,
    } = props;
    
    return (
        <Card className={className}>

        </Card>
    );
}

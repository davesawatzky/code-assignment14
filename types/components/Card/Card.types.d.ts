import { ReactNode } from 'react';
export interface CardProps {
    id?: string;
    cardText?: string;
    cardHeadingText?: string;
    cardSubText?: string;
    error?: boolean;
    disabled?: boolean;
    children?: ReactNode;
}

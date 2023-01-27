import { ReactNode } from 'react';
export interface TableProps {
    tableData?: (string | number)[][];
    tableHeaderData?: {
        name: string;
        columnSpan: number;
    }[];
    tableFooterData?: {
        name: string;
        columnSpan: number;
    }[];
    tableFooterColor?: string;
    tableHeaderColor?: string;
    tableColor?: string;
    error?: boolean;
    disabled?: boolean;
    children?: ReactNode;
}

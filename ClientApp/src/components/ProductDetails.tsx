import React from "react";
import { Route, RouteComponentProps } from 'react-router';


export type ProductDetailsProps = RouteComponentProps<{id: string}>;

export const ProductDetails = (props: ProductDetailsProps) => {
    
    const { id } = props.match.params;

    return (
        <React.Fragment>
            <div>
                {id}
            </div>
        </React.Fragment>
    );
}
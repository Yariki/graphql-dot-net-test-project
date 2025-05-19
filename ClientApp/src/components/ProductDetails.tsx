import { gql, useQuery } from "@apollo/client";
import { Label, Stack, Text } from "@fluentui/react";
import React from "react";
import { Route, RouteComponentProps } from 'react-router';
import { ProductEdit, ProductEditState } from "./ProductEdit";

export type ProductDetailsProps = RouteComponentProps<{ id: string }>;

const EDIT_PRODUCT = gql(`
query GetProduct($id: Int!) {
    product(id: $id){
        name,
        price,
        stock,
        isActive,
        id,
        catalogId,
        catalog {
            name
        }
    }
}
`);


export const ProductDetails = (props: ProductDetailsProps) => {

    const { id } = props.match.params;

    const { data, loading, error } = useQuery(EDIT_PRODUCT, { variables: { id: Number(id) } }); 

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    const product = data?.product;

    if (!product) {
        return <p>Product not found.</p>
    }

    return (
        <Stack tokens={{ childrenGap: 16, padding: 24 }} styles={{ root: { maxWidth: 400, margin: '0 auto', background: '#fff', borderRadius: 4, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' } }}>
            <Label as="h2" styles={{ root: { fontSize: 24, fontWeight: 600 } }}>{product.name}</Label>
            <Stack tokens={{ childrenGap: 8 }}>
                <Stack horizontal tokens={{ childrenGap: 8 }}>
                    <Label>ID:</Label>
                    <Text>{product.id}</Text>
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 8 }}>
                    <Label>Catalog ID:</Label>
                    <Text>{product.catalog?.name}</Text>
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 8 }}>
                    <Label>Price:</Label>
                    <Text>${product.price}</Text>
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 8 }}>
                    <Label>Stock:</Label>
                    <Text>{product.stock}</Text>
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 8 }}>
                    <Label>Status:</Label>
                    <Text>{product.isActive ? "Active" : "Inactive"}</Text>
                </Stack>
            </Stack>
            <ProductEdit state={ProductEditState.Edit} id={product.id}  product={product} /> 
        </Stack>
    );
}
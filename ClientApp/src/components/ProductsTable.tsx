import React from "react";
import { Table, TableHeader, TableHeaderCell, TableRow, TableCellLayout, PresenceBadgeStatus, Avatar, TableBody, TableCell } from "@fluentui/react-components";
import {gql, useQuery} from "@apollo/client";

const GET_PRODUCTS = gql(`query getProducts($catalogId: Int) {
    products(where : {catalogId: {eq: $catalogId}}) {
        nodes {
            id
            name
            price
            description
            catalogId
        }
    }
}`);

export interface ProductsTableProps {
    catalogId: string;
}


export const ProductsTable: React.FC<ProductsTableProps> = ({ catalogId }) => {

    catalogId = !catalogId || catalogId !== "" ? catalogId : "-1";

    const { data, loading, error } = useQuery(GET_PRODUCTS, {
        variables: { catalogId },
        fetchPolicy: 'network-only',
    });

    console.log("Error: " + error);

    return (
        <>
            <Table aria-label="Example table with custom cells" style={{ width: "100%" }}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Product</TableHeaderCell>
                        <TableHeaderCell>Price</TableHeaderCell>
                        <TableHeaderCell>Description</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                {loading && <p>Loading...</p>}
                {error && <p>Error</p>}
                {!catalogId && <p>Please select a catalog</p>}
                
                <TableBody>
                    {data?.products?.nodes?.map((product: any) => (
                        <TableRow key={product.id}>
                            <TableCell>
                                <TableCellLayout
                                    media={<Avatar name={product.name} shape="square" size={40} style={{ width: '100px' }} />}
                                    content={product.name}
                                    description={product.description}
                                />
                            </TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </>
    );
} 
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

const GET_PRODUCTS_COUNT = gql(`query getProducts($catalogId: Int, $stock: Int = 0){
    products (where: {catalogId: {eq: $catalogId}, stock: {gte: $stock}}){
        nodes{
            id
            name
            price
            catalogId
     		stock
        }
	}
}`);

export interface ProductsTableProps {
    catalogId: string;
    count?: number;
}


export const ProductsTable: React.FC<ProductsTableProps> = ({ catalogId, count }) => {

    catalogId = !catalogId || catalogId !== "" ? catalogId : "-1";
    const stock = count ? count : 0;

    const { data, loading, error } = useQuery(GET_PRODUCTS_COUNT, {
        variables: { catalogId, stock },
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
                {catalogId && error && <p>Error</p>}
                {!catalogId && <p>Please select a catalog</p>}
                {
                    data && data.products && data.products.nodes && data.products.nodes.length > 0 && (
                        <TableBody>
                        { 
                            data.products?.nodes?.map((product: any) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    {product.name}
                                </TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                        
                    )

                }
                

            </Table>
        </>
    );
} 
import React from "react";
import { Table, TableHeader, TableHeaderCell, TableRow, TableCellLayout, PresenceBadgeStatus, Avatar } from "@fluentui/react-components";
import {gql, useQuery} from "@apollo/client";

const GET_PRODUCTS = gql(`query getProducts($catalogId: ID!) {
    products(catalogId: $catalogId) {
        nodes {
            id
            name
            price
            descrioption
            catalogId
        }
    }
}`);

export interface ProductsTableProps {
    catalogId: string | undefined;
}


export const ProductsTable: React.FC<ProductsTableProps> = ({ catalogId }) => {
    
    const { data, loading, error } = useQuery(GET_PRODUCTS, {
        variables: { catalogId },
        fetchPolicy: 'network-only',
    });



    return (
        <>
            <Table aria-label="Example table with custom cells" style={{ width: "100%" }}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Product</TableHeaderCell>
                        <TableHeaderCell>Price</TableHeaderCell>
                        <TableHeaderCell>desclription</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                {loading && <p>Loading...</p>}
                {error && <p>Error</p>}
                

            </Table>
        </>
    );
} 
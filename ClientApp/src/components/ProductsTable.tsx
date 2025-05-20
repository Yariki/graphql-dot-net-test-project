import React from "react";
import { Table, TableHeader, TableHeaderCell, TableRow, TableCellLayout, PresenceBadgeStatus, Avatar, TableBody, TableCell, Button, Select, Label } from "@fluentui/react-components";
import {gql, useQuery} from "@apollo/client";
import { NavItem } from "reactstrap";
import { Link, NavLink } from "react-router-dom";


interface Product {
    id: number,
    name: string,
    price: number,
    description: string,
    catalogId: number
  }
  
  interface ProductsData {
    products: {
      edges: {
        node: Product;
        cursor: string;
      }[];
      pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string;
        endCursor: string;
      };
    };
  }
  
  interface ProductsVars {
    catalogId: number;
    stock: number;
    first?: number;
    after?: string;
    last?: number;
    before?: string;
  }

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

const GET_PRODUCTS_COUNT = gql(`query getProducts($catalogId: Int, $stock: Int = 0, $first: Int, $after: String, $last: Int, $before: String) {
  products(
    where: { catalogId: { eq: $catalogId }, stock: { gte: $stock } }
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    edges {
      cursor
      node {
        id
        name
        price
        catalogId
        stock
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount
  }
}

`);

interface PageInfo {
    pageSize: number;
    after?: string;
    before?: string;
}

export interface ProductsTableProps {
    catalogId: string;
    count?: number;
}


export const ProductsTable: React.FC<ProductsTableProps> = ({ catalogId, count }) => {



    catalogId = !catalogId || catalogId !== "" ? catalogId : "-1";
    const stock = count ? count : 0;

    const [internalPageInfo, setPageInfo] = React.useState<PageInfo>({
        pageSize: 10,
        after: undefined,
        before: undefined
    });
  
    const variables: ProductsVars = internalPageInfo.before
      ? {catalogId: parseInt(catalogId), stock, last: internalPageInfo.pageSize, before: internalPageInfo.before }
      : {catalogId: parseInt(catalogId), stock, first: internalPageInfo.pageSize, after: internalPageInfo.after };


      
    const { data, loading, error } = useQuery<ProductsData, ProductsVars>(GET_PRODUCTS_COUNT, {
        variables,
        fetchPolicy: 'network-only',
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  

    const { edges, pageInfo } = data!.products;
    const items = edges.map(edge => edge.node);
  
    const handleNext = () => {
      if (pageInfo.hasNextPage) {
        setPageInfo({...internalPageInfo, after: pageInfo.endCursor});
      }
    };
  
    const handlePrev = () => {
      if (pageInfo.hasPreviousPage) {
        setPageInfo({...internalPageInfo, before: pageInfo.startCursor});
      }
    };
  
    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPageInfo({...internalPageInfo, pageSize: parseInt(e.target.value), after: undefined, before: undefined});
    };

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
                    items && items.length> 0 && (
                        <TableBody>
                        { 
                            items.map((product: Product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <NavLink tag={Link} 
                                    className="text-dark" 
                                    
                                    to={`/product/${product.id}`} 
                                    rel="noopener noreferrer">
                                        {product.name}        
                                    </NavLink>
                                </TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                        
                    )

                }
            </Table>

            <div style={{ marginTop: '1rem' }}>
                <Button onClick={handlePrev} disabled={!pageInfo.hasPreviousPage}>
                Previous
                </Button>
                <Button onClick={handleNext} disabled={!pageInfo.hasNextPage} style={{ marginLeft: '1rem' }}>
                Next
                </Button>

                <Label style={{ marginLeft: '1rem' }}>
                Page Size:
                <Select value={internalPageInfo.pageSize} onChange={handlePageSizeChange} style={{ marginLeft: '0.5rem' }}>
                    {[5, 10, 20, 50].map(size => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                    ))}
                </Select>
                </Label>
            </div>
        </>
    );
} 
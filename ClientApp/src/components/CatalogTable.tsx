import React from "react";
import { useGetCatalogsQuery } from "../gql/generated/graphql";
import { Table, TableCell, TableBody, TableHeader, TableHeaderCell, TableRow } from "@fluentui/react-components";

export const CatalogTable = () => {

    const {data, loading, error} = useGetCatalogsQuery({
        pollInterval: 3000
    });

    return (
        <>
        <div>
            <Table aria-label="Example table with custom cells" style={{ width: "100%" }}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Description</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                {loading && <p>Loading...</p>}
                {error && <p>Error</p>}
                { data && data.catalogs && data.catalogs.nodes && data.catalogs.nodes.length > 0 && (
                <TableBody>
                    { 
                        data.catalogs?.nodes?.map((catalog: any) => (
                            <TableRow key={catalog.id}>
                                <TableCell>
                                    {catalog.name}
                                </TableCell>
                                
                                <TableCell>{catalog.description}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>)}
            </Table>
        </div>
        </>
    );
};

import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { useGetCatalogsQuery } from '../gql/generated/graphql'
import { Select, Label, Combobox, Option  } from '@fluentui/react-components';
import type { OptionOnSelectData, SelectionEvents, SelectProps } from "@fluentui/react-components";

import { ProductsTable } from './ProductsTable';

import {
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCellLayout,
    PresenceBadgeStatus,
    Avatar,
} from "@fluentui/react-components";
import { on } from 'process';
import { gql, useQuery } from '@apollo/client';

export const  Products : React.FC = () => {
    const { data, loading, error } = useGetCatalogsQuery();
    const [value, setValue] = React.useState<string | undefined>(undefined);
    const [idValue, setIdValue] = React.useState<string | undefined>(undefined);
    const [products, setProducts] = React.useState<any[]>([]);
    const [loadingProducts, setLoadingProducts] = React.useState<boolean>(false);
    const [errorProducts, setErrorProducts] = React.useState<string | undefined>(undefined);
    

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error || !data) {
        return <p>Error</p>;
    }

    const onOptionSelect = (event: SelectionEvents, optionData: OptionOnSelectData) => {
        setValue(optionData.optionText);
        setIdValue(optionData.optionValue);

        const fetchProducts = async () => {
            const { data, loading, error } = useQuery(
                GET_PRODUCTS,
                {
                    variables: { catalogId: optionData.optionValue },
                    fetchPolicy: 'network-only',
                }
            );
            setLoadingProducts(loading);
            setErrorProducts(error?.message);
            setProducts(data?.products?.nodes || []);
        }

        fetchProducts();

    };

    return (
        <React.Fragment>
            <div>
                <Label htmlFor='catalogs-select'>Catalogs</Label>
                <Combobox id='catalogs-select' onOptionSelect={onOptionSelect} value={value} defaultValue={undefined} placeholder="Select a catalog">
                    {
                        data.catalogs?.nodes?.map((catalog) => (
                            <Option key={catalog?.id} value={catalog?.id}>
                                {catalog?.name}
                            </Option>
                        ))
                    }
                </Combobox>
            </div>
            <ProductsTable catalogId={idValue} />
        </React.Fragment>
    );

}





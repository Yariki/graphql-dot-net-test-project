import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { useGetCatalogsQuery } from '../gql/generated/graphql'
import { Select, Label, Combobox, Option  } from '@fluentui/react-components';
import type { OptionOnSelectData, SelectionEvents, SelectProps } from "@fluentui/react-components";

import { ProductsTable } from './ProductsTable';

interface CatalogValues {
    id: string | undefined;
    name: string | undefined;
}

export const  Products : React.FC = () => {
    const { data, loading, error } = useGetCatalogsQuery();
    const [value, setValue] = React.useState<CatalogValues>({ id: "", name: "" });

    

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error || !data) {
        return <p>Error</p>;
    }

    const onOptionSelect = (event: SelectionEvents, optionData: OptionOnSelectData) => {
        setValue({id: optionData.optionValue, name: optionData.optionText});
    };

    return (
        <React.Fragment>
            <div>
                <Label htmlFor='catalogs-select'>Catalogs</Label>
                <Combobox id='catalogs-select' onOptionSelect={onOptionSelect} value={value?.name} defaultValue={""} placeholder="Select a catalog">
                    {
                        data.catalogs?.nodes?.map((catalog) => (
                            <Option key={catalog?.id} value={catalog?.id}>
                                {catalog?.name}
                            </Option>
                        ))
                    }
                </Combobox>
            </div>
            <ProductsTable catalogId={value?.id} />
        </React.Fragment>
    );

}





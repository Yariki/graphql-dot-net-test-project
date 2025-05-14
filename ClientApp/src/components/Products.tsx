import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { useGetCatalogsQuery } from '../gql/generated/graphql'
import { Select, Label, Combobox, Option, Slider  } from '@fluentui/react-components';
import type { OptionOnSelectData, SelectionEvents, SelectProps, SliderOnChangeData } from "@fluentui/react-components";

import { ProductsTable } from './ProductsTable';

interface CatalogValues {
    id: string | undefined;
    name: string | undefined;
    count: number | undefined;
}

export const  Products : React.FC = () => {
    const { data, loading, error } = useGetCatalogsQuery();
    const [value, setValue] = React.useState<CatalogValues>({ id: "", name: "", count: 0 });

    const min = 0;
    const max = 100;
    

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error || !data) {
        return <p>Error</p>;
    }

    const onOptionSelect = (event: SelectionEvents, optionData: OptionOnSelectData) => {
        setValue({...value, id: optionData.optionValue, name: optionData.optionText});
    };

    const onSliderChange = (ev: React.ChangeEvent<HTMLInputElement>, data: SliderOnChangeData) => {
        console.log("Slider value: " + data.value);
        setValue({...value, count: data.value});
    }

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
            <div>
                <Label htmlFor='catalogs-slider'>Stock</Label>
                <Slider min={min} max={max} onChange={onSliderChange}/>
                <Label>{value.count}</Label>
            </div>
            <ProductsTable catalogId={value?.id} count={value?.count}/>
        </React.Fragment>
    );

}





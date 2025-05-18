import * as React from 'react';
import {Label, Slider, SliderOnChangeData} from '@fluentui/react-components';

import {ProductsTable} from './ProductsTable';
import {CatalogSelect} from './CatalogSelect';
import {ProductEdit, ProductEditState} from "./ProductEdit";

interface CatalogValues {
    id: string | undefined;
    count: number | undefined;
}

export const  Products : React.FC = () => {
    
    const [value, setValue] = React.useState<CatalogValues>({ id: "",  count: 0 });

    const min = 0;
    const max = 100;

    const onSliderChange = (ev: React.ChangeEvent<HTMLInputElement>, data: SliderOnChangeData) => {
        console.log("Slider value: " + data.value);
        setValue({...value, count: data.value});
    }

    return (
        <React.Fragment>
            <div>
                <CatalogSelect onChange={(catalogId: string) => {
                    setValue({...value, id: catalogId});
                }
                }/>
            </div>
            <div>
                <Label htmlFor='catalogs-slider'>Stock</Label>
                <Slider min={min} max={max} onChange={onSliderChange}/>
                <Label>{value.count}</Label>
            </div>
            <div>
                <ProductEdit state={ProductEditState.Add} />
            </div>
            <ProductsTable catalogId={value?.id} count={value?.count}/>
        </React.Fragment>
    );

}





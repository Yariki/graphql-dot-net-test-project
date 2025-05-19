    import { Combobox, Label, OptionOnSelectData, SelectionEvents ,Option} from "@fluentui/react-components";
import React, { useEffect } from "react";
import { useGetCatalogsQuery } from "../gql/generated/graphql";

export interface CatalogSelectProps {
    selectedCatalogId?: number;
    selectCatalogName?: string;
    onChange?: (catalogId: string) => void;
    name?: string;
    isRequired?: boolean;
}

export const CatalogSelect = (props: CatalogSelectProps) => {

    const {selectedCatalogId, selectCatalogName} = props;
    const initData = selectedCatalogId === null 
                    || selectedCatalogId === undefined 
                    ? { id: "", name: "" } 
                    : {id: selectedCatalogId.toString(), name: selectCatalogName === null || selectCatalogName === undefined ? "" : selectCatalogName?.toString()};

    const [value, setValue] = React.useState<{ id: string | undefined; name: string | undefined }>(initData);

    // useEffect(() => {
    //     const catalogId = props.selectedCatalogId;
    //     if (catalogId) {
    //         const catalogName = selectCatalogName === null || selectCatalogName === undefined ? "" : selectCatalogName;
    //         setValue({ id: catalogId.toString(), name: catalogName });
    //     }
    // },
    // []);

    const { data, loading, error } = useGetCatalogsQuery();

    const onOptionSelect = (event: SelectionEvents, optionData: OptionOnSelectData) => {
        setValue({...value, id: optionData.optionValue, name: optionData.optionText});
        if(props.onChange){
            props.onChange(optionData.optionValue);
        }
    };

    if (loading) return <div>Loading Catalogs...</div>;
    if (error) return <div>Error loading catalogs: {error.message}</div>;
    
    return (
        <div>
            <Label required={props.isRequired} htmlFor={props.name}>Catalogs</Label>
            <Combobox id='catalogs-select' required={props.isRequired} name={props.name} onOptionSelect={onOptionSelect} value={value?.name} defaultValue={value?.id} placeholder="Select a catalog">
                {
                    data.catalogs?.nodes?.map((catalog) => (
                        <Option key={catalog?.id} value={catalog?.id}>
                            {catalog?.name}
                        </Option>
                    ))
                }
            </Combobox>
        </div>
    );

}
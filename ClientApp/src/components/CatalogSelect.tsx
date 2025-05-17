    import { Combobox, Label, OptionOnSelectData, SelectionEvents ,Option} from "@fluentui/react-components";
import React, { useEffect } from "react";
import { useGetCatalogsQuery } from "../gql/generated/graphql";

export interface CatalogSelectProps {
    selectedCatalogId?: number;
    onChange?: (catalogId: string) => void;
}

export const CatalogSelect = (props: any) => {

    const [value, setValue] = React.useState<{ id: string | undefined; name: string | undefined }>({ id: "", name: "" });

    useEffect(() => {
        const catalogId = props.selectedCatalogId;
        if (catalogId) {
            setValue({ id: catalogId.toString(), name: "" });
        }
    },
    []);

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
            <Label htmlFor='catalogs-select'>Catalogs</Label>
            <Combobox id='catalogs-select' onOptionSelect={onOptionSelect} value={value?.name} defaultValue={value?.id} placeholder="Select a catalog">
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
import React, {ChangeEvent, useEffect} from "react";
import {gql, useMutation} from "@apollo/client";
import {
    Dialog,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger, Label, Input,
    makeStyles, Checkbox,
    DialogActions, CheckboxOnChangeData
} from "@fluentui/react-components";
import {AddCircleFilled} from "@fluentui/react-icons"
import {Button} from "reactstrap";
import {CatalogSelect} from "./CatalogSelect";

const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
    },
});

const ADD_PRODUCT = gql(`
    mutation AddProduct($input: ProductInput){
        addProduct(input: $input){
            id
        }
    }
`);

const EDIT_PRODUCT = gql(`
    mutation EditProduct($input: ProductUpdateInput){
        updateProduct(input: $input){
            id
        }
    }
`);

export enum ProductEditState {
    None,
    Add,
    Edit
};

export interface ProductData {
    name: string;
    price: number;
    description: string;
    catalogId: number;
    stock: number;
    image: string;
    isActive: boolean;
    [key: string]: any;
}

export interface ProductEditProps {
    state: ProductEditState;
    id?: number;
    product?:  ProductData
}

export const ProductEdit = (props: ProductEditProps) => {
    
    const styles = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const {product} = props;

    let initialProduct: ProductData =  product === null  || product === undefined ? {
        name: "",
        price: 0,
        description: "",
        catalogId: 0,
        stock: 0,
        image: "",
        isActive: false} : {
            name: product.name,
            price: product.price,
            description: product.description,
            catalogId: product.catalogId,
            stock: product.stock,
            image: product.image,
            isActive: product.isActive
        }
    if(props.state === ProductEditState.Edit){
        initialProduct["id"] = props.id;
    }
    
    const catalogName = product === undefined
                        || product === null 
                        || product?.catalog === null 
                        || product.catalog === undefined 
                        ?  ""
                        : product?.catalog?.name ;

    const [internalProduct, setProduct] = React.useState<ProductData>(initialProduct)
    
    const [addProduct, {loading, error}] = useMutation(ADD_PRODUCT);
    const [editProduct, {loading: editLoading, error: editError}] = useMutation(EDIT_PRODUCT);
    
    const onHandleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        
        try {
            if(props.state === ProductEditState.Add){
                await addProduct({variables: { input: internalProduct }});
            }else{
                await editProduct({variables: { input: internalProduct }});
            }
            setOpen(false);
        }catch (error) {
            console.log(error);
        }
        setProduct(initialProduct);
    };
    
    const onHandleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = ev.target;
        let newValue: string | number = value;

        if (name === "price" || name === "stock" || name === "catalogId") {
            newValue = Number(value);
        }
        
        setProduct({...internalProduct, [name]: newValue});
    };
    
    const onCheckboxChange =(ev: ChangeEvent<HTMLInputElement>, {checked}: CheckboxOnChangeData) => {
        setProduct({...internalProduct, isActive: checked as boolean});
    }
    
    const onCatalogChanged = (catalogId: string) => {
        setProduct({...internalProduct, catalogId: parseInt(catalogId)});
    }
    
    return (
        <>
            <div>
                <Dialog type="modal" open={open} onOpenChange={(e, data) => setOpen(data.open)}>
                    <DialogTrigger>
                        <Button type="button" appearance="primary" icon={<AddCircleFilled />}>{ props.state === ProductEditState.Add ?  "Add Product" : "Edit Poduct"}</Button>
                    </DialogTrigger>
                    <DialogSurface>
                        <form onSubmit={onHandleSubmit}>
                            <DialogBody>
                                <DialogTitle>{props.state === ProductEditState.Add ? "Add Product" : "Edit Product"}</DialogTitle>    
                                <DialogContent className={styles.content}>
                                    <Label required htmlFor={"name"} >Name</Label>
                                    <Input required id="name" name="name" value={internalProduct.name} onChange={onHandleChange} />
                                    <Label required htmlFor={"price"} >Price</Label>
                                    <Input required id="price" name="price" type="number" value={internalProduct.price} onChange={onHandleChange} />
                                    <Label required htmlFor={"stock"} >Stock</Label>
                                    <Input required id="stock" name="stock" type="number" value={internalProduct.stock} onChange={onHandleChange} />
                                    <Checkbox required id="isActive" name="isActive" checked={internalProduct.isActive} label="Is Active"  onChange={onCheckboxChange} />
                                    <CatalogSelect  isRequired={true} name="catalogId" selectedCatalogId={internalProduct.catalogId} selectCatalogName={catalogName} onChange={onCatalogChanged}/>
                                </DialogContent>
                                <DialogActions>
                                    <Button type="submit" appearance="primary" >{props.state === ProductEditState.Add ? "Add" : "Update"}</Button>
                                    <DialogTrigger>
                                        <Button type="button" appearance="secondary" >Cancel</Button>
                                    </DialogTrigger>
                                </DialogActions>
                            </DialogBody>
                        </form>
                    </DialogSurface>
                </Dialog>
            </div>
        </>
    );
}
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

interface ProductData {
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
}

export const ProductEdit = (props: ProductEditProps) => {
    
    const styles = useStyles();
    const [open, setOpen] = React.useState(false);
    
    let initialProduct: ProductData = {
        name: "",
        price: 0,
        description: "",
        catalogId: 0,
        stock: 0,
        image: "",
        isActive: false};
    if(props.state === ProductEditState.Edit){
        initialProduct["id"] = props.id;
    }
    
    const [product, setProduct] = React.useState<ProductData>(initialProduct)
    
    useEffect(() => {
        
    },[])
    
    const [addProduct, {loading, error}] = useMutation(ADD_PRODUCT);
    const [editProduct, {loading: editLoading, error: editError}] = useMutation(EDIT_PRODUCT);


    const onHandleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        
        try {
            if(props.state === ProductEditState.Add){
                await addProduct({variables: { input: product }});
            }else{
                await editProduct({variables: { input: product }});
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
        
        setProduct({...product, [name]: newValue});
    };
    
    const onCheckboxChange =(ev: ChangeEvent<HTMLInputElement>, {checked}: CheckboxOnChangeData) => {
        setProduct({...product, isActive: checked as boolean});
    }
    
    const onCatalogChanged = (catalogId: string) => {
        setProduct({...product, catalogId: parseInt(catalogId)});
    }
    
    return (
        <>
            <div>
                <Dialog type="modal" open={open} onOpenChange={(e, data) => setOpen(data.open)}>
                    <DialogTrigger>
                        <Button type="button" appearance="primary" icon={<AddCircleFilled />}>Add Product</Button>
                    </DialogTrigger>
                    <DialogSurface>
                        <form onSubmit={onHandleSubmit}>
                            <DialogBody>
                                <DialogTitle>{props.state === ProductEditState.Add ? "Add Product" : "Edit Product"}</DialogTitle>    
                                <DialogContent className={styles.content}>
                                    <Label required htmlFor={"name"} >Name</Label>
                                    <Input required id="name" name="name" value={product.name} onChange={onHandleChange} />
                                    <Label required htmlFor={"price"} >Price</Label>
                                    <Input required id="price" name="price" type="number" value={product.price} onChange={onHandleChange} />
                                    <Label required htmlFor={"stock"} >Stock</Label>
                                    <Input required id="stock" name="stock" type="number" value={product.stock} onChange={onHandleChange} />
                                    <Checkbox required id="isActive" name="isActive" checked={product.isActive} label="Is Active"  onChange={onCheckboxChange} />
                                    <CatalogSelect  isRequired={true} name="catalogId" value={product.catalogId} onChange={onCatalogChanged}/>
                                </DialogContent>
                                <DialogActions>
                                    <Button type="submit" appearance="primary" >Add</Button>
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
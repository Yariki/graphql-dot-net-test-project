import { gql, useMutation } from "@apollo/client";
import {Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Input, Label, makeStyles } from "@fluentui/react-components";
import { on } from "process";
import React, { useState } from "react";
import { Button } from "reactstrap";
import { CatalogInput } from "../gql/generated/graphql";
import { CatalogTable } from "./CatalogTable";

const useStyles = makeStyles({
    content: {
      display: "flex",
      flexDirection: "column",
      rowGap: "10px",
    },
  });


const ADD_CATALOG = gql(`
mutation AddCatalog ($input: CatalogInput){
    addCatalog (input: $input){
        id
    }
}   
    `); 

export const Catalogs: React.FC = () => {
    const [open, setOpen] = useState(false);

    const [nameCatalog, setNameCatalog] = useState("");
    const [descriptionCatalog, setDescriptionCatalog] = useState("");

    const styles = useStyles();

    const [addCatalog, { loading, error }] = useMutation(ADD_CATALOG,
        {
            onCompleted: () => {
                setOpen(false);
            },
            variables: {
                    input: {
                        name: nameCatalog,
                        description: descriptionCatalog
                    } as CatalogInput
            }
        }
    );

    const handleAddCatalog = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.preventDefault();

        if(!nameCatalog){
            alert("Please enter a name for the catalog");
            return;
        }
        if(!descriptionCatalog){
            alert("Please enter a description for the catalog");
            return;
        }

        addCatalog();
        setNameCatalog("");
        setDescriptionCatalog("");
    }

    return (
        <>
            
            <Dialog modalType="modal"
                open={open}
                onOpenChange={(e, data) => setOpen(data.open)}
            >
                <DialogTrigger disableButtonEnhancement>
                    <Button type="button" appearance="primary">Add Catalog</Button>
                </DialogTrigger>
                <DialogSurface>
                    <DialogTitle>Add Catalog</DialogTitle>
                        <DialogBody >
                            <DialogContent className={styles.content}>
                                <Label required htmlFor={"catalog-name"}>Catalog Name</Label>
                                <Input required id={"catalog-name"} name="catalog-name" value={nameCatalog} onChange={(e) => setNameCatalog(e.target.value)}/>
                                <Label required htmlFor={"catalog-description"}>Catalog Description</Label>
                                <Input required id={"catalog-description"} name="catalog-description" value={descriptionCatalog} onChange={(e) => setDescriptionCatalog(e.target.value)}/>
                            </DialogContent>
                            <DialogActions>
                                <Button type="submit" appearance="primary" onClick={e => handleAddCatalog(e)}>Add</Button>
                                <DialogTrigger disableButtonEnhancement>
                                    <Button type="button" appearance="secondary">Cancel</Button>
                                </DialogTrigger>
                            </DialogActions>
                        </DialogBody>
                </DialogSurface>
            </Dialog>
            <CatalogTable />
        </>
    );
}


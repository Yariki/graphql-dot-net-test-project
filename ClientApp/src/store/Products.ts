import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';
import { Catalog, Product } from '../gql/graphql';

export interface ProductState {
    isLoading: boolean;
    products: Product[];
    catalogs: Catalog[];
}

interface RequestProductsAction {
    type: 'REQUEST_PRODUCTS';
    products: Product[];
}

interface RequestCatalogsAction {
    type: 'REQUEST_CATALOGS';
    catalogs: Catalog[];
}


type KnownAction = RequestProductsAction | RequestCatalogsAction;

export const actionCreators = {
    requestProducts: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
       // TODO: Implement the logic to fetch products from the server
    },
    requestCatalogs: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // TODO: Implement the logic to fetch catalogs from the server
    }
};

const initialState: ProductState = { isLoading: false, products: [], catalogs: [] };

export const reducer: Reducer<ProductState> = (state: ProductState | undefined, incomingAction: Action): ProductState => {
    if (state === undefined) {
        return initialState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_PRODUCTS':
            return { ...state, products: action.products, isLoading: false };
        case 'REQUEST_CATALOGS':
            return { ...state, catalogs: action.catalogs, isLoading: false };
        default:
            return state;
    }
}




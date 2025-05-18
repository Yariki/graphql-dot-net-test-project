import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { Products } from './components/Products';


import './custom.css'
import { Catalogs } from './components/Catalogs';
import { ProductDetails } from './components/ProductDetails';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/products' component={Products} />
        <Route path='/catalogs' component={Catalogs} />
        <Route path='/product/:id' component={ProductDetails} />
    </Layout>
);

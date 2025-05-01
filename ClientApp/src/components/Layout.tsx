import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://localhost:5001/graphql'
});

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <ApolloProvider client={client}>
                <React.Fragment>
                    <NavMenu />
                    <Container>
                        {this.props.children}
                    </Container>
                </React.Fragment>
             </ApolloProvider>
        );
    }
}
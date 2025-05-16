import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Catalog = {
  __typename?: 'Catalog';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['UUID']['output'];
  deletedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['UUID']['output'];
};

export type CatalogDeleteInput = {
  id: Scalars['Int']['input'];
};

export type CatalogFilterInput = {
  and?: InputMaybe<Array<CatalogFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  createdBy?: InputMaybe<UuidOperationFilterInput>;
  deletedAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CatalogFilterInput>>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
  updatedBy?: InputMaybe<UuidOperationFilterInput>;
};

export type CatalogInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type CatalogsConnection = {
  __typename?: 'CatalogsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CatalogsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Catalog>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CatalogsEdge = {
  __typename?: 'CatalogsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Catalog>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCatalog?: Maybe<Catalog>;
  addProduct?: Maybe<Product>;
  deleteCatalog: Scalars['Boolean']['output'];
  deleteProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
};


export type MutationAddCatalogArgs = {
  input?: InputMaybe<CatalogInput>;
};


export type MutationAddProductArgs = {
  input?: InputMaybe<ProductInput>;
};


export type MutationDeleteCatalogArgs = {
  input?: InputMaybe<CatalogDeleteInput>;
};


export type MutationDeleteProductArgs = {
  input?: InputMaybe<ProductDeleteInput>;
};


export type MutationUpdateProductArgs = {
  input?: InputMaybe<ProductUpdateInput>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  catalog?: Maybe<Catalog>;
  catalogId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['UUID']['output'];
  deletedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  price: Scalars['Decimal']['output'];
  stock: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['UUID']['output'];
};

export type ProductDeleteInput = {
  id: Scalars['Int']['input'];
};

export type ProductFilterInput = {
  and?: InputMaybe<Array<ProductFilterInput>>;
  catalog?: InputMaybe<CatalogFilterInput>;
  catalogId?: InputMaybe<IntOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  createdBy?: InputMaybe<UuidOperationFilterInput>;
  deletedAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  image?: InputMaybe<StringOperationFilterInput>;
  isActive?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductFilterInput>>;
  price?: InputMaybe<DecimalOperationFilterInput>;
  stock?: InputMaybe<IntOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
  updatedBy?: InputMaybe<UuidOperationFilterInput>;
};

export type ProductInput = {
  catalogId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Decimal']['input'];
  stock: Scalars['Int']['input'];
};

export type ProductUpdateInput = {
  catalogId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Decimal']['input'];
  stock: Scalars['Int']['input'];
};

/** A connection to a list of items. */
export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Product>;
};

export type Query = {
  __typename?: 'Query';
  catalogs?: Maybe<CatalogsConnection>;
  products?: Maybe<ProductsConnection>;
};


export type QueryCatalogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CatalogFilterInput>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilterInput>;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
  ngt?: InputMaybe<Scalars['UUID']['input']>;
  ngte?: InputMaybe<Scalars['UUID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  nlt?: InputMaybe<Scalars['UUID']['input']>;
  nlte?: InputMaybe<Scalars['UUID']['input']>;
};

export type GetCatalogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCatalogsQuery = { __typename?: 'Query', catalogs?: { __typename?: 'CatalogsConnection', nodes?: Array<{ __typename?: 'Catalog', id: number, name?: string | null } | null> | null } | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanOperationFilterInput: BooleanOperationFilterInput;
  Catalog: ResolverTypeWrapper<Catalog>;
  CatalogDeleteInput: CatalogDeleteInput;
  CatalogFilterInput: CatalogFilterInput;
  CatalogInput: CatalogInput;
  CatalogsConnection: ResolverTypeWrapper<CatalogsConnection>;
  CatalogsEdge: ResolverTypeWrapper<CatalogsEdge>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeOperationFilterInput: DateTimeOperationFilterInput;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  DecimalOperationFilterInput: DecimalOperationFilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntOperationFilterInput: IntOperationFilterInput;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Product: ResolverTypeWrapper<Product>;
  ProductDeleteInput: ProductDeleteInput;
  ProductFilterInput: ProductFilterInput;
  ProductInput: ProductInput;
  ProductUpdateInput: ProductUpdateInput;
  ProductsConnection: ResolverTypeWrapper<ProductsConnection>;
  ProductsEdge: ResolverTypeWrapper<ProductsEdge>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringOperationFilterInput: StringOperationFilterInput;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  UuidOperationFilterInput: UuidOperationFilterInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  BooleanOperationFilterInput: BooleanOperationFilterInput;
  Catalog: Catalog;
  CatalogDeleteInput: CatalogDeleteInput;
  CatalogFilterInput: CatalogFilterInput;
  CatalogInput: CatalogInput;
  CatalogsConnection: CatalogsConnection;
  CatalogsEdge: CatalogsEdge;
  DateTime: Scalars['DateTime']['output'];
  DateTimeOperationFilterInput: DateTimeOperationFilterInput;
  Decimal: Scalars['Decimal']['output'];
  DecimalOperationFilterInput: DecimalOperationFilterInput;
  Int: Scalars['Int']['output'];
  IntOperationFilterInput: IntOperationFilterInput;
  Mutation: {};
  PageInfo: PageInfo;
  Product: Product;
  ProductDeleteInput: ProductDeleteInput;
  ProductFilterInput: ProductFilterInput;
  ProductInput: ProductInput;
  ProductUpdateInput: ProductUpdateInput;
  ProductsConnection: ProductsConnection;
  ProductsEdge: ProductsEdge;
  Query: {};
  String: Scalars['String']['output'];
  StringOperationFilterInput: StringOperationFilterInput;
  UUID: Scalars['UUID']['output'];
  UuidOperationFilterInput: UuidOperationFilterInput;
};

export type CostDirectiveArgs = {
  weight: Scalars['String']['input'];
};

export type CostDirectiveResolver<Result, Parent, ContextType = any, Args = CostDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ListSizeDirectiveArgs = {
  assumedSize?: Maybe<Scalars['Int']['input']>;
  requireOneSlicingArgument?: Scalars['Boolean']['input'];
  sizedFields?: Maybe<Array<Scalars['String']['input']>>;
  slicingArgumentDefaultValue?: Maybe<Scalars['Int']['input']>;
  slicingArguments?: Maybe<Array<Scalars['String']['input']>>;
};

export type ListSizeDirectiveResolver<Result, Parent, ContextType = any, Args = ListSizeDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CatalogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Catalog'] = ResolversParentTypes['Catalog']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  deletedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogsConnection'] = ResolversParentTypes['CatalogsConnection']> = {
  edges?: Resolver<Maybe<Array<ResolversTypes['CatalogsEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Catalog']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogsEdge'] = ResolversParentTypes['CatalogsEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addCatalog?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType, Partial<MutationAddCatalogArgs>>;
  addProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<MutationAddProductArgs>>;
  deleteCatalog?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationDeleteCatalogArgs>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<MutationDeleteProductArgs>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<MutationUpdateProductArgs>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  catalog?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType>;
  catalogId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  deletedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsConnection'] = ResolversParentTypes['ProductsConnection']> = {
  edges?: Resolver<Maybe<Array<ResolversTypes['ProductsEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsEdge'] = ResolversParentTypes['ProductsEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  catalogs?: Resolver<Maybe<ResolversTypes['CatalogsConnection']>, ParentType, ContextType, Partial<QueryCatalogsArgs>>;
  products?: Resolver<Maybe<ResolversTypes['ProductsConnection']>, ParentType, ContextType, Partial<QueryProductsArgs>>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type Resolvers<ContextType = any> = {
  Catalog?: CatalogResolvers<ContextType>;
  CatalogsConnection?: CatalogsConnectionResolvers<ContextType>;
  CatalogsEdge?: CatalogsEdgeResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductsConnection?: ProductsConnectionResolvers<ContextType>;
  ProductsEdge?: ProductsEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UUID?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cost?: CostDirectiveResolver<any, any, ContextType>;
  listSize?: ListSizeDirectiveResolver<any, any, ContextType>;
};


export const GetCatalogsDocument = gql`
    query GetCatalogs {
  catalogs {
    nodes {
      id
      name
    }
  }
}
    `;

/**
 * __useGetCatalogsQuery__
 *
 * To run a query within a React component, call `useGetCatalogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatalogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatalogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCatalogsQuery(baseOptions?: Apollo.QueryHookOptions<GetCatalogsQuery, GetCatalogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCatalogsQuery, GetCatalogsQueryVariables>(GetCatalogsDocument, options);
      }
export function useGetCatalogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatalogsQuery, GetCatalogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCatalogsQuery, GetCatalogsQueryVariables>(GetCatalogsDocument, options);
        }
export function useGetCatalogsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCatalogsQuery, GetCatalogsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCatalogsQuery, GetCatalogsQueryVariables>(GetCatalogsDocument, options);
        }
export type GetCatalogsQueryHookResult = ReturnType<typeof useGetCatalogsQuery>;
export type GetCatalogsLazyQueryHookResult = ReturnType<typeof useGetCatalogsLazyQuery>;
export type GetCatalogsSuspenseQueryHookResult = ReturnType<typeof useGetCatalogsSuspenseQuery>;
export type GetCatalogsQueryResult = Apollo.QueryResult<GetCatalogsQuery, GetCatalogsQueryVariables>;
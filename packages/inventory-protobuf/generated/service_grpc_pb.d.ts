// package: auth
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_pb from "./service_pb";
import * as category_pb from "./category_pb";
import * as inventory_pb from "./inventory_pb";
import * as product_pb from "./product_pb";

interface IInventoryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCategory: IInventoryService_ICreateCategory;
    getCategory: IInventoryService_IGetCategory;
    listCategories: IInventoryService_IListCategories;
    updateCategory: IInventoryService_IUpdateCategory;
    deleteCategory: IInventoryService_IDeleteCategory;
    createInventory: IInventoryService_ICreateInventory;
    getInventory: IInventoryService_IGetInventory;
    listInventories: IInventoryService_IListInventories;
    updateInventory: IInventoryService_IUpdateInventory;
    deleteInventory: IInventoryService_IDeleteInventory;
    createProduct: IInventoryService_ICreateProduct;
    getProduct: IInventoryService_IGetProduct;
    listProducts: IInventoryService_IListProducts;
    updateProduct: IInventoryService_IUpdateProduct;
    deleteProduct: IInventoryService_IDeleteProduct;
}

interface IInventoryService_ICreateCategory extends grpc.MethodDefinition<category_pb.Category, category_pb.Category> {
    path: "/auth.Inventory/CreateCategory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<category_pb.Category>;
    requestDeserialize: grpc.deserialize<category_pb.Category>;
    responseSerialize: grpc.serialize<category_pb.Category>;
    responseDeserialize: grpc.deserialize<category_pb.Category>;
}
interface IInventoryService_IGetCategory extends grpc.MethodDefinition<category_pb.Category, category_pb.Category> {
    path: "/auth.Inventory/GetCategory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<category_pb.Category>;
    requestDeserialize: grpc.deserialize<category_pb.Category>;
    responseSerialize: grpc.serialize<category_pb.Category>;
    responseDeserialize: grpc.deserialize<category_pb.Category>;
}
interface IInventoryService_IListCategories extends grpc.MethodDefinition<category_pb.Category, category_pb.CategoryList> {
    path: "/auth.Inventory/ListCategories";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<category_pb.Category>;
    requestDeserialize: grpc.deserialize<category_pb.Category>;
    responseSerialize: grpc.serialize<category_pb.CategoryList>;
    responseDeserialize: grpc.deserialize<category_pb.CategoryList>;
}
interface IInventoryService_IUpdateCategory extends grpc.MethodDefinition<category_pb.Category, category_pb.Category> {
    path: "/auth.Inventory/UpdateCategory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<category_pb.Category>;
    requestDeserialize: grpc.deserialize<category_pb.Category>;
    responseSerialize: grpc.serialize<category_pb.Category>;
    responseDeserialize: grpc.deserialize<category_pb.Category>;
}
interface IInventoryService_IDeleteCategory extends grpc.MethodDefinition<category_pb.Category, category_pb.Category> {
    path: "/auth.Inventory/DeleteCategory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<category_pb.Category>;
    requestDeserialize: grpc.deserialize<category_pb.Category>;
    responseSerialize: grpc.serialize<category_pb.Category>;
    responseDeserialize: grpc.deserialize<category_pb.Category>;
}
interface IInventoryService_ICreateInventory extends grpc.MethodDefinition<inventory_pb.Inventory, inventory_pb.Inventory> {
    path: "/auth.Inventory/CreateInventory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<inventory_pb.Inventory>;
    requestDeserialize: grpc.deserialize<inventory_pb.Inventory>;
    responseSerialize: grpc.serialize<inventory_pb.Inventory>;
    responseDeserialize: grpc.deserialize<inventory_pb.Inventory>;
}
interface IInventoryService_IGetInventory extends grpc.MethodDefinition<inventory_pb.Inventory, inventory_pb.Inventory> {
    path: "/auth.Inventory/GetInventory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<inventory_pb.Inventory>;
    requestDeserialize: grpc.deserialize<inventory_pb.Inventory>;
    responseSerialize: grpc.serialize<inventory_pb.Inventory>;
    responseDeserialize: grpc.deserialize<inventory_pb.Inventory>;
}
interface IInventoryService_IListInventories extends grpc.MethodDefinition<inventory_pb.Inventory, inventory_pb.InventoryList> {
    path: "/auth.Inventory/ListInventories";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<inventory_pb.Inventory>;
    requestDeserialize: grpc.deserialize<inventory_pb.Inventory>;
    responseSerialize: grpc.serialize<inventory_pb.InventoryList>;
    responseDeserialize: grpc.deserialize<inventory_pb.InventoryList>;
}
interface IInventoryService_IUpdateInventory extends grpc.MethodDefinition<inventory_pb.Inventory, inventory_pb.Inventory> {
    path: "/auth.Inventory/UpdateInventory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<inventory_pb.Inventory>;
    requestDeserialize: grpc.deserialize<inventory_pb.Inventory>;
    responseSerialize: grpc.serialize<inventory_pb.Inventory>;
    responseDeserialize: grpc.deserialize<inventory_pb.Inventory>;
}
interface IInventoryService_IDeleteInventory extends grpc.MethodDefinition<inventory_pb.Inventory, inventory_pb.Inventory> {
    path: "/auth.Inventory/DeleteInventory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<inventory_pb.Inventory>;
    requestDeserialize: grpc.deserialize<inventory_pb.Inventory>;
    responseSerialize: grpc.serialize<inventory_pb.Inventory>;
    responseDeserialize: grpc.deserialize<inventory_pb.Inventory>;
}
interface IInventoryService_ICreateProduct extends grpc.MethodDefinition<product_pb.Product, product_pb.Product> {
    path: "/auth.Inventory/CreateProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.Product>;
    requestDeserialize: grpc.deserialize<product_pb.Product>;
    responseSerialize: grpc.serialize<product_pb.Product>;
    responseDeserialize: grpc.deserialize<product_pb.Product>;
}
interface IInventoryService_IGetProduct extends grpc.MethodDefinition<product_pb.Product, product_pb.Product> {
    path: "/auth.Inventory/GetProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.Product>;
    requestDeserialize: grpc.deserialize<product_pb.Product>;
    responseSerialize: grpc.serialize<product_pb.Product>;
    responseDeserialize: grpc.deserialize<product_pb.Product>;
}
interface IInventoryService_IListProducts extends grpc.MethodDefinition<product_pb.Product, product_pb.ProductList> {
    path: "/auth.Inventory/ListProducts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.Product>;
    requestDeserialize: grpc.deserialize<product_pb.Product>;
    responseSerialize: grpc.serialize<product_pb.ProductList>;
    responseDeserialize: grpc.deserialize<product_pb.ProductList>;
}
interface IInventoryService_IUpdateProduct extends grpc.MethodDefinition<product_pb.Product, product_pb.Product> {
    path: "/auth.Inventory/UpdateProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.Product>;
    requestDeserialize: grpc.deserialize<product_pb.Product>;
    responseSerialize: grpc.serialize<product_pb.Product>;
    responseDeserialize: grpc.deserialize<product_pb.Product>;
}
interface IInventoryService_IDeleteProduct extends grpc.MethodDefinition<product_pb.Product, product_pb.Product> {
    path: "/auth.Inventory/DeleteProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.Product>;
    requestDeserialize: grpc.deserialize<product_pb.Product>;
    responseSerialize: grpc.serialize<product_pb.Product>;
    responseDeserialize: grpc.deserialize<product_pb.Product>;
}

export const InventoryService: IInventoryService;

export interface IInventoryServer extends grpc.UntypedServiceImplementation {
    createCategory: grpc.handleUnaryCall<category_pb.Category, category_pb.Category>;
    getCategory: grpc.handleUnaryCall<category_pb.Category, category_pb.Category>;
    listCategories: grpc.handleUnaryCall<category_pb.Category, category_pb.CategoryList>;
    updateCategory: grpc.handleUnaryCall<category_pb.Category, category_pb.Category>;
    deleteCategory: grpc.handleUnaryCall<category_pb.Category, category_pb.Category>;
    createInventory: grpc.handleUnaryCall<inventory_pb.Inventory, inventory_pb.Inventory>;
    getInventory: grpc.handleUnaryCall<inventory_pb.Inventory, inventory_pb.Inventory>;
    listInventories: grpc.handleUnaryCall<inventory_pb.Inventory, inventory_pb.InventoryList>;
    updateInventory: grpc.handleUnaryCall<inventory_pb.Inventory, inventory_pb.Inventory>;
    deleteInventory: grpc.handleUnaryCall<inventory_pb.Inventory, inventory_pb.Inventory>;
    createProduct: grpc.handleUnaryCall<product_pb.Product, product_pb.Product>;
    getProduct: grpc.handleUnaryCall<product_pb.Product, product_pb.Product>;
    listProducts: grpc.handleUnaryCall<product_pb.Product, product_pb.ProductList>;
    updateProduct: grpc.handleUnaryCall<product_pb.Product, product_pb.Product>;
    deleteProduct: grpc.handleUnaryCall<product_pb.Product, product_pb.Product>;
}

export interface IInventoryClient {
    createCategory(request: category_pb.Category, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    createCategory(request: category_pb.Category, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    createCategory(request: category_pb.Category, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    getCategory(request: category_pb.Category, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    getCategory(request: category_pb.Category, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    getCategory(request: category_pb.Category, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    listCategories(request: category_pb.Category, callback: (error: grpc.ServiceError | null, response: category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    listCategories(request: category_pb.Category, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    listCategories(request: category_pb.Category, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    updateCategory(request: category_pb.Category, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    updateCategory(request: category_pb.Category, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    updateCategory(request: category_pb.Category, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    deleteCategory(request: category_pb.Category, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    deleteCategory(request: category_pb.Category, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    deleteCategory(request: category_pb.Category, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    createInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    createInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    createInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    getInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    getInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    getInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    listInventories(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.InventoryList) => void): grpc.ClientUnaryCall;
    listInventories(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.InventoryList) => void): grpc.ClientUnaryCall;
    listInventories(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.InventoryList) => void): grpc.ClientUnaryCall;
    updateInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    updateInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    updateInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    deleteInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    deleteInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    deleteInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    createProduct(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    createProduct(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    createProduct(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    getProduct(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    getProduct(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    getProduct(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    listProducts(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.ProductList) => void): grpc.ClientUnaryCall;
    listProducts(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductList) => void): grpc.ClientUnaryCall;
    listProducts(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductList) => void): grpc.ClientUnaryCall;
    updateProduct(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    updateProduct(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    updateProduct(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    deleteProduct(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    deleteProduct(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    deleteProduct(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
}

export class InventoryClient extends grpc.Client implements IInventoryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createCategory(request: category_pb.Category, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    public createCategory(request: category_pb.Category, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    public createCategory(request: category_pb.Category, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    public getCategory(request: category_pb.Category, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    public getCategory(request: category_pb.Category, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    public getCategory(request: category_pb.Category, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    public listCategories(request: category_pb.Category, callback: (error: grpc.ServiceError | null, response: category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    public listCategories(request: category_pb.Category, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    public listCategories(request: category_pb.Category, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    public updateCategory(request: category_pb.Category, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    public updateCategory(request: category_pb.Category, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    public updateCategory(request: category_pb.Category, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    public deleteCategory(request: category_pb.Category, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    public deleteCategory(request: category_pb.Category, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    public deleteCategory(request: category_pb.Category, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: category_pb.Category) => void): grpc.ClientUnaryCall;
    public createInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public createInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public createInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public getInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public getInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public getInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public listInventories(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.InventoryList) => void): grpc.ClientUnaryCall;
    public listInventories(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.InventoryList) => void): grpc.ClientUnaryCall;
    public listInventories(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.InventoryList) => void): grpc.ClientUnaryCall;
    public updateInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public updateInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public updateInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public deleteInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public deleteInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public deleteInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public createProduct(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public createProduct(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public createProduct(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public getProduct(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public getProduct(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public getProduct(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public listProducts(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.ProductList) => void): grpc.ClientUnaryCall;
    public listProducts(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductList) => void): grpc.ClientUnaryCall;
    public listProducts(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductList) => void): grpc.ClientUnaryCall;
    public updateProduct(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public updateProduct(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public updateProduct(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
}

// package: product
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Product extends jspb.Message { 
    getId(): string;
    setId(value: string): Product;
    getCategoryId(): string;
    setCategoryId(value: string): Product;
    getInventoryId(): string;
    setInventoryId(value: string): Product;
    getOwnerId(): string;
    setOwnerId(value: string): Product;
    getName(): string;
    setName(value: string): Product;
    getDescription(): string;
    setDescription(value: string): Product;
    getCreatedAt(): string;
    setCreatedAt(value: string): Product;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        id: string,
        categoryId: string,
        inventoryId: string,
        ownerId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class ProductList extends jspb.Message { 
    clearProductList(): void;
    getProductList(): Array<Product>;
    setProductList(value: Array<Product>): ProductList;
    addProduct(value?: Product, index?: number): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductList.AsObject;
    static toObject(includeInstance: boolean, msg: ProductList): ProductList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductList;
    static deserializeBinaryFromReader(message: ProductList, reader: jspb.BinaryReader): ProductList;
}

export namespace ProductList {
    export type AsObject = {
        productList: Array<Product.AsObject>,
    }
}

// package: category
// file: category.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Category extends jspb.Message { 
    getId(): string;
    setId(value: string): Category;
    getCategoryId(): string;
    setCategoryId(value: string): Category;
    getInventoryId(): string;
    setInventoryId(value: string): Category;
    getOwnerId(): string;
    setOwnerId(value: string): Category;
    getName(): string;
    setName(value: string): Category;
    getDescription(): string;
    setDescription(value: string): Category;
    getCreatedAt(): string;
    setCreatedAt(value: string): Category;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Category;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category.AsObject;
    static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category;
    static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
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

export class CategoryList extends jspb.Message { 
    clearCategoryList(): void;
    getCategoryList(): Array<Category>;
    setCategoryList(value: Array<Category>): CategoryList;
    addCategory(value?: Category, index?: number): Category;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryList.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryList): CategoryList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryList;
    static deserializeBinaryFromReader(message: CategoryList, reader: jspb.BinaryReader): CategoryList;
}

export namespace CategoryList {
    export type AsObject = {
        categoryList: Array<Category.AsObject>,
    }
}

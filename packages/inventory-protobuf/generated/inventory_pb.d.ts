// package: inventory
// file: inventory.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Inventory extends jspb.Message { 
    getId(): string;
    setId(value: string): Inventory;
    getOwnerId(): string;
    setOwnerId(value: string): Inventory;
    getName(): string;
    setName(value: string): Inventory;
    getDescription(): string;
    setDescription(value: string): Inventory;
    getCreatedAt(): string;
    setCreatedAt(value: string): Inventory;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Inventory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Inventory.AsObject;
    static toObject(includeInstance: boolean, msg: Inventory): Inventory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Inventory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Inventory;
    static deserializeBinaryFromReader(message: Inventory, reader: jspb.BinaryReader): Inventory;
}

export namespace Inventory {
    export type AsObject = {
        id: string,
        ownerId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class InventoryList extends jspb.Message { 
    clearInventoryList(): void;
    getInventoryList(): Array<Inventory>;
    setInventoryList(value: Array<Inventory>): InventoryList;
    addInventory(value?: Inventory, index?: number): Inventory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InventoryList.AsObject;
    static toObject(includeInstance: boolean, msg: InventoryList): InventoryList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InventoryList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InventoryList;
    static deserializeBinaryFromReader(message: InventoryList, reader: jspb.BinaryReader): InventoryList;
}

export namespace InventoryList {
    export type AsObject = {
        inventoryList: Array<Inventory.AsObject>,
    }
}

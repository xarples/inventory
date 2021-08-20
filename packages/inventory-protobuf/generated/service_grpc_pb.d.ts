// package: auth
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_pb from "./service_pb";
import * as inventory_pb from "./inventory_pb";

interface IIAMService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createInventory: IIAMService_ICreateInventory;
    getInventory: IIAMService_IGetInventory;
    listInventoriess: IIAMService_IListInventoriess;
    updateInventory: IIAMService_IUpdateInventory;
    deleteInventory: IIAMService_IDeleteInventory;
}

interface IIAMService_ICreateInventory extends grpc.MethodDefinition<inventory_pb.Inventory, inventory_pb.Inventory> {
    path: "/auth.IAM/CreateInventory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<inventory_pb.Inventory>;
    requestDeserialize: grpc.deserialize<inventory_pb.Inventory>;
    responseSerialize: grpc.serialize<inventory_pb.Inventory>;
    responseDeserialize: grpc.deserialize<inventory_pb.Inventory>;
}
interface IIAMService_IGetInventory extends grpc.MethodDefinition<inventory_pb.Inventory, inventory_pb.Inventory> {
    path: "/auth.IAM/GetInventory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<inventory_pb.Inventory>;
    requestDeserialize: grpc.deserialize<inventory_pb.Inventory>;
    responseSerialize: grpc.serialize<inventory_pb.Inventory>;
    responseDeserialize: grpc.deserialize<inventory_pb.Inventory>;
}
interface IIAMService_IListInventoriess extends grpc.MethodDefinition<inventory_pb.Inventory, inventory_pb.InventoryList> {
    path: "/auth.IAM/ListInventoriess";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<inventory_pb.Inventory>;
    requestDeserialize: grpc.deserialize<inventory_pb.Inventory>;
    responseSerialize: grpc.serialize<inventory_pb.InventoryList>;
    responseDeserialize: grpc.deserialize<inventory_pb.InventoryList>;
}
interface IIAMService_IUpdateInventory extends grpc.MethodDefinition<inventory_pb.Inventory, inventory_pb.Inventory> {
    path: "/auth.IAM/UpdateInventory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<inventory_pb.Inventory>;
    requestDeserialize: grpc.deserialize<inventory_pb.Inventory>;
    responseSerialize: grpc.serialize<inventory_pb.Inventory>;
    responseDeserialize: grpc.deserialize<inventory_pb.Inventory>;
}
interface IIAMService_IDeleteInventory extends grpc.MethodDefinition<inventory_pb.Inventory, inventory_pb.Inventory> {
    path: "/auth.IAM/DeleteInventory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<inventory_pb.Inventory>;
    requestDeserialize: grpc.deserialize<inventory_pb.Inventory>;
    responseSerialize: grpc.serialize<inventory_pb.Inventory>;
    responseDeserialize: grpc.deserialize<inventory_pb.Inventory>;
}

export const IAMService: IIAMService;

export interface IIAMServer extends grpc.UntypedServiceImplementation {
    createInventory: grpc.handleUnaryCall<inventory_pb.Inventory, inventory_pb.Inventory>;
    getInventory: grpc.handleUnaryCall<inventory_pb.Inventory, inventory_pb.Inventory>;
    listInventoriess: grpc.handleUnaryCall<inventory_pb.Inventory, inventory_pb.InventoryList>;
    updateInventory: grpc.handleUnaryCall<inventory_pb.Inventory, inventory_pb.Inventory>;
    deleteInventory: grpc.handleUnaryCall<inventory_pb.Inventory, inventory_pb.Inventory>;
}

export interface IIAMClient {
    createInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    createInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    createInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    getInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    getInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    getInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    listInventoriess(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.InventoryList) => void): grpc.ClientUnaryCall;
    listInventoriess(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.InventoryList) => void): grpc.ClientUnaryCall;
    listInventoriess(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.InventoryList) => void): grpc.ClientUnaryCall;
    updateInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    updateInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    updateInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    deleteInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    deleteInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    deleteInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
}

export class IAMClient extends grpc.Client implements IIAMClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public createInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public createInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public getInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public getInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public getInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public listInventoriess(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.InventoryList) => void): grpc.ClientUnaryCall;
    public listInventoriess(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.InventoryList) => void): grpc.ClientUnaryCall;
    public listInventoriess(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.InventoryList) => void): grpc.ClientUnaryCall;
    public updateInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public updateInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public updateInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public deleteInventory(request: inventory_pb.Inventory, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public deleteInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
    public deleteInventory(request: inventory_pb.Inventory, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: inventory_pb.Inventory) => void): grpc.ClientUnaryCall;
}

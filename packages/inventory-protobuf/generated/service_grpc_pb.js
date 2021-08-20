// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var inventory_pb = require('./inventory_pb.js');

function serialize_inventory_Inventory(arg) {
  if (!(arg instanceof inventory_pb.Inventory)) {
    throw new Error('Expected argument of type inventory.Inventory');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inventory_Inventory(buffer_arg) {
  return inventory_pb.Inventory.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_inventory_InventoryList(arg) {
  if (!(arg instanceof inventory_pb.InventoryList)) {
    throw new Error('Expected argument of type inventory.InventoryList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_inventory_InventoryList(buffer_arg) {
  return inventory_pb.InventoryList.deserializeBinary(new Uint8Array(buffer_arg));
}


var IAMService = exports.IAMService = {
  createInventory: {
    path: '/auth.IAM/CreateInventory',
    requestStream: false,
    responseStream: false,
    requestType: inventory_pb.Inventory,
    responseType: inventory_pb.Inventory,
    requestSerialize: serialize_inventory_Inventory,
    requestDeserialize: deserialize_inventory_Inventory,
    responseSerialize: serialize_inventory_Inventory,
    responseDeserialize: deserialize_inventory_Inventory,
  },
  getInventory: {
    path: '/auth.IAM/GetInventory',
    requestStream: false,
    responseStream: false,
    requestType: inventory_pb.Inventory,
    responseType: inventory_pb.Inventory,
    requestSerialize: serialize_inventory_Inventory,
    requestDeserialize: deserialize_inventory_Inventory,
    responseSerialize: serialize_inventory_Inventory,
    responseDeserialize: deserialize_inventory_Inventory,
  },
  listInventoriess: {
    path: '/auth.IAM/ListInventoriess',
    requestStream: false,
    responseStream: false,
    requestType: inventory_pb.Inventory,
    responseType: inventory_pb.InventoryList,
    requestSerialize: serialize_inventory_Inventory,
    requestDeserialize: deserialize_inventory_Inventory,
    responseSerialize: serialize_inventory_InventoryList,
    responseDeserialize: deserialize_inventory_InventoryList,
  },
  updateInventory: {
    path: '/auth.IAM/UpdateInventory',
    requestStream: false,
    responseStream: false,
    requestType: inventory_pb.Inventory,
    responseType: inventory_pb.Inventory,
    requestSerialize: serialize_inventory_Inventory,
    requestDeserialize: deserialize_inventory_Inventory,
    responseSerialize: serialize_inventory_Inventory,
    responseDeserialize: deserialize_inventory_Inventory,
  },
  deleteInventory: {
    path: '/auth.IAM/DeleteInventory',
    requestStream: false,
    responseStream: false,
    requestType: inventory_pb.Inventory,
    responseType: inventory_pb.Inventory,
    requestSerialize: serialize_inventory_Inventory,
    requestDeserialize: deserialize_inventory_Inventory,
    responseSerialize: serialize_inventory_Inventory,
    responseDeserialize: deserialize_inventory_Inventory,
  },
};

exports.IAMClient = grpc.makeGenericClientConstructor(IAMService);

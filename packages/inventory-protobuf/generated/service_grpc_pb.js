// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var category_pb = require('./category_pb.js');
var inventory_pb = require('./inventory_pb.js');
var product_pb = require('./product_pb.js');

function serialize_category_Category(arg) {
  if (!(arg instanceof category_pb.Category)) {
    throw new Error('Expected argument of type category.Category');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_category_Category(buffer_arg) {
  return category_pb.Category.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_category_CategoryList(arg) {
  if (!(arg instanceof category_pb.CategoryList)) {
    throw new Error('Expected argument of type category.CategoryList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_category_CategoryList(buffer_arg) {
  return category_pb.CategoryList.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_product_Product(arg) {
  if (!(arg instanceof product_pb.Product)) {
    throw new Error('Expected argument of type product.Product');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Product(buffer_arg) {
  return product_pb.Product.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductList(arg) {
  if (!(arg instanceof product_pb.ProductList)) {
    throw new Error('Expected argument of type product.ProductList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductList(buffer_arg) {
  return product_pb.ProductList.deserializeBinary(new Uint8Array(buffer_arg));
}


var InventoryService = exports.InventoryService = {
  createCategory: {
    path: '/auth.Inventory/CreateCategory',
    requestStream: false,
    responseStream: false,
    requestType: category_pb.Category,
    responseType: category_pb.Category,
    requestSerialize: serialize_category_Category,
    requestDeserialize: deserialize_category_Category,
    responseSerialize: serialize_category_Category,
    responseDeserialize: deserialize_category_Category,
  },
  getCategory: {
    path: '/auth.Inventory/GetCategory',
    requestStream: false,
    responseStream: false,
    requestType: category_pb.Category,
    responseType: category_pb.Category,
    requestSerialize: serialize_category_Category,
    requestDeserialize: deserialize_category_Category,
    responseSerialize: serialize_category_Category,
    responseDeserialize: deserialize_category_Category,
  },
  listCategories: {
    path: '/auth.Inventory/ListCategories',
    requestStream: false,
    responseStream: false,
    requestType: category_pb.Category,
    responseType: category_pb.CategoryList,
    requestSerialize: serialize_category_Category,
    requestDeserialize: deserialize_category_Category,
    responseSerialize: serialize_category_CategoryList,
    responseDeserialize: deserialize_category_CategoryList,
  },
  updateCategory: {
    path: '/auth.Inventory/UpdateCategory',
    requestStream: false,
    responseStream: false,
    requestType: category_pb.Category,
    responseType: category_pb.Category,
    requestSerialize: serialize_category_Category,
    requestDeserialize: deserialize_category_Category,
    responseSerialize: serialize_category_Category,
    responseDeserialize: deserialize_category_Category,
  },
  deleteCategory: {
    path: '/auth.Inventory/DeleteCategory',
    requestStream: false,
    responseStream: false,
    requestType: category_pb.Category,
    responseType: category_pb.Category,
    requestSerialize: serialize_category_Category,
    requestDeserialize: deserialize_category_Category,
    responseSerialize: serialize_category_Category,
    responseDeserialize: deserialize_category_Category,
  },
  createInventory: {
    path: '/auth.Inventory/CreateInventory',
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
    path: '/auth.Inventory/GetInventory',
    requestStream: false,
    responseStream: false,
    requestType: inventory_pb.Inventory,
    responseType: inventory_pb.Inventory,
    requestSerialize: serialize_inventory_Inventory,
    requestDeserialize: deserialize_inventory_Inventory,
    responseSerialize: serialize_inventory_Inventory,
    responseDeserialize: deserialize_inventory_Inventory,
  },
  listInventories: {
    path: '/auth.Inventory/ListInventories',
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
    path: '/auth.Inventory/UpdateInventory',
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
    path: '/auth.Inventory/DeleteInventory',
    requestStream: false,
    responseStream: false,
    requestType: inventory_pb.Inventory,
    responseType: inventory_pb.Inventory,
    requestSerialize: serialize_inventory_Inventory,
    requestDeserialize: deserialize_inventory_Inventory,
    responseSerialize: serialize_inventory_Inventory,
    responseDeserialize: deserialize_inventory_Inventory,
  },
  createProduct: {
    path: '/auth.Inventory/CreateProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.Product,
    responseType: product_pb.Product,
    requestSerialize: serialize_product_Product,
    requestDeserialize: deserialize_product_Product,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
  getProduct: {
    path: '/auth.Inventory/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.Product,
    responseType: product_pb.Product,
    requestSerialize: serialize_product_Product,
    requestDeserialize: deserialize_product_Product,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
  listProducts: {
    path: '/auth.Inventory/ListProducts',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.Product,
    responseType: product_pb.ProductList,
    requestSerialize: serialize_product_Product,
    requestDeserialize: deserialize_product_Product,
    responseSerialize: serialize_product_ProductList,
    responseDeserialize: deserialize_product_ProductList,
  },
  updateProduct: {
    path: '/auth.Inventory/UpdateProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.Product,
    responseType: product_pb.Product,
    requestSerialize: serialize_product_Product,
    requestDeserialize: deserialize_product_Product,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
  deleteProduct: {
    path: '/auth.Inventory/DeleteProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.Product,
    responseType: product_pb.Product,
    requestSerialize: serialize_product_Product,
    requestDeserialize: deserialize_product_Product,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
};

exports.InventoryClient = grpc.makeGenericClientConstructor(InventoryService);

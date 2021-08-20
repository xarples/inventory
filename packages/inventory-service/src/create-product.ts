import * as db from '@xarples/inventory-db'
import { grpc, Product } from '@xarples/inventory-protobuf'
import { getProductMessage, withAuthorization } from './utils'

export async function createProduct(
  call: grpc.ServerUnaryCall<Product, Product>,
  cb: grpc.sendUnaryData<Product>
) {
  try {
    const request = call.request.toObject()

    const created = await db.product.create({
      data: {
        category_id: request.categoryId,
        inventory_id: request.inventoryId,
        owner_id: request.ownerId,
        name: request.name,
        description: request.description
      }
    })

    const message = getProductMessage(created)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Product, Product>(createProduct, {
  scopes: ['products:write']
})

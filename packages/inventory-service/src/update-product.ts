import * as db from '@xarples/inventory-db'
import { grpc, Product } from '@xarples/inventory-protobuf'
import { getProductMessage, withAuthorization } from './utils'

export async function updateProduct(
  call: grpc.ServerUnaryCall<Product, Product>,
  cb: grpc.sendUnaryData<Product>
) {
  try {
    const request = call.request.toObject()

    const updated = await db.product.update({
      where: {
        id: request.id || undefined
      },
      data: {
        name: request.name
      }
    })

    const message = getProductMessage(updated)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Product, Product>(updateProduct, {
  scopes: ['products:write']
})

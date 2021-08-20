import * as db from '@xarples/inventory-db'
import { grpc, Product } from '@xarples/inventory-protobuf'
import { getProductMessage, withAuthorization } from './utils'

export async function deleteProduct(
  call: grpc.ServerUnaryCall<Product, Product>,
  cb: grpc.sendUnaryData<Product>
) {
  try {
    const request = call.request.toObject()
    const deleted = await db.product.delete({
      where: {
        id: request.id || undefined
      }
    })

    const message = getProductMessage(deleted)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Product, Product>(deleteProduct, {
  scopes: ['products:write']
})

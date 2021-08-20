import * as db from '@xarples/inventory-db'
import { grpc, Product } from '@xarples/inventory-protobuf'
import { getProductMessage, withAuthorization } from './utils'

export async function getProduct(
  call: grpc.ServerUnaryCall<Product, Product>,
  cb: grpc.sendUnaryData<Product>
) {
  try {
    const request = call.request.toObject()
    const found = await db.product.findUnique({
      where: {
        id: request.id || undefined
      }
    })

    if (!found) {
      cb({
        code: grpc.status.NOT_FOUND
      })

      return
    }

    const message = getProductMessage(found)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Product, Product>(getProduct, {
  scopes: ['products:read']
})

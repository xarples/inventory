import * as db from '@xarples/inventory-db'
import { grpc, Product, ProductList } from '@xarples/inventory-protobuf'
import { getProductMessage, withAuthorization } from './utils'

export async function listProducts(
  _: grpc.ServerUnaryCall<Product, ProductList>,
  cb: grpc.sendUnaryData<ProductList>
) {
  try {
    const list = await db.product.findMany()
    const message = new ProductList()

    message.setProductList(list.map(getProductMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Product, ProductList>(listProducts, {
  scopes: ['products:read']
})

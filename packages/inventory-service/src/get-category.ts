import * as db from '@xarples/inventory-db'
import { grpc, Category } from '@xarples/inventory-protobuf'
import { getCategoryMessage, withAuthorization } from './utils'

export async function getCategory(
  call: grpc.ServerUnaryCall<Category, Category>,
  cb: grpc.sendUnaryData<Category>
) {
  try {
    const request = call.request.toObject()
    const found = await db.category.findUnique({
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

    const message = getCategoryMessage(found)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Category, Category>(getCategory, {
  scopes: ['categories:read']
})

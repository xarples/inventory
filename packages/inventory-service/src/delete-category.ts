import * as db from '@xarples/inventory-db'
import { grpc, Category } from '@xarples/inventory-protobuf'
import { getCategoryMessage, withAuthorization } from './utils'

export async function deleteCategory(
  call: grpc.ServerUnaryCall<Category, Category>,
  cb: grpc.sendUnaryData<Category>
) {
  try {
    const request = call.request.toObject()
    const deleted = await db.category.delete({
      where: {
        id: request.id || undefined
      }
    })

    const message = getCategoryMessage(deleted)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Category, Category>(deleteCategory, {
  scopes: ['categories:write']
})

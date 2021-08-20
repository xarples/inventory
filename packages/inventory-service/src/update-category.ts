import * as db from '@xarples/inventory-db'
import { grpc, Category } from '@xarples/inventory-protobuf'
import { getCategoryMessage, withAuthorization } from './utils'

export async function updateCategory(
  call: grpc.ServerUnaryCall<Category, Category>,
  cb: grpc.sendUnaryData<Category>
) {
  try {
    const request = call.request.toObject()

    const updated = await db.category.update({
      where: {
        id: request.id || undefined
      },
      data: {
        name: request.name
      }
    })

    const message = getCategoryMessage(updated)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Category, Category>(updateCategory, {
  scopes: ['categories:write']
})

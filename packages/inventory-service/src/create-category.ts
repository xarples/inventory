import * as db from '@xarples/inventory-db'
import { grpc, Category } from '@xarples/inventory-protobuf'
import { getCategoryMessage, withAuthorization } from './utils'

export async function createCategory(
  call: grpc.ServerUnaryCall<Category, Category>,
  cb: grpc.sendUnaryData<Category>
) {
  try {
    const request = call.request.toObject()

    const created = await db.category.create({
      data: {
        owner_id: request.ownerId,
        name: request.name,
        description: request.description
      }
    })

    const message = getCategoryMessage(created)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Category, Category>(createCategory, {
  scopes: ['categories:write']
})

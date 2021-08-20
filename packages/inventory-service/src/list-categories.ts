import * as db from '@xarples/inventory-db'
import { grpc, Category, CategoryList } from '@xarples/inventory-protobuf'
import { getCategoryMessage, withAuthorization } from './utils'

export async function listCategories(
  _: grpc.ServerUnaryCall<Category, CategoryList>,
  cb: grpc.sendUnaryData<CategoryList>
) {
  try {
    const list = await db.category.findMany()
    const message = new CategoryList()

    message.setCategoryList(list.map(getCategoryMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Category, CategoryList>(listCategories, {
  scopes: ['categories:read']
})

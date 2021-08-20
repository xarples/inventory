import * as db from '@xarples/inventory-db'
import { grpc, Inventory } from '@xarples/inventory-protobuf'
import { getInventoryMessage, withAuthorization } from './utils'

export async function deleteInventory(
  call: grpc.ServerUnaryCall<Inventory, Inventory>,
  cb: grpc.sendUnaryData<Inventory>
) {
  try {
    const request = call.request.toObject()
    const deleted = await db.inventory.delete({
      where: {
        id: request.id || undefined
      }
    })

    const message = getInventoryMessage(deleted)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Inventory, Inventory>(deleteInventory, {
  scopes: ['inventories:write']
})

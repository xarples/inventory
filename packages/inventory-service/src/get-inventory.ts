import * as db from '@xarples/inventory-db'
import { grpc, Inventory } from '@xarples/inventory-protobuf'
import { getInventoryMessage, withAuthorization } from './utils'

export async function getInventory(
  call: grpc.ServerUnaryCall<Inventory, Inventory>,
  cb: grpc.sendUnaryData<Inventory>
) {
  try {
    const request = call.request.toObject()
    const found = await db.inventory.findUnique({
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

    const message = getInventoryMessage(found)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Inventory, Inventory>(getInventory, {
  scopes: ['inventories:read']
})

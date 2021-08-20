import * as db from '@xarples/inventory-db'
import { grpc, Inventory } from '@xarples/inventory-protobuf'
import { getInventoryMessage, withAuthorization } from './utils'

export async function updateInventory(
  call: grpc.ServerUnaryCall<Inventory, Inventory>,
  cb: grpc.sendUnaryData<Inventory>
) {
  try {
    const request = call.request.toObject()

    const updated = await db.inventory.update({
      where: {
        id: request.id || undefined
      },
      data: {
        name: request.name
      }
    })

    const message = getInventoryMessage(updated)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Inventory, Inventory>(updateInventory, {
  scopes: ['inventories:write']
})

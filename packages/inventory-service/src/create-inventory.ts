import * as db from '@xarples/inventory-db'
import { grpc, Inventory } from '@xarples/inventory-protobuf'
import { getInventoryMessage, withAuthorization } from './utils'

export async function createInventory(
  call: grpc.ServerUnaryCall<Inventory, Inventory>,
  cb: grpc.sendUnaryData<Inventory>
) {
  try {
    const request = call.request.toObject()

    const created = await db.inventory.create({
      data: {
        owner_id: request.ownerId,
        name: request.name,
        description: request.description
      }
    })

    const message = getInventoryMessage(created)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Inventory, Inventory>(createInventory, {
  scopes: ['inventories:write']
})

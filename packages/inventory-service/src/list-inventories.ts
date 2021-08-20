import * as db from '@xarples/inventory-db'
import { grpc, Inventory, InventoryList } from '@xarples/inventory-protobuf'
import { getInventoryMessage, withAuthorization } from './utils'

export async function listInventories(
  _: grpc.ServerUnaryCall<Inventory, InventoryList>,
  cb: grpc.sendUnaryData<InventoryList>
) {
  try {
    const list = await db.inventory.findMany()
    const message = new InventoryList()

    message.setInventoryList(list.map(getInventoryMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Inventory, InventoryList>(listInventories, {
  scopes: ['inventories:read']
})

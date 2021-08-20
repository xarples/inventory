import { Inventory } from '@xarples/inventory-db'
import { Inventory as InventoryMessage } from '@xarples/inventory-protobuf'

export function getInventoryMessage(item: Inventory): InventoryMessage {
  const message = new InventoryMessage()

  message.setId(item.id)
  message.setOwnerId(item.id)
  message.setName(item.name)
  message.setDescription(item.description!)
  message.setUpdatedAt(item.updated_at.toString())
  message.setCreatedAt(item.created_at.toString())

  return message
}

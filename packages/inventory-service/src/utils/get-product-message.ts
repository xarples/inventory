import { Product } from '@xarples/inventory-db'
import { Product as ProductMessage } from '@xarples/inventory-protobuf'

export function getProductMessage(item: Product): ProductMessage {
  const message = new ProductMessage()

  message.setId(item.id)
  message.setCategoryId(item.category_id)
  message.setInventoryId(item.inventory_id!)
  message.setOwnerId(item.owner_id)
  message.setName(item.name)
  message.setDescription(item.description!)
  message.setUpdatedAt(item.updated_at.toString())
  message.setCreatedAt(item.created_at.toString())

  return message
}

import { Category } from '@xarples/inventory-db'
import { Category as CategoryMessage } from '@xarples/inventory-protobuf'

export function getCategoryMessage(item: Category): CategoryMessage {
  const message = new CategoryMessage()

  message.setId(item.id)
  message.setCategoryId(item.category_id!)
  message.setInventoryId(item.inventory_id!)
  message.setOwnerId(item.id)
  message.setName(item.name)
  message.setDescription(item.description!)
  message.setUpdatedAt(item.updated_at.toString())
  message.setCreatedAt(item.created_at.toString())

  return message
}

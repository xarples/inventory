import { IAMClient, grpc } from '@xarples/inventory-protobuf'

const host = process.env.GRPC_SERVER_HOST || '127.0.0.1'
const port = process.env.GRPC_SERVER_PORT || 5001
const client = new IAMClient(
  `${host}:${port}`,
  grpc.credentials.createInsecure()
)

export default client

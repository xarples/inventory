import { grpc } from '@xarples/inventory-protobuf'
import { verify, verifyScopes } from '@xarples/accounts-jwt-verifier'

type Fn<RequestType, ResponseType> = (
  call: grpc.ServerUnaryCall<RequestType, ResponseType>,
  cb: grpc.sendUnaryData<ResponseType>
) => Promise<void> | void

interface Options {
  scopes: string[]
}

export function withAuthorization<RequestType, ResponseType>(
  fn: Fn<RequestType, ResponseType>,
  options: Options
) {
  return async function withAuthorizationHandler(
    call: grpc.ServerUnaryCall<RequestType, ResponseType>,
    cb: grpc.sendUnaryData<ResponseType>
  ) {
    const metadata = call.metadata.getMap()

    if (!metadata.authorization) {
      cb({
        code: grpc.status.INVALID_ARGUMENT,
        name: 'invalid_request',
        message: 'Invalid required parameter authorization'
      })

      return
    }

    const token = (metadata.authorization as string).split(' ')?.[1]

    const { payload } = await verify(token, {
      audience: 'http://localhost:5004'
    })

    if (!payload) {
      cb({
        code: grpc.status.UNAUTHENTICATED,
        name: 'invalid_token',
        message:
          'The access token provided is expired, revoked, malformed, or invalid for other reasons.'
      })

      return
    }

    if (!payload?.scopes) {
      cb({
        code: grpc.status.PERMISSION_DENIED,
        name: 'insufficient_scope',
        message:
          'The request requires higher privileges than provided by the access token.'
      })

      return
    }

    const hasScopes = verifyScopes(payload?.scopes as string[], options.scopes)

    if (!hasScopes) {
      cb({
        code: grpc.status.PERMISSION_DENIED,
        name: 'insufficient_scope',
        message:
          'The request requires higher privileges than provided by the access token.'
      })

      return
    }

    fn(call, cb)
  }
}

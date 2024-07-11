declare module 'json-server' {
  import { RequestHandler, Router } from 'express'

  interface JsonServer {
    create: () => import('express').Application
    router: (source: string | object) => Router
    defaults: (options?: object) => RequestHandler[]
  }

  const jsonServer: JsonServer
  export default jsonServer
}

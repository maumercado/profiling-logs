'use strict'

const fastify = require('fastify')({logger: true})

fastify.get('/', async (req) => {
  return {hello: 'world'}
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on 3000`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()


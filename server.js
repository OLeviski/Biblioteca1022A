import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const database = new DatabaseMemory()
const server = fastify()

server.get('/', () => {
    return 'Rota padrão'
})

server.post('/livro', (request, reply) => {
   // return 'cadastrar'
    database.create({
        titulo: 'Livro 01',
        autor: 'Autor 01',
        npaginas: 400,
    })

    return reply.status(201).send
})

server.get('/livro', () => {
    return 'Ler Livro'
})
server.listen({
    port: 3333,
})
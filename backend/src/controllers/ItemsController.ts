import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*')
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title, //192.168.1.105:19000
                image_url: `http://192.168.1.105:3333/uploads/${item.image}`
            }
        })
    
        return response.json(serializedItems)
    }
}

export default ItemsController
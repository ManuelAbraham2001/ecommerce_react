import products from '../products.json'

const task = new Promise((resp) => {
    resp(products)
},2000)

export const getItem = () => {
    return task
}
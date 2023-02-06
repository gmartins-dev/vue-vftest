import api from './api'

export default {
  getProducts() {
    return api().get('products.json?limit=6')
  },
}

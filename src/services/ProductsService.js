import { apiRoutes } from "../api-config/apiRoutes";
import { BASEURL, httpClient } from "../api-config/httpClient";

const ProductsService = {
  getProducts: async (page, limit) => {
    var endpoint = apiRoutes.productList;
    if (page && limit) {
      endpoint = `${endpoint}?page=${page}&limit=${limit}`;
    } else {
      endpoint = `${endpoint}?page=1&limit=100000000`;
    }
    const response = await httpClient.get(endpoint);
    if (response) {
      const listOfProducts = response.data.products;
      if (listOfProducts) {
        const productsWithDetails = await Promise.all(
          listOfProducts.map(async (product) => {
            const response = await httpClient.get(product.product_url);
            const productDetails = {
              key: response.data.photo_url,
              name: response.data.name,
              category_url: response.data.category_url,
              price: response.data.price,
              photo: response.data.photo_url
                ? BASEURL + response.data.photo_url
                : null,
            };
            return productDetails;
          })
        );
        return productsWithDetails;
      }
      return null;
    }
    return null;
  },
};

export default ProductsService;

import { apiRoutes } from "../api-config/apiRoutes";
import { httpClient } from "../api-config/httpClient";

const CategoryService = {
  getCategories: async () => {
    const response = await httpClient.get(apiRoutes.categoryList);
    if (response) {
      return response.data;
    }
    return null;
  },
};

export default CategoryService;

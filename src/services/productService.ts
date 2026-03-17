import apiClient from '../utils/api/apiClient';

/**
 * Service for product-related API calls
 */
export const productService = {
  /**
   * Fetch all products
   * @param page - page number for pagination
   */
  fetchProducts: async (page: number = 1) => {
    return apiClient.get<any>('products', { page });
  },

  /**
   * Get product detail by ID
   * @param id - product ID
   */
  getProductDetail: async (id: string | number) => {
    return apiClient.get<any>(`products/${id}`);
  },

  /**
   * Login user (example POST)
   * @param credentials - user login data
   */
  login: async (credentials: any) => {
    return apiClient.post<any>('login', credentials);
  },
};

export default productService;

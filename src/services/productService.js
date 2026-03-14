import api from '../utils/api';

/**
 * Service for handling product-related API calls
 */
export const productService = {
  /**
   * Fetch all products with optional filters
   * @param {Object} params - Query parameters (category, page, limit, etc.)
   */
  getAllProducts: (params) => {
    return api.get('/product/get-products', { params });
  },

  /**
   * Fetch a single product by ID or Slug
   * @param {string} id - Product ID or slug
   */
  getProductById: (id) => {
    return api.get(`/product/get-product/${id}`);
  },

  /**
   * Fetch all product categories
   */
  getAllCategories: () => {
    return api.get('/category/get-all-categories');
  },

  /**
   * Search products
   * @param {string} query - Search term
   */
  searchProducts: (query) => {
    return api.get('/product/search', { params: { query } });
  }
};

export default productService;

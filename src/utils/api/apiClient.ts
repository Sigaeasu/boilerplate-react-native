import { AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosInstance';

/**
 * Reusable API Client for common operations
 */
const apiClient = {
  /**
   * GET Request
   * @param endpoint - endpoint path
   * @param params - query parameters
   */
  async get<T>(endpoint: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axiosInstance.get<T>(endpoint, {
        ...config,
        params,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * POST Request
   * @param endpoint - endpoint path
   * @param data - request body
   */
  async post<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axiosInstance.post<T>(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * PUT Request
   * @param endpoint - endpoint path
   * @param data - request body
   */
  async put<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axiosInstance.put<T>(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * DELETE Request
   * @param endpoint - endpoint path
   */
  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axiosInstance.delete<T>(endpoint, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiClient;

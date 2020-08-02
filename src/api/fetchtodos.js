import * as axios from "axios";
const instance = axios.create({
  baseURL: "https://test.megapolis-it.ru/api/list/",
  timeout: 1000,
});

export const FetchTodos = async (method, options = {}) => {
  try {
    const response = await instance({
      method: method,
      ...options,
    });
    return response.data;
  } catch (e) {}
};

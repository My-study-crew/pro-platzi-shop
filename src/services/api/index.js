const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  products: {
    addProducts: `${API}/api/${VERSION}/products`,
    allProducts: `${API}/api/${VERSION}/products`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    postUsers: `${API}/api/${VERSION}/users`,
    usersAvailability: `${API}/api/${VERSION}/users/is-available`,
  },
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  categories: {
    getCategories: `${API}/api/${VERSION}/categories`,
    postCategories: `${API}/api/${VERSION}/categories`,
    updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;

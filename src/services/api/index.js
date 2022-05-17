const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  products: {
    fetchProducts: `${API}/api/${VERSION}/products`,
    postProducts: `${API}/api/${VERSION}/products`,
    getProducts: (id) => `${API}/api/${VERSION}/products/${id}`,
    putProducts: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProducts: (id) => `${API}/api/${VERSION}/products/${id}`,
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
    fetchCategories: `${API}/api/${VERSION}/categories`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategories: (id) => `${API}/api/${VERSION}/categories/${id}`,
    putCategories: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getMore: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;

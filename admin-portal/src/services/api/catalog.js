// Backend-ready placeholders. Replace these mock returns with HTTP calls when the API exists.
export const getProducts = async () => [];
export const createProduct = async (product) => product;
export const updateProduct = async (id, product) => ({ id, ...product });
export const deleteProduct = async () => undefined;

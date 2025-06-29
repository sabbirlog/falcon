import clientManagementInstance from "./config";

export const getProducts = async () => {
    const res = await clientManagementInstance().get('/shop/products')

    return res?.data;
}

export const getSingleProduct = async (name: string) => {
    const res = await clientManagementInstance().get(`/product/${name}`)

    return res?.data;
}

export const getCategories = async () => {
    const res = await clientManagementInstance().get('/categories')

    return res?.data;
}
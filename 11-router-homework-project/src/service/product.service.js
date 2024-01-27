import { api } from "./baseurl";

const GetProductData = async (arg) => {
  try {
    const { data } = await api.get(arg);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default GetProductData;

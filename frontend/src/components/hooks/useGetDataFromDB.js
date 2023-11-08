import { BASE_URL } from "../utilities/constant/Applevel/constant";

const useGetDataFromDB = () => {
  return async (url) => {
    const res = await fetch(`${BASE_URL}/${url}`, {
      method: "GET",
      credentials: "include",
      headers: { "content-type": "application/json" },
    });

    const data = await res.json();

    return data;
  };
};

export default useGetDataFromDB;

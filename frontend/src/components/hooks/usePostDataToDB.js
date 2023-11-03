import { BASE_URL } from "../utilities/constant/Applevel/constant";

const usePostDataToDB = () => {
  return async (url, dataObj) => {
    try {
      const res = await fetch(`${BASE_URL}/${url}`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(dataObj),
        headers: { "content-type": "application/json" },
      });

      const data = await res.json();
      return data;
    } catch (err) {
      return {
        success: false,
        statusCode: 400,
        message: "Something Went Wrong",
      };
    }
  };
};

export default usePostDataToDB;

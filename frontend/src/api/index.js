import axios from "axios";

export async function getFilteredDataApi(filters) {
  try {
    const body = JSON.stringify({ filters });
    const token = localStorage.getItem("accessToken");
    console.log("body", body);
    const response = await axios.post(
      "http://localhost:5001/portfolio/add",
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("response in body  ", response);
    return response;
  } catch (e) {
    console.log("errorr", e);
  }
}

export async function getAllStocksApi(filters) {
  try {
    // const body = JSON.stringify({ filters });
    // const token = localStorage.getItem("accessToken");
    // console.log("body", body);
    const response = await axios.get(
      "http://localhost:8000/filter"
      // body,
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //     // Authorization: `Bearer ${token}`,
      //   },
      // }
    );
    console.log("response in body  ", response);
    return response;
  } catch (e) {
    console.log("errorr", e);
  }
}

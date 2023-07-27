import axios from "axios";

const END_POINT = `${process.env.API_URL}/json`;

const authorsfindAll = async () => {
  try {
    const result = await axios({
      method: "get",
      url: `${END_POINT}/authors.json`,
    });
    return await result.data;
  } catch (err) {
    throw err;
  }
};

export { authorsfindAll };

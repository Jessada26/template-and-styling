import axios from "axios";

const END_POINT = `${process.env.API_URL}/json`;

const postFindAll = async () => {
  try {
    const result = await axios({
      method: "get",
      url: `${END_POINT}/posts.json`,
    });
    return result.data;
  } catch (err) {
    throw err;
  }
};

export { postFindAll };

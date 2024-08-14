import axios from "axios";


const GetImage = async (image) => {

  const formData = new FormData();
  formData.append("avatar", image);
  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/image`, formData);
  console.log(data)
  return data
};

export default GetImage;

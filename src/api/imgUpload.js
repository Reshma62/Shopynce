import axios from "axios";

export const imageUplaod = async (img) => {
  const fromData = new FormData();
  fromData.append("image", img);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_UPLOAD_KEY
    }`,
    fromData
  );
  return data.data.display_url;
};

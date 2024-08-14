import { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";
import GetImage from "./GetImage";
import axios from "axios";
import PropTypes from 'prop-types'
import GetImgbb from "./GetImgbb";
const UserForm = ({ refetch }) => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState("Upload Image");
  const handleImage = (image) => {
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name);
  };
  const handlePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Je");
    const details = e.target.details.value;
    const image = e.target.image.files[0];
    if (!image) {
      toast.error("Please Upload Image");
      setLoading(false);
      return;
    }
    try {
      const photo = await GetImgbb(image);
      console.log(photo)
      const posts = {
        details,
        image: photo,
        time: new Date(),
      };
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        posts
      );
      if (data.insertedId) {
        toast.success("Post Added Successfully!!!");
        setImagePreview("");
        setImageText("Upload Image");
        refetch();

        e.target.reset();
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex gap-6 flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
        <div className=" flex-1 flex items-center">
          <div>
            <h2 className="text-7xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Share Your Moments
            </h2>
            <p className="my-6  text-slate-600">
              Welcome to our platform where you can share your favorite moments
              effortlessly! Use the form below to post your thoughts and upload
              an image. The image will only accept file types like JPG, PNG, or
              GIF. Each uploaded image will be stored on a CDN service for
              optimal performance and accessibility.
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center p-6 border rounded-lg border-[#F43F5E] mt-8 lg:mt-0 min-h-72">
          <form onSubmit={handlePost} className="space-y-4 w-full ">
            <div>
              <label className="sr-only">Message</label>

              <textarea
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500  text-gray-900"
                placeholder="Whats on your mind?"
                rows="8"
                id="message"
                name="details"
                required
              ></textarea>
            </div>

            <div className="flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <div className="flex items-center">
                <input
                  id="file-upload"
                  onChange={(e) => handleImage(e.target.files[0])}
                  type="file"
                  className="hidden"
                  name="image"
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center px-4 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg cursor-pointer"
                >
                  <span className="mr-2">{imageText}</span>

                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </label>
              </div>
              {imagePreview && <img className="h-12 w-12" src={imagePreview} />}
            </div>

            <div className="  inline-block justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-block w-full   rounded-lg bg-rose-500 px-8 py-3 font-medium text-white disabled:bg-rose-400 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <ImSpinner3 size={24} className="animate-spin m-auto" />
                ) : (
                  "Post"
                )}
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

UserForm.propTypes = {
  refetch: PropTypes.func
}

export default UserForm;

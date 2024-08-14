import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import ImageCard from "./ImageCard";

import { Bars } from "react-loader-spinner";

const Gallery = () => {
  const { data: gallerys = [], isLoading } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://gawsiasaree.vercel.app/gallery"
      );
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        ({" "}
        <Bars
          height="80"
          width="80"
          color="#F43F5E"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        )
      </div>
    );
  return (
    <div className="gap-2 sm:gap-3 columns-2 sm:columns-3 md:columns-4 ">
      {gallerys.map((item, index) => (
        <ImageCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Gallery;

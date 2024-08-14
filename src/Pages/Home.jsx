import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../Component/useAxiosCommon";
import UserForm from "../Component/UserForm";
import Posts from "../Component/Posts";

const Home = () => {
  const axiosCommon = useAxiosCommon();
  const {
    data: posts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/posts");
      return data;
    },
  });
  console.log(posts)
  return (
    <div className="space-y-16">
      <UserForm refetch={refetch} />
      <Posts posts={posts} />
    </div>
  );
};

export default Home;

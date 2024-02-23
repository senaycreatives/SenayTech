import { useQuery } from "@tanstack/react-query";
import axios from "axios";



// /fetchUsers
export default function UseFetchFeaturedBlog() {


  const fetchData = async () => {
    
    const res = await axios.get(
      `https://api.senaycreatives.com/blog/featured`,
    );

    return res;
  };

  return useQuery({
    queryKey: ["fetchfeatureblog"],
    queryFn: () => fetchData(),
   
  });
}

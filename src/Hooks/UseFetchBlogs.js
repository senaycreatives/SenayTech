import { useQuery } from "@tanstack/react-query";
import axios from "axios";



// /fetchUsers
export default function UseFetchBlogs() {


  const fetchData = async () => {
    
    const res = await axios.get(
      `https://app.ethiopiantheaterassociation.com/blog`
    );

    return res;
  };

  return useQuery({
    queryKey: ["fetchblogs"],
    queryFn: () => fetchData(),
   
  });
}

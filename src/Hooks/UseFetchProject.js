import { useQuery } from "@tanstack/react-query";
import axios from "axios";



// /fetchUsers
export default function UseFetchProject() {


  const fetchData = async () => {
    
    const res = await axios.get(
      `https://api.senaycreatives.com/project`
    );

    return res;
  };

  return useQuery({
    queryKey: ["fetchproject"],
    queryFn: () => fetchData(),
   
  });
}

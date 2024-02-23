import { useQuery } from "@tanstack/react-query";
import axios from "axios";



// /fetchUsers
export default function UseFetchTeams() {


  const fetchData = async () => {
    
    const res = await axios.get(
      `https://api.senaycreatives.com/admin`
    );

    return res;
  };

  return useQuery({
    queryKey: ["fetchblog"],
    queryFn: () => fetchData(),
   
  });
}

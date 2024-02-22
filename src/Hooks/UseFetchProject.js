import { useQuery } from "@tanstack/react-query";
import axios from "axios";



// /fetchUsers
export default function UseFetchProject() {


  const fetchData = async () => {
    
    const res = await axios.get(
      `https://crabby-frog-swimsuit.cyclic.app/project`
    );

    return res;
  };

  return useQuery({
    queryKey: ["fetchproject"],
    queryFn: () => fetchData(),
   
  });
}

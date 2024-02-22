import { useQuery } from "@tanstack/react-query";
import axios from "axios";



// /fetchUsers
export default function UseFetchCatagory() {


  const fetchData = async () => {
    
    const res = await axios.get(
      `https://app.ethiopiantheaterassociation.com/catagory`,
    );

    return res;
  };

  return useQuery({
    queryKey: ["fetchcatagory"],
    queryFn: () => fetchData(),
   
  });
}

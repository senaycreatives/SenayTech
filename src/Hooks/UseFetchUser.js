import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function UsefetchUserDetails(userID) {
  const queryClient = useQueryClient();

  const fetchData = async (id) => {
    const res = await axios.get(
      `https://api.senaycreatives.com/admin/${id}`
    );

    return res;
  };

  return useQuery({
    queryKey: ["fetchUsers", userID],
    queryFn: () => fetchData(userID),
    onSuccess: () => {
      queryClient.invalidateQueries("fetchUsers");
    },
  });
}
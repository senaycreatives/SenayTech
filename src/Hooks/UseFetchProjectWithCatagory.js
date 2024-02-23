import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function UseFetchProjectWithCatagory(ProjectPostId) {
  const queryClient = useQueryClient();

  const fetchData = async (id) => {
    const res = await axios.get(
      `https://api.senaycreatives.com/Project/catagory/${id}`
    );

    return res;
  };

  return useQuery({
    queryKey: ["fetchProjectswithcatagory", ProjectPostId],
    queryFn: () => fetchData(ProjectPostId),
    enabled: !!ProjectPostId,
    onSuccess: () => {
      queryClient.invalidateQueries("fetchProjectswithcatagory");
    },
  });
}
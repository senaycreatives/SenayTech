import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function UseFetchBlogDetails(blogPostId) {
  const queryClient = useQueryClient();

  const fetchData = async (id) => {
    const res = await axios.get(
      `https://app.ethiopiantheaterassociation.com/blog/${id}`
    );

    return res;
  };

  return useQuery({
    queryKey: ["fetchblogs", blogPostId],
    queryFn: () => fetchData(blogPostId),
    onSuccess: () => {
      queryClient.invalidateQueries("fetchblogs");
    },
  });
}
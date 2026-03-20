import { useParams } from "react-router-dom";

const useGetChatId = () => {
  const params = useParams<{ chatId?: string }>();
  const chatId = params.chatId || null;
  return chatId;
};

export default useGetChatId;

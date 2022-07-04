import { useMutation } from "react-query";
import useMainVotingContract from "./useMainVotingContract";

export interface UseAddVotingPayload {
  title: string;
  description: string;
}

const useAddVoting = () => {
  const contract = useMainVotingContract();

  return useMutation(async ({ title, description }: UseAddVotingPayload) => {
    await contract.addVoting(title, description);
  });
};

export default useAddVoting;
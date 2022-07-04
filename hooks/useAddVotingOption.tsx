import { useMutation } from "react-query";
import useVotingContract from "./useVotingContract";

export interface UseAddVotingOptionPayload {
  description: string;
}

const useAddVotingOption = (id: string) => {
  const contract = useVotingContract(id);

  return useMutation(async ({ description }: UseAddVotingOptionPayload) => {
    await contract.addVotingOption(description);
  });
};

export default useAddVotingOption;
import { useQuery } from "react-query";
import useMainVotingContract from "./useMainVotingContract";


const useGetBallots = () => {
  const contract = useMainVotingContract();

  return useQuery(["ballots", { chainId: contract.chainId }], () =>
    contract.getBallots()
  );
};

export default useGetBallots;

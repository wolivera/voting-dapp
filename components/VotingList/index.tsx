import Loading from "../Loading";
import { useQuery } from "react-query";
import useMainVotingContract from "../../hooks/useMainVotingContract";
import Link from "next/link";
import NewBallot from "./New";
import useVotingContract from "../../hooks/useVotingContract";
import { useContract } from "wagmi";
import VotingABI from "../../artifacts/contracts/Voting.sol/Voting.json";
import { useEffect } from "react";

const VotingList = () => {
  const ballotContract = useMainVotingContract();

  const { data: ballots } = useQuery(["ballots", { chainId: ballotContract.chainId }], () =>
    ballotContract.getBallots()
  );
  console.log("count is ", ballots);

  if (ballots && ballots.length) {
    const votingContract = useVotingContract(ballots);
    
    const { data: votingList } = useQuery(
      ['votingList', { ballots, chainId: ballotContract.chainId }],
      () => votingContract.getVotingList(ballots),
    );
    console.log("voting is ", votingList);
  }

  const polls = [
    {
      id: 1,
      name: "What is the best day of the week?",
      description: "Lets see what is the best day of the week",
      isOpen: true,
    },
    {
      id: 1,
      name: "What is the best month?",
      description: "Lets see what is the best month",
      isOpen: false,
    },
    {
      id: 1,
      name: "Best animal?",
      description: "What is the best Animal?",
      isOpen: true,
    },
  ];

  return (
    <div className="text-center flex relative justify-center items-center flex-col m-auto mt-[60px]">
      <div className="prose mb-10">
        <h1>All Polls</h1>
      </div>
      <div className="absolute right-0 top-0">
        <label htmlFor="new" className="btn modal-button">New Ballot</label>
      </div>
      <input type="checkbox" id="new" className="modal-toggle" />
      <NewBallot />
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {polls.map((p, i) => (
              <tr tabIndex={i}>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>
                  <span
                    className={`badge badge-sm ${
                      p.isOpen ? "badge-success" : "badge-warning"
                    }`}
                  >
                    {p.isOpen ? "Open" : "Closed"}
                  </span>
                </td>
                <td>
                  <Link href={`/ballots/${i}`}>
                    <button className="btn btn-primary btn-xs">View</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VotingList;

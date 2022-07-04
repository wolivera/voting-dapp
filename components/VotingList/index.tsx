import Link from "next/link";
import NewBallot from "./New";
import { LoadingCover } from "../Loading";
import useGetBallots from "../../hooks/useGetBallots";
import { useEffect } from "react";

const VotingList = () => {
  const query = useGetBallots();

  if (query.isLoading) {
    return <LoadingCover />
  }

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
              <th>Explore</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {query.data?.map((p, i) => (
              <tr tabIndex={i} key={i}>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>
                  <a href={`https://etherscan.io/contracts/${p.voting}`} target="_blank">
                    <button className="btn btn-primary btn-xs">View</button>
                  </a>
                </td>
                <td>
                  <Link href={`/ballots/${p.voting}`}>
                    <button className="btn btn-success btn-xs">Vote</button>
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

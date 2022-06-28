import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import useVotingContract from "../../hooks/useVotingContract";
import { LoadingCover } from "../Loading";
import NewOption from "./NewOption";

interface Params {
  id: string;
}

const Details = ({ id }: Params) => {
  console.log("params", id);

  const contract = useVotingContract(id);
  const { data: voting } = useQuery(
    ["details", { chainId: contract.chainId }],
    () => contract.getDetails()
  );
  console.log("voting is ", voting);
  console.log("id", id);

  if (!voting) return <LoadingCover />;

  return (
    <div className="text-center flex justify-center items-center flex-col m-auto mt-[60px] relative">
      <div className="prose">
        <h1>{voting?.name}</h1>
        <h4>{voting?.description}</h4>
      </div>

      {!voting?.options?.length && (
        <div className="mt-8">
          <label htmlFor="new-option" className="btn modal-button">
            Add Option
          </label>
          <input type="checkbox" id="new-option" className="modal-toggle" />
          <NewOption />
        </div>
      )}
      <div className="flex mt-8">
        {voting?.options?.map((o) => (
          <div className="card w-96 bg-base-100 shadow-xl mr-3">
            <div className="card-body">
              <h2 className="card-title">{o.name}</h2>
              <div>
                Votes
                <div className="ml-3 badge badge-primary">{o.voteCount}</div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Vote</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;

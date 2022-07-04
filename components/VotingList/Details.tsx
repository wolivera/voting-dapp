import toast from "react-hot-toast";
import { useQuery } from "react-query";
import useVotingContract from "../../hooks/useVotingContract";
import { LoadingCover } from "../Loading";
import NewOption from "./NewOption";

interface Params {
  id: string;
}

const Details = ({ id }: Params) => {

  const contract = useVotingContract(id);
  const { data: voting } = useQuery(
    ["details", { chainId: contract.chainId }],
    () => contract.getDetails()
  );

  if (!voting) return <LoadingCover />;

  const onSubmit = () => {
    alert('Voted For')
  };

  return (
    <div className="text-center flex justify-center items-center flex-col m-auto mt-[60px] relative">
      <div className="prose">
        <h1>{voting?.name}</h1>
        <h4>{voting?.description}</h4>
      </div>

      <div className="mt-8">
        <label htmlFor="new-option" className="btn modal-button">
          Add Option
        </label>
        <input type="checkbox" id="new-option" className="modal-toggle" />
        <NewOption id={id} />
      </div>

      <div className="flex mt-8">
        {voting?.options?.map((o: any) => (
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

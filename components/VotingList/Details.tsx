import { useQuery } from "react-query";
import useMainVotingContract from "../../hooks/useMainVotingContract";

const Details = () => {
  const contract = useMainVotingContract();
  // const { data: name } = useQuery(["name", { chainId: contract.chainId }], () =>
  //   contract.getName()
  // );
  // const { data: description } = useQuery(
  //   ["description", { chainId: contract.chainId }],
  //   () => contract.getDescription()
  // );
  // console.log("name i s", description);

  const options = [
    {
      id: 1,
      name: "Lunes",
      voteCount: 2,
    },
    {
      id: 1,
      name: "Martes",
      voteCount: 0,
    },
    {
      id: 1,
      name: "Miercoles",
      voteCount: 4,
    },
  ];

  return (
    <div className="text-center flex justify-center items-center flex-col m-auto mt-[60px]">
      <div className="prose">
        {/* <h1>{name}</h1>
        <h4>{description}</h4> */}
      </div>
      <div className="flex mt-8">
        {options.map((o) => (
          <div className="card w-96 bg-base-100 shadow-xl mr-3">
            <div className="card-body">
              <h2 className="card-title">{o.name}</h2>
              <div>Votes<div className="ml-3 badge badge-primary">{o.voteCount}</div></div>
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

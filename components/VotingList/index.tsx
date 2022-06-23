import Loading from "../Loading";
import { useQuery } from "react-query";
import useVotingContract from "../../hooks/useVotingContract";
import Link from "next/link";

const VotingList = () => {
  const contract = useVotingContract();
  const { data: name } = useQuery(["name", { chainId: contract.chainId }], () =>
    contract.getName()
  );
  const { data: description } = useQuery(
    ["description", { chainId: contract.chainId }],
    () => contract.getDescription()
  );
  console.log("name i s", description);

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
    <div className="text-center flex justify-center items-center flex-col m-auto mt-[60px]">
      <div className="prose mb-10">
        <h1>All Polls</h1>
      </div>
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
                  <Link href={`/polls/${i}`}>
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

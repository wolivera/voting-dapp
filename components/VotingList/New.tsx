import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAddVoting from "../../hooks/useAddVoting";

const NewBallot = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState({ title: '', description: '' });
  const mutation = useAddVoting();

  const onSubmit = () => {
    console.log(data);
    mutation
      .mutateAsync({
        title: data.title,
        description: data.description,
      })
      .then(() => {
        toast.success('Voting created successfully', { id: 'VOTING_CREATED' });
        (document.getElementById("new") as any).checked = false;
        setData({ title: '', description: '' });
      })
      .catch((err) => {
        console.error(err);
        toast.error('Oops there was an error creating your voting', { id: 'VOTING_ERROR' })
      });
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-box relative">
          <label
            htmlFor="new"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-5">Create a new ballot</h3>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              {...register("title", { required: true })}
              onChange={(e) => setData({ description: data.description, title: e.target.value })}
              type="text"
              placeholder="Enter a title for your ballot"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="mb-3 prose-sm text-left mt-1 text-red-500">
              {errors.title && <span>This field is required</span>}
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              {...register("description", { required: true })}
              onChange={(e) => setData({ title: data.title, description: e.target.value })}
              type="text"
              placeholder="Enter a description for your ballot"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="mb-3 prose-sm text-left mt-1 text-red-500">
              {errors.description && <span>This field is required</span>}
            </div>
          </div>
          <p className="prose prose-sm my-5 text-left italic prose-zinc">
            You can add options to your ballot after creating it
          </p>
          <input type="submit" className="btn float-right" />
        </div>
      </form>
    </div>
  );
};

export default NewBallot;

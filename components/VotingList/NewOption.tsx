import { useForm } from "react-hook-form";

const NewOption = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="modal">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-box w-[315px] relative">
          <label
            htmlFor="new-option"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-5">Add a new option</h3>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              {...register("description", { required: true })}
              type="text"
              placeholder="Enter a description for your option"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="mb-3 prose-sm text-left mt-1 text-red-500">
              {errors.description && <span>This field is required</span>}
            </div>
          </div>
          <input type="submit" className="btn float-right" />
        </div>
      </form>
    </div>
  );
};

export default NewOption;

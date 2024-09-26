import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto max-w-[80%] mt-10 lg:max-w-[1140px] grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="form-control w-full">
            <p className="input-label-text">Full Name</p>
            <input
              type="text"
              placeholder="Full Name"
              className="input  w-full "
              name="fullName"
              {...register("fullName", { required: true })}
            />
            <br />
            {errors.fullName && (
              <span className="error-text">This field is required</span>
            )}
          </label>
          <label className="form-control w-full">
            <p className="input-label-text">Father Name</p>
            <input
              type="text"
              placeholder="Father Name"
              className="input  w-full "
              name="fatherName"
              {...register("fatherName", { required: true })}
            />
            <br />
            {errors.fatherName && (
              <span className="error-text">This field is required</span>
            )}
          </label>
          <label className="form-control w-full">
          <p className="input-label-text">Email</p>
            <input
              type="email"
              placeholder="Email"
              className="input  w-full "
              name="email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="error-text">This field is required</span>
            )}
          </label>
          <label className="form-control w-full">
          <p className="input-label-text">Phone Number</p>
            <input
              type="text"
              placeholder="Phone Number"
              className="input  w-full "
              name="phoneNumber"
              {...register("phoneNumber", { required: true })}
            />
            <br />
            {errors.phoneNumber && (
              <span className="error-text">This field is required</span>
            )}
          </label>
          <label className="form-control w-full">
          <p className="input-label-text">National ID (CNIC)</p>
            <input
              type="number"
              placeholder="CNIC"
              className="input  w-full "
              name="cnic"
              {...register("cnic", { required: true })}
            />
            <br />
            {errors.cnic && (
              <span className="error-text">This field is required</span>
            )}
          </label>
          <label className="form-control w-full">
          <p className="input-label-text">Date of Birth</p>
            <input
              type="date"
              className="input  w-full "
              name="dateOfBirth"
              {...register("dateOfBirth", { required: true })}
            />
            <br />
            {errors.dateOfBirth && (
              <span className="error-text">This field is required</span>
            )}
          </label>
          <label className="form-control w-full">
          <p className="input-label-text">Gender</p>
            <select
              className="input  w-full "
              name="gender"
              {...register("gender", { required: true })}
            >
              <option value="" disabled="">
                Select an option
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br />
            {errors.gender && (
              <span className="error-text">This field is required</span>
            )}
          </label>
          <label className="form-control w-full">
          <p className="input-label-text">Do you have Laptop</p>
            <select
              className="input  w-full "
              name="hasLaptop"
              {...register("hasLaptop", { required: true })}
            >
              <option value="" disabled="">
                Select an option
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <br />
            {errors.hasLaptop && (
              <span className="error-text">This field is required</span>
            )}
          </label>
        </div>
        <div className="mx-auto max-w-[80%] mt-8 lg:max-w-[1140px] grid gap-6">
          <label className="form-control w-full">
          <p className="input-label-text">Address</p>
            <input
              type="text"
              placeholder="Address"
              className="input  w-full "
              name="address"
              {...register("address", { required: true })}
            />
            <br />
            {errors.address && (
              <span className="error-text">This field is required</span>
            )}
          </label>
          <label className="form-control w-full">
          <p className="input-label-text">Last Qualification</p>
            <select
              className="input  w-full "
              name="lastQualification"
              {...register("lastQualification", { required: true })}
            >
              <option value="" disabled="">
                Select an option
              </option>
              <option value="matric">Matric</option>
              <option value="intermediate">Intermediate</option>
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
            </select>
            <br />
            {errors.lastQualification && (
              <span className="error-text">This field is required</span>
            )}
          </label>
          <label className="form-control w-full">
          <p className="input-label-text">Profile Image</p>
            <input
              type="file"
              className="file-input file- w-full "
              name="profileImage"
              {...register("profileImage", { required: true })}
            />
            <br />
            {errors.profileImage && (
              <span className="error-text">This field is required</span>
            )}
            <ul className="list-disc mt-5 ml-5">
              <li>With white or blue background</li>
              <li>File type: jpg, jpeg, png</li>
              <li>Upload your recent passport size picture</li>
              <li>Your face should be clearly visible without any glasses</li>
            </ul>
          </label>
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white text-[20px] font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;

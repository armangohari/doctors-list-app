"use client";

import { axiosBase } from "@/axios/config";
import { cn } from "@/utils/helpers";
import { ChangeEvent, useState } from "react";

type CreateProfileFormType = {
  name: string;
  email: string;
  specialization: string;
};

export default function CreateProfileForm() {
  const [formState, setFormState] = useState<CreateProfileFormType>({
    name: "",
    email: "",
    specialization: "",
  });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit() {
    const newDoctor = {
      name: formState.name,
      email: formState.email,
      specialization: formState.specialization,
    };
    await axiosBase
      .post("/doctors", newDoctor)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <form
      className="flex w-full min-w-[340px] flex-col gap-8 rounded-2xl bg-green-500/10 p-8 xl:max-w-96"
      onSubmit={handleSubmit}
    >
      {/* Form Title */}
      <h1 className="my-4 text-center text-3xl font-extrabold">
        Create Profile
      </h1>

      {/* Form Inputs */}
      <div className="flex flex-col gap-2">
        <label className="ml-1 font-semibold" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          className={cn(
            "rounded-lg bg-white p-3 font-light transition-all",
            "focus:px-4 focus:font-normal focus:outline-none",
          )}
          type="text"
          name="name"
          placeholder="Andrew Huberman"
          value={formState.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="ml-1 font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className={cn(
            "rounded-lg bg-white p-3 font-light transition-all",
            "focus:px-4 focus:font-normal focus:outline-none",
          )}
          type="email"
          name="email"
          placeholder="andrew.huberman@gmail.com"
          value={formState.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="ml-1 font-semibold" htmlFor="specialization">
          Specialization
        </label>
        <input
          id="specialization"
          className={cn(
            "rounded-lg bg-white p-3 font-light transition-all",
            "focus:px-4 focus:font-normal focus:outline-none",
          )}
          type="text"
          name="specialization"
          placeholder="Neuroscientist"
          value={formState.specialization}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Form Submit Button */}
      <button
        type="submit"
        className={cn(
          "mt-4 w-full rounded-xl bg-green-600/70 py-2.5 text-lg font-medium text-white transition-all",
          "active:scale-95 active:shadow-inner",
        )}
      >
        Create
      </button>
    </form>
  );
}

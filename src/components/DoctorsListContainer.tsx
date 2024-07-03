"use client";

import { axiosBase } from "@/axios/config";
import { cn } from "@/utils/helpers";
import { Suspense, useEffect, useState } from "react";
import ProfileCard, { type doctorType } from "./ProfileCard";
import ProfileCardSkeletonWrapper from "./skeletons/ProfileCardSkeletonWrapper";

type SortCriteriaType =
  | "alphabeticalAsc"
  | "alphabeticalDesc"
  | "likesDesc"
  | "likesAsc"
  | null;

export default function DoctorsListContainer() {
  const [searchInput, setSearchInput] = useState("");
  const [sortCriteria, setSortCriteria] = useState<SortCriteriaType>(null);
  const [doctors, setDoctors] = useState<doctorType[]>([]);

  async function getAllDoctors() {
    await axiosBase
      .get("/doctors")
      .then((res) => {
        setDoctors(res?.data);
      })
      .catch((err) => {});
  }
  useEffect(() => {
    getAllDoctors();
  }, []);

  function handleSortChange(criteria: string) {
    setSortCriteria(criteria as SortCriteriaType);
  }
  return (
    <section className="flex h-[96vh] w-full flex-col items-center gap-8 rounded-2xl bg-green-500/10 p-8">
      {/* Section Title */}
      <h1 className="my-4 text-center text-3xl font-extrabold">
        Doctors Profiles
      </h1>

      <div className="flex items-center justify-between gap-4 max-lg:flex-col">
        {/* Doctor Name Search Bar */}
        <input
          className={cn(
            "w-80 rounded-lg bg-white p-3 text-sm font-light transition-all",
            "focus:px-4 focus:font-normal focus:outline-none",
          )}
          placeholder="Search doctor's name/specialization . . ."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        {/* Sort Dropdown */}
        <select
          className="rounded-lg bg-white p-3 text-sm font-light transition-all focus:outline-none"
          onChange={(e) => handleSortChange(e.target.value)}
          defaultValue="default"
        >
          <option value="default" disabled>
            Sort By
          </option>
          <option value="alphabeticalAsc">Alphabetical (A - Z)</option>
          <option value="alphabeticalDesc">Alphabetical (Z - A)</option>
          <option value="likesDesc">Likes (Highest First)</option>
          <option value="likesAsc">Likes (Lowest First)</option>
        </select>
      </div>

      {/* Doctor Profiles */}
      {doctors.length === 0 && <ProfileCardSkeletonWrapper />}
      <div className="grid gap-2 overflow-y-scroll px-2 lg:grid-cols-2 2xl:grid-cols-3">
        {doctors
          // Filter doctors' profiles based on search bar value (doctor name/specialization)
          .filter(
            (doctor) =>
              doctor.name.toLowerCase().includes(searchInput.toLowerCase()) ||
              doctor.specialization
                .toLowerCase()
                .includes(searchInput.toLowerCase()),
          )
          // Sort based on user preferred sorting method
          .sort((a, b) => {
            if (sortCriteria === "alphabeticalAsc") {
              return a.name.localeCompare(b.name);
            } else if (sortCriteria === "alphabeticalDesc") {
              return b.name.localeCompare(a.name);
            } else if (sortCriteria === "likesAsc") {
              return a.numOfLikes - b.numOfLikes;
            } else if (sortCriteria === "likesDesc") {
              return b.numOfLikes - a.numOfLikes;
            }
            return 0;
          })
          .map((props: doctorType) => (
            <ProfileCard key={props.id} {...props} />
          ))}
      </div>
    </section>
  );
}

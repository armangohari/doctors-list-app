"use client";

import { axiosBase } from "@/axios/config";
import {
  addCommentEmpty,
  addCommentFull,
  closeCommentEmpty,
  closeCommentFull,
  comment,
  heart,
} from "@/lib/icons";
import { cn } from "@/utils/helpers";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import DoctorCommentsModal from "./DoctorCommentsModal";

export type doctorType = {
  id: number;
  name: string;
  email: string;
  specialization: string;
  profileImage: StaticImageData;
  numOfLikes: number;
  numOfComments: number;
};

export default function ProfileCard({
  id,
  name,
  email,
  specialization,
  profileImage,
  numOfLikes,
  numOfComments,
}: doctorType) {
  const [isCommentModalVisible, setIsCommentModalVisible] =
    useState<boolean>(false);
  const [isCommentAreaActive, setIsCommentAreaActive] =
    useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>("");

  async function handleSubmit() {
    await axiosBase
      .post("/comments", {
        doctorId: id,
        content: commentText,
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <article className="w-96 rounded-xl bg-cream-white p-4 max-sm:scale-90">
      {isCommentModalVisible ? (
        <DoctorCommentsModal
          doctorId={id}
          isVisible={isCommentModalVisible}
          setIsVisible={setIsCommentModalVisible}
        />
      ) : (
        <div className="flex items-start justify-start gap-6">
          <div className="flex min-w-20 flex-col items-center justify-between gap-3">
            {/* Doctor Profile Image */}
            <Image
              src={profileImage}
              alt={name}
              width={80}
              height={80}
              className="rounded-full border border-gray-200 bg-white"
            />

            <div className="mt-[5px] flex gap-2">
              {/* Doctor Likes */}
              <div className="flex gap-0.5 p-1 text-sm font-semibold">
                <Image src={heart} alt="heart" className="h-5 w-5" />
                <span>{numOfLikes}</span>
              </div>

              {/* Doctor Comments */}
              <button
                className={cn(
                  "flex gap-0.5 rounded-md bg-green-300/20 p-1 text-sm font-semibold transition-all",
                  "hover:bg-green-300/50",
                  "active:scale-95",
                )}
                onClick={() => {
                  setIsCommentModalVisible(true);
                  setIsCommentAreaActive(false);
                }}
              >
                <Image src={comment} alt="heart" className="h-5 w-5" />
                <span>{numOfComments}</span>
              </button>
            </div>
          </div>
          {/* Doctor Information */}
          <div className="flex flex-col items-start justify-between gap-2">
            <h1 className="max-w-60 truncate font-extrabold" title={name}>
              {name}
            </h1>
            <h2
              className="max-w-60 truncate font-semibold"
              title={specialization}
            >
              {specialization}
            </h2>
            <h3 className="max-w-60 truncate font-light" title={email}>
              {email}
            </h3>

            <button
              className={cn(
                "flex items-center justify-center gap-2 rounded-lg bg-green-100/50 px-1 py-0.5 transition-all",
                "hover:bg-green-300/50",
                "active:scale-95 active:shadow-inner",
              )}
              onClick={() => setIsCommentAreaActive((prev) => !prev)}
            >
              {isCommentAreaActive ? (
                <>
                  {/* Set the close comment icon based on the emptiness state of comment text area */}
                  <Image
                    src={commentText ? closeCommentFull : closeCommentEmpty}
                    alt="Close comment"
                    className="h-5 w-5"
                  />
                  <span>Close Comment</span>
                </>
              ) : (
                <>
                  {/* Set the add comment icon based on the emptiness state of comment text area */}
                  <Image
                    src={commentText ? addCommentFull : addCommentEmpty}
                    alt="Add comment"
                    className="h-5 w-5"
                  />
                  <span>Add Comment</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Add Comment Form */}
      <form
        className={cn(
          "mt-3 hidden flex-col items-start justify-start gap-2",
          isCommentAreaActive && "block",
        )}
        onSubmit={handleSubmit}
      >
        {/* Comment Textarea */}
        <textarea
          className={cn(
            "max-h-36 min-h-12 w-full rounded-lg bg-white p-3 text-sm font-light transition-all",
            "focus:px-4 focus:font-normal focus:outline-none",
          )}
          placeholder="Describe your satisfaction . . ."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
        />

        {/* Comment Submit Button */}
        <button
          className={cn(
            "w-full rounded-lg bg-green-600/70 py-1.5 font-medium text-white transition-all",
            "active:scale-95 active:shadow-inner",
          )}
          type="submit"
        >
          Submit
        </button>
      </form>
    </article>
  );
}

"use client";

import { axiosBase } from "@/axios/config";
import { back } from "@/lib/icons";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type DoctorCommentsModalProps = {
  doctorId: number;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

type commentType = {
  id: number;
  content: string;
  createdAt: string;
};

export default function DoctorCommentsModal({
  doctorId,
  isVisible,
  setIsVisible,
}: DoctorCommentsModalProps) {
  const [comments, setComments] = useState<commentType[]>([]);

  useEffect(() => {
    async function getAllComments() {
      await axiosBase
        .get("/comments", { params: { doctorId: doctorId } })
        .then((res) => {
          console.log(res);
          setComments(res?.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    getAllComments();
  }, [doctorId]);

  return (
    isVisible && (
      <main className="w-full">
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          <Image src={back} alt="back" />
        </button>

        {/* Comments */}
        <div className="flex flex-col items-center justify-center gap-2">
          {comments.length === 0 ? (
            // No comment info
            <div className="hyphen grid h-full w-full place-items-center">
              <span className="text-sm text-gray-400">No comments</span>
            </div>
          ) : (
            comments.map(({ id, content, createdAt }: commentType) => (
              <article
                key={id}
                className="w-full rounded-md bg-white/70 p-2 text-xs"
              >
                {/* Comment Content */}
                <p className="font-medium">{content}</p>

                {/* Comment Created Time */}
                <span className="mt-1 font-light">{createdAt}</span>
              </article>
            ))
          )}
        </div>
      </main>
    )
  );
}

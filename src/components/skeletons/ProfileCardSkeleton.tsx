export default function ProfileCardSkeleton() {
  return (
    <article className="shimmer relative h-[172px] w-96 overflow-hidden rounded-xl bg-gray-50 p-6 shadow-sm max-sm:scale-90">
      <div className="flex items-start justify-start gap-6">
        <div className="flex min-w-20 flex-col items-center justify-between gap-3">
          {/* Doctor Profile Image */}
          <span className="h-20 w-20 rounded-full border-2 border-white bg-gray-100" />
          <span className="mt-2 h-6 w-10 rounded-md bg-gray-100" />
        </div>

        <div className="flex flex-col items-start justify-between gap-3">
          {/* Doctor Information */}
          <span className="h-5 w-28 rounded-md bg-gray-300" />
          <span className="h-5 w-40 rounded-md bg-gray-200" />
          <span className="h-5 w-52 rounded-md bg-gray-100" />

          {/* Comment Button */}
          <span className="h-6 w-40 rounded-md bg-white" />
        </div>
      </div>
    </article>
  );
}

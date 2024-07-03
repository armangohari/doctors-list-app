import ProfileCardSkeleton from "./ProfileCardSkeleton";

export default function ProfileCardSkeletonWrapper() {
  return (
    <div className="grid gap-2 px-2 sm:mr-2.5 lg:grid-cols-2 2xl:grid-cols-3">
      <ProfileCardSkeleton />
      <ProfileCardSkeleton />
      <ProfileCardSkeleton />
    </div>
  );
}

import CreateProfileForm from "@/components/CreateProfileForm";
import DoctorsListContainer from "@/components/DoctorsListContainer";
import { cn } from "@/utils/helpers";

export default function Home() {
  return (
    <main
      className={cn(
        "my-[2vh] flex w-full flex-col items-start justify-center gap-4 px-4",
        "xl:flex-row",
      )}
    >
      {/* Left Side Desktop - Top Side Mobile / Tablet */}
      <DoctorsListContainer />

      {/* Right Side Desktop - Bottom Side Mobile / Tablet */}
      <div className="flex w-full flex-col xl:w-96">
        <CreateProfileForm />
        {/* Box just for filling the empty part of the desktop view */}
        <span
          className={cn(
            "mt-4 h-[calc(96vh-580px)] w-full rounded-xl",
            "bg-gradient-to-br from-green-600/10 to-transparent",
            "max-xl:hidden",
          )}
        />
      </div>
    </main>
  );
}

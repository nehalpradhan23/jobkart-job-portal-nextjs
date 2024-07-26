import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";

export default function Loading() {
  return (
    // <div className="flex flex-col space-y-3">
    <div className="flex h-screen w-full justify-center items-center">
      <Loader className="animate-spin h-16 w-16" />
      {/* <Skeleton className="min-h-[630px] h-full w-full bg-zinc-500" /> */}
    </div>
  );
}

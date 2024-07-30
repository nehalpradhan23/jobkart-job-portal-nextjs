import { fetchProfileAction } from "@/actions";
import OnBoard from "@/components/on-board/OnBoard";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function OnBoardPage() {
  // get auth user from clerk
  const user = await currentUser();
  // fetch the profile info - either user is candidate or recruiter
  const profileInfo = await fetchProfileAction(user?.id);
  if (profileInfo?._id) {
    if (profileInfo?.role === "recruiter" && !profileInfo.isPremiumUser) {
      redirect("/membership");
    } else {
      redirect("/");
    }
  } else {
    return <OnBoard />;
  }
}

export default OnBoardPage;

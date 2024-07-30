import { fetchProfileAction } from "@/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Home() {
  const user = await currentUser();

  const profileInfo = await fetchProfileAction(user?.id);

  // redirect user to onboard route if not chosen profile type
  if (user && !profileInfo?._id) redirect("/onboard");
  // ============================================================
  return <section className="">hello</section>;
}

export default Home;

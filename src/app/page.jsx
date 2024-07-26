import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Home() {
  const user = await currentUser();
  console.log(user, "current user");
  const profileInfo = null;

  // redirect user to onboard route if not chosen profile type
  if (user && !profileInfo?._id) redirect("/onboard");
  // ============================================================
  return <section className="">hello</section>;
}

export default Home;

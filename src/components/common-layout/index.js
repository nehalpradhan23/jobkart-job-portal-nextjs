import { currentUser } from "@clerk/nextjs/server";
import Header from "../header/Header";
import { fetchProfileAction } from "@/actions";

async function CommonLayout({ children }) {
  const user = await currentUser();

  const profileInfo = await fetchProfileAction(user?.id);
  // ==========================================
  return (
    // <div className="mx-auto max-w-7xl p-6 lg:px-8">
    <div className="">
      {/* header */}
      <div className="bg-gray-100">
        <Header
          profileInfo={profileInfo}
          user={JSON.parse(JSON.stringify(user))}
        />
      </div>
      {/* main */}
      <main className="max-w-7xl mx-auto p-6">{children}</main>
    </div>
  );
}

export default CommonLayout;

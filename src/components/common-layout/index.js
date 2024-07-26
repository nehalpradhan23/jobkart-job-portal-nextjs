import { currentUser } from "@clerk/nextjs/server";
import Header from "../header/Header";

async function CommonLayout({ children }) {
  const user = await currentUser();
  return (
    // <div className="mx-auto max-w-7xl p-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      {/* header */}
      <Header user={JSON.parse(JSON.stringify(user))} />
      {/* main */}
      <main>{children}</main>
    </div>
  );
}

export default CommonLayout;

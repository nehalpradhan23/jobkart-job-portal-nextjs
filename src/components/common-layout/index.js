import Header from "../header/Header";

function CommonLayout({ children }) {
  return (
    // <div className="mx-auto max-w-7xl p-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      {/* header */}
      <Header />
      {/* main */}
      <main>{children}</main>
    </div>
  );
}

export default CommonLayout;

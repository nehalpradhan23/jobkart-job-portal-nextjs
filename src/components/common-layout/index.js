function CommonLayout({ children }) {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      {/* header */}
      <div className="">header</div>
      {/* main */}
      <main>{children}</main>
    </div>
  );
}

export default CommonLayout;

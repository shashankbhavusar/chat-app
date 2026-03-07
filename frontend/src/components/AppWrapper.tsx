import React from "react";

interface IAppWrapper {
  children: React.ReactNode;
}

function AppWrapper({ children }: IAppWrapper) {
  return (
    <div className="h-full">
        {/* //tolblar */}
      <main className="lg:pl-10 h-full">{children}</main>
    </div>
  );
}

export default AppWrapper;

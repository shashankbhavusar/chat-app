import React from "react";
import UserSideBar from "./UserSideBar";

interface IAppWrapper {
  children: React.ReactNode;
}

function AppWrapper({ children }: IAppWrapper) {
  return (
    <div className="h-full">
      <UserSideBar />
      <main className="lg:pl-10 h-full">{children}</main>
    </div>
  );
}

export default AppWrapper;

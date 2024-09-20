import React from "react";
import { User } from "./user";

export const Data = () => {
  return (
    <>
      <div className="data h-[85vh] flex flex-col justify-center items-center gap-6">
        {User.map((user) => {
          return (
            <>
              <div className="card bg-slate-100 w-[60%] shadow-lg px-5 py-5">
                <div className="card-body bg-slate-100 flex justify-between">
                  <span className="">{user.name}</span>
                  <span className="">{user.city}</span>
                  <span className="">{user.email}</span>
                  <span className="">{user.mobile}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
// import ChartOfAccountsTable from "../components/ChartOfAccountsTable";
import AccountsTable from "../components/AccountsTable";

const ChartOfAccountsPage = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Chart Of Accounts</h1>
        <button className="px-6 py-2.5 rounded-full bg-[#00A090] text-base  font-semibold text-white ">
          <span>
            <HiOutlinePlus className="inline-block text-white" />
          </span>{" "}
          Create
        </button>
      </div>
      <AccountsTable />
    </div>
  );
};

export default ChartOfAccountsPage;

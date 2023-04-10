import React, { useState } from "react";
import {
  firstBox,
  fourthBox,
  secondBox,
  thirdBox,
} from "../constant/tableContents.js";
import {
  findNode,
  toggleParents,
  transform,
  updateParents,
} from "../functions/functions.js";
import TableRow from "./TableRow.jsx";
import { cloneDeep } from "lodash";

const AccountsTable = () => {
  const initalData = transform([
    ...firstBox,
    ...secondBox,
    ...thirdBox,
    ...fourthBox,
  ]);
  const [data, setData] = useState(initalData);

  const handleBoxChecked = (e, parentIds) => {
    const checked = e.currentTarget.checked;

    const node = findNode(data, e.currentTarget.value, parentIds);
    node.checked = checked;
    toggleParents(node);
    updateParents(node, data, parentIds);

    setData(cloneDeep(data));
  };
  return (
    <div className="mx-4 mt-16">
      <table className=" w-full border-collapse border border-gray-200 text-left">
        <thead>
          <tr className="text-[14px] bg-[#F6F8FA] text-[#6A737D]">
            <th className="p-2 font-semibold">ACCOUNT NAME</th>
            <th className="font-semibold">ACCOUNT TYPE</th>
            <th className="font-semibold">ACCOUNT GROUP</th>
            <th className="font-semibold">CLOSING BALANCE</th>
          </tr>
        </thead>

        <tbody>
          <TableRow data={data} handleBoxChecked={handleBoxChecked} />
        </tbody>
      </table>
    </div>
  );
};

export default AccountsTable;

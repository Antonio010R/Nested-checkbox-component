import React, { useState, Fragment } from "react";
import Account from "../assets/Account.svg";
import AccountGroup from "../assets/AccountGroup.svg";

const TableRow = ({ data, depth = 0, parentIds = [], handleBoxChecked }) => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((prevId) => prevId !== id)
        : [...prevIds, id]
    );
  };
  return (
    <Fragment>
      {data.map((item) => (
        <Fragment key={item.id}>
          <tr
            className={`text-[14px] text-[#6A737D] ${
              item.type === 1 ? "font-normal" : "font-semibold"
            }`}
          >
            <td className="px-2 py-4 ">
              <div
                className={`flex items-center `}
                style={{ gap: depth + 1 + "rem" }}
              >
                <input
                  className="accent-green-600 hover:cursor-pointer"
                  value={item.id}
                  type="checkbox"
                  id={item.id}
                  checked={item.checked}
                  onChange={(e) => handleBoxChecked(e, parentIds)}
                />
                <div className={`flex gap-2 items-center`}>
                  {item.type === 1 ? (
                    <img className="w-3 h-3" src={Account} alt="account" />
                  ) : (
                    <img className="w-3 h-3" src={AccountGroup} alt="account" />
                  )}

                  <label
                    className={`${
                      item.type === 0 ? "hover:cursor-pointer" : ""
                    }`}
                    onClick={() => toggleExpand(item.id)}
                  >
                    {item.name}
                  </label>
                </div>
              </div>
            </td>
            <td>Account Type</td>
            <td>Account Group</td>
            <td>- - </td>
          </tr>
          {expandedIds.includes(item.id) &&
            (item.children || []).map((child) => (
              <TableRow
                key={child.id}
                data={[child]}
                depth={depth + 1}
                parentIds={[...parentIds, item.id]}
                handleBoxChecked={handleBoxChecked}
              />
            ))}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default TableRow;

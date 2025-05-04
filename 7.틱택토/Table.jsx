import React, { memo, useMemo } from "react";
import Tr from "./Tr";

const Table = memo(({ tableData, dispatch }) => {
  return (
    <table>
      <tbody>
        {Array(tableData.length) // tableData.length == 3
          .fill()
          .map((tr, i) =>
            useMemo(
              () => (
                <Tr
                  key={i}
                  dispatch={dispatch}
                  rowIndex={i}
                  rowData={tableData[i]}
                /> // tableData[i] == ["", "", ""]
              ),
              [tableData[i]]
            )
          )}
      </tbody>
    </table>
  );
});

export default Table;

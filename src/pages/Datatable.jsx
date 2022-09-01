import React from 'react'
import styled from 'styled-components'
import { DataGrid } from "@mui/x-data-grid";

import { userColumns, userRows } from './datatablesource';
const Datatable = () => {
    const actionColumn = [{field: 'action', headerName: 'Action', width: 200, renderCell:()=> {
        return (
            <div className="cellAction">
                <div className="viewButton">View</div>
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}]
  return (
    <Component>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </Component>
  );
}

export default Datatable


const Component = styled.div`
  height: 600px;
  width: 100%;
  background-color: white;
  padding: 20px;

  .cellWithImg {
    display: flex;
    align-items: center;
    .cellImg {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 20px;
    }
  }
  .cellWithStatus {
    padding: 5px;
    border-radius: 5px;
    &.active {
      background-color: #18191824;
      color: green;
    }
    &.pending {
      background-color: #18191849;
      color: gold;
    }
    &.passive {
      background-color: #181918;
      color: #3c613cec;
    }
  }

  .cellAction {
    display: flex;
    align-items: center;
    gap: 15px;

    .viewButton {
      padding: 2px 5px;
      border-radius: 5px;
      color: darkblue;
      border: 1px dotted gray;
      cursor: pointer;
    }

    .deleteButton {
      padding: 2px 5px;
      border-radius: 5px;
      border: 1px dotted gray;
      color: crimson;
      border: 1px dotted rgba(220 20, 60, 0.6);
    }
  }
`;
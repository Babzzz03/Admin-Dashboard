import React from 'react'
import styled from 'styled-components'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const List = () => {
    const rows = [
      {
        id: 12347,
        product: "productsPerformance ac3",
        img: "https://m.media-amazon.com/images/I/81CkKFn70ZL._AC_UL480_FMwebp_QL65_.jpg",
        customer: "jihn",
        date: "1 March",
        amount: 734,
        method: "Cash on Dealviery",
        status: "Approved",
      },
      {
        id: 22447,
        product: "productsPerformance ac3",
        img: "https://m.media-amazon.com/images/I/81CkKFn70ZL._AC_UL480_FMwebp_QL65_.jpg",
        customer: "jaka",
        date: "1 March",
        amount: 134,
        method: "Cash on Dealviery",
        status: "Approved",
      },
      {
        id: 11347,
        product: "productsPerformance ac3",
        img: "https://m.media-amazon.com/images/I/81CkKFn70ZL._AC_UL480_FMwebp_QL65_.jpg",
        customer: "justin",
        date: "1 March",
        amount: 434,
        method: "Cash on Dealviery",
        status: "Pending",
      },
    ];
  return (
    <Component>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                    <div className="cellWrapper">
                        <img src={row.img} alt="img" className="image" />
                        {row.product}
                    </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>{row.status}

                    </span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Component>
  );
}

export default List

const Component = styled.div`
.cellWrapper {
    display: flex;
    align-items: center;
    .image{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 10px;
        object-fit: cover;
    }

 
}
   .status {
       
        padding: 5px;
        border-radius: 5px;

        &.Approved {
            color: green;
            background-color: orange;
        }
         &.Pending {
            color: golden;
            background-color: red;
        }
    }
`;

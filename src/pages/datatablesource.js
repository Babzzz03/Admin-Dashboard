export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 170,
  renderCell: (params) => {
    return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
  }
  }
];

export const userRows = [
  {
    id: 1,
    username: "productsPerformance ac3",
    img: "https://m.media-amazon.com/images/I/81CkKFn70ZL._AC_UL480_FMwebp_QL65_.jpg",

    age: 13,
    email: "Cash on Dealviery",
    status: "active",
  },
  {
    id: 2,
    username: "productsPerformance ac3",
    img: "https://m.media-amazon.com/images/I/81CkKFn70ZL._AC_UL480_FMwebp_QL65_.jpg",

    age: 34,
    email: "Cash on Dealviery",
    status: "active",
  },
  {
    id: 3,
    username: "productsPerformance ac3",
    img: "https://m.media-amazon.com/images/I/81CkKFn70ZL._AC_UL480_FMwebp_QL65_.jpg",

    age: 24,
   email: "Cash on Dealviery", 
    status: "pending",
  },
  {
    id: 4,
    username: "productsPerformance ac3",
    img: "https://m.media-amazon.com/images/I/81CkKFn70ZL._AC_UL480_FMwebp_QL65_.jpg",

    age: 134,
    email: "Cash on Dealviery",
    status: "passive",
  },
  {
    id: 5,
    username: "productsPerformance ac3",
    img: "https://m.media-amazon.com/images/I/81CkKFn70ZL._AC_UL480_FMwebp_QL65_.jpg",
    age: 44,
    email: "Cash on Dealviery",
    status: "pending",
  },
  {
    id: 6,
    username: "productsPerformance ac3",
    img: "https://m.media-amazon.com/images/I/81CkKFn70ZL._AC_UL480_FMwebp_QL65_.jpg",

    age: 13,
    email: "Cash on Dealviery",
    status: "active",
  },
];
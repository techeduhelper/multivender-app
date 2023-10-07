import React, { useEffect, useMemo } from "react";
import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../redux/actions/order";

const AdminDashboardOrders = () => {
  const dispatch = useDispatch();

  const { adminOrders, adminOrderLoading } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
      {
        field: "status",
        headerName: "Status",
        minWidth: 130,
        flex: 0.7,
        cellClassName: (params) => {
          const status = params.value;
          return status === "Delivered" ? "greenColor" : "redColor";
        },
      },
      {
        field: "itemsQty",
        headerName: "Items Qty",
        type: "number",
        minWidth: 130,
        flex: 0.7,
      },
      {
        field: "total",
        headerName: "Total",
        type: "number",
        minWidth: 130,
        flex: 0.8,
      },
      {
        field: "createdAt",
        headerName: "Order Date",
        type: "date",
        minWidth: 130,
        align: "center",
        flex: 0.8,
      },
    ],
    []
  );

  const rows = useMemo(
    () =>
      adminOrders?.map((item) => ({
        id: item._id,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: item?.totalPrice + " ₹",
        status: item?.status,
        createdAt: new Date(item?.createdAt),
      })),
    [adminOrders]
  );

  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSideBar active={2} />
          </div>

          <div className="w-full min-h-[45vh] pt-5 rounded flex justify-center">
            <div className="w-[97%] flex justify-center bg-white">
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={4}
                disableSelectionOnClick
                autoHeight
                loading={adminOrderLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardOrders;

import React from "react";
import OrderCard from "./OrderCard";
import { orders } from "../../Utils/Constants";

const OrderList = () => {
  return <div>
    {
      orders.map((order)=><OrderCard {...order} key={order.id}/>)
    }
  </div>;
};

export default OrderList;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/orders", { withCredentials: true })
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">aaa</div>
      </div>
    </div>
  );
};

export default React.memo(Orders);

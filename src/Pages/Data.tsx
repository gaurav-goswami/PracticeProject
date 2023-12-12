import { Table } from "antd";
import React, { useEffect, useState } from "react";
import fetchUserData from "../lib/Data";

const Data: React.FC = () => {
  const [dataSource, setDataSource] = useState();

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "lastName",
    },
  ];

  const fetchData = async () => {
    try {
      const res = await fetchUserData();
      setDataSource(
        res.map((data: any) => {
          return {
            key: data.id,
            id : data.id,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
          };
        })
      );
    } catch (error) {
      console.error("Error in fetchData:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
};

export default Data;

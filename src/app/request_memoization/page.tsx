"use client";
import { getUsers, revalidateUsers } from "@/components/ServerComponents";
import { useState } from "react";

export default function RequestMemo() {
  const [users, setUsers] = useState([]);

  const onChangeHandler = async () => {
    setUsers(await getUsers());
  };
  const Revalidate = async () => {
    await revalidateUsers();
  };
  console.log(users);
  return (
    <>
      <h1>User length: {users.length}</h1>
      <button
        className="inline-block border border-slate-500"
        onClick={onChangeHandler}
      >
        Get user length
      </button>
      <button
        className="inline-block border border-slate-500"
        onClick={Revalidate}
      >
        Revalidate
      </button>
    </>
  );
}

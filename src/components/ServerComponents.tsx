"use server";

import { revalidateTag } from "next/cache";

export async function getUsers() {
  const res = await fetch("https://66a9d583613eced4eba65dd8.mockapi.io/users", {
    method: "GET",
    next: {
      revalidate: 60,
      tags: ["users"],
    },
    cache: "force-cache",
  });
  return await res.json();
}

export async function revalidateUsers() {
  revalidateTag("users");
}

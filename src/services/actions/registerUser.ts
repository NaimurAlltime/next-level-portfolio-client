// server action function: to connect with server

"use server";

import { FieldValues } from "react-hook-form";

export const registerUser = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/register`,
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const userInfo = await res.json();
  return userInfo;
};

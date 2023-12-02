"use client";
import { HttpError } from "@/libs/error"
import { isServer } from "@/libs/util";

const getError = () => {
  throw new HttpError("just test", 404);
}

export default function ErrorTest() {
  if (!isServer) {
    console.log("test")
    getError();
  }
  return <div>발생시켜볼까요</div>
}

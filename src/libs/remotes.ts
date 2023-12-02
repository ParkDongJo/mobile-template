import { HttpError } from "@/libs/error"

export const getList = async () => {
  const res = await fetch("")
  if (!res.ok) {
    throw new HttpError('Failed to get', res.status);
  }
  return res.json()
}

export const postList = async (data: {[key: string]: any}) => {
  const res = await fetch("", {
    method: "POST",
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    throw new HttpError("Failed to post", res.status)
  }
  return res.status === 200 ? true : false
}

export const putKakao = async (id: number, data: {[key: string]: any}) => {
  const res = await fetch("", {
    method: "PUT",
    body: JSON.stringify(data)
  })
  if (!res.ok) {
    throw new HttpError('Failed to put', res.status);
  }
  return res.json()
}

export const deleteKakao = async (id: number) => {
  const res = await fetch("", { method: "DELETE" })
  if (!res.ok) {
    throw new HttpError('Failed to delete', res.status);
  }
  return res.json()
}

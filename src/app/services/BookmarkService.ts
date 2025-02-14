import { Book } from "../components/interface";

const baseUrl = "https://65df7b8dff5e305f32a25b4d.mockapi.io/api/dekD"

async function fetchBookmark(): Promise<Book[]> {
  const res = await fetch(`${baseUrl}/book/`)
  const data = await res.json()
  return data
}

export default {
  fetchBookmark
}
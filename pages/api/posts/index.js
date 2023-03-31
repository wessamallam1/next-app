import { data } from "../../../data"



export default function handler(
  req,
  res
) {
  res.status(200).json({ data})
}
  // *********Sending a JSON response************


// export default async function handler(req, res) {
//   try {
//     const result = await someAsyncOperation()
//     res.status(200).json({ data })
//   } catch (err) {
//     res.status(500).json({ error: 'failed to load data' })
//   }
// }
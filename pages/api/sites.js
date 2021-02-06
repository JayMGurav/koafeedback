import { getUserSites } from "@/lib/db-admin";
import { auth } from "@/lib/firebase-admin";


export default async function (req, res) {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token)
    const sites = await getUserSites(uid);
    res.setHeader('Content-Type', 'application/json');
    // console.log({ sites })
    res.status(200).json({ sites });
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
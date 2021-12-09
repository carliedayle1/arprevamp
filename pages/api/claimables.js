import { API_URL } from "config";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { arpNumber } = req.body;

    const royaltyRequest = await fetch(
      `${API_URL}/royalties?arpNumber=${arpNumber}&status=READY`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const royaltyResponse = await royaltyRequest.json();

    if (royaltyRequest.ok) {
      if (royaltyResponse.length > 0) {
        const getAllIds = royaltyResponse.map((item) => item?.id);
        res.status(200).json(getAllIds);
      } else {
        res.status(200).json([]);
      }
    } else {
      res.status(royaltyResponse.statusCode).json({ message: data.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

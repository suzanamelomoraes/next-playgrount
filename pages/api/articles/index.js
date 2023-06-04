import { articles } from "../../../data";

export default function handler(req, res) {
  res.status(200).json(articles);
}

// you can call your database from here

import { embaralharArray } from "@/functions/arrays";
import questions from "../questionsData";

export default (req: any, res: any) => {
  const ids = questions.map((question) => question.id);
  res.status(200).json(embaralharArray(ids));
};

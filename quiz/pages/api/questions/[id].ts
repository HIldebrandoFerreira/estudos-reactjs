import questions from "../questionsData";

export default (req: any, res: any) => {
  const questionId = Number(req.query.id);
  const question = questions.filter((questao) => questao.id == questionId);

  if (question.length === 1) {
    const questaoSelecionada = question[0].embaralharRespostas();
    res.status(200).json(questaoSelecionada.paraObjeto());
  } else {
    res.status(204).json({});
  }
};

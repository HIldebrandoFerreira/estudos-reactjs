import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const questions: QuestaoModel[] = [
  new QuestaoModel(
    1,
    "Qual é a capital do Brasil?",
    [
      RespostaModel.errada("Rio de Janeiro"),
      RespostaModel.errada("São Paulo"),
      RespostaModel.certa("Brasília"),
      RespostaModel.errada("Salvador"),
    ],
    false
  ),
  new QuestaoModel(
    2,
    "Qual é o maior animal terrestre?",
    [
      RespostaModel.errada("Elefante"),
      RespostaModel.errada("Tigre"),
      RespostaModel.errada("Leão"),
      RespostaModel.certa("Tubarao"),
    ],
    false
  ),
  new QuestaoModel(
    3,
    "Qual é o maior planeta do sistema solar?",
    [
      RespostaModel.errada("Marte"),
      RespostaModel.errada("Netuno"),
      RespostaModel.errada("Saturno"),
      RespostaModel.certa("Venus"),
    ],
    false
  ),
  new QuestaoModel(
    4,
    "Qual é a capital do Canada?",
    [
      RespostaModel.errada("Vancouver"),
      RespostaModel.errada("Toronto"),
      RespostaModel.certa("Ottawa"),
      RespostaModel.errada("Vancouver"),
    ],
    false
  ),
  new QuestaoModel(
    5,
    "Qual é o maior planeta do sistema solar?",
    [
      RespostaModel.errada("Marte"),
      RespostaModel.errada("Netuno"),
      RespostaModel.errada("Saturno"),
      RespostaModel.certa("Venus"),
    ],
    false
  ),
];

export default questions;

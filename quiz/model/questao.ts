import { embaralharArray } from "@/functions/arrays";
import RespostaModel from "./resposta";

export default class QuestaoModel {
  #id: number;
  #enunciado: string;
  #respostas: RespostaModel[];
  #acertou: boolean;

  constructor(
    id: number,
    enunciado: string,
    respostas: RespostaModel[],
    acertou: boolean
  ) {
    this.#id = id;
    this.#enunciado = enunciado;
    this.#respostas = respostas;
    this.#acertou = acertou;
  }
  get id() {
    return this.#id;
  }
  get enunciado() {
    return this.#enunciado;
  }
  get respostas() {
    return this.#respostas;
  }
  get acertou() {
    return this.#acertou;
  }
  get naoRespondida() {
    for (let resposta of this.#respostas) {
      if (resposta.revelada) return true;
    }
    return false;
  }

  embaralharRespostas() {
    let respostasEmbaralhadas = embaralharArray(this.#respostas);
    return new QuestaoModel(
      this.#id,
      this.#enunciado,
      respostasEmbaralhadas,
      this.#acertou
    );
  }

  paraObjeto() {
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respostas: this.#respostas.map((resposta) => resposta.paraObjeto()),
      acertou: this.#acertou,
    };
  }
}

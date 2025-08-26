// src/types/index.ts
export type Tarefa = {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
  data: Date;
};

export type EventoCalendario = {
  id: number;
  titulo: string;
  data: Date;
  descricao: string;
};

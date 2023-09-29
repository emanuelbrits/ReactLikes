import { useState } from "react";
import { AutorForm } from "./AutorForm";
import { TopicoForm } from "./TopicoForm";
import { ulid } from "ulidx";
import { TopicoList } from "./TopicoList";

export interface Topico {
  id: string;
  descricao: string;
  autor: string;
  created_at: Date;
  tags: string[];
  active: boolean;
}

export interface Autor {
  nome: string;
  cidade: string;
  pais: string;
}

export function MainPage() {
  const [autores, setAutores] = useState<Autor[]>([]);

  const handleAddAutor = (nome: string, cidade: string, pais: string) => {
    const newAutor = {
      nome: nome,
      cidade: cidade,
      pais: pais
    };

    setAutores([newAutor, ...autores]);
  };

  const [topicos, setTopicos] = useState<Topico[]>([])

  const handleAddTopico = (descricao: string, autor: string) => {
    const newTopico = {
      id: ulid(),
      descricao: descricao,
      autor: autor,
      created_at: new Date(),
      tags: [""],
      active: true
    }

    setTopicos([newTopico, ...topicos])
  }

  return (
    <>
      <h2>Adicionar autor</h2>
      <AutorForm onAdd={handleAddAutor} />
      <h2>Adicionar Tópico</h2>
      <TopicoForm onAdd={handleAddTopico} autores={autores} />
      <TopicoList topicos={topicos}/>
    </>
  );
}

export default MainPage;

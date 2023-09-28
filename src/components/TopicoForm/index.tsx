import React, { useRef } from "react";
import { Autor } from "..";

interface TopicoFormProps {
  onAdd: (descricao: string, autor: string) => void;
  autores: Autor[];
}

export function TopicoForm({ onAdd, autores }: TopicoFormProps) {
  const descricaoInputRef = useRef<HTMLInputElement>(null);
  const autorInputRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const descricao = descricaoInputRef.current!.value;
    const autor = autorInputRef.current!.value;

    event.target.reset()

    if(descricao.trim().length > 0) {
      onAdd(descricao, autor);
    } else {
      alert("É necessário digitar algo na descrição")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={descricaoInputRef} placeholder="Descrição" />
      <select ref={autorInputRef} defaultValue="" required>
        <option value="" disabled>
          Autor
        </option>
        {autores.map((autor) => (
          <option key={autor.nome} value={autor.nome}>
            {autor.nome}
          </option>
        ))}
      </select>
      <input type="submit" value="Adicionar livro" />
    </form>
  );
}

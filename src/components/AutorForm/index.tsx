import { useRef } from "react"

interface AutorFormProps {
    onAdd: (nome: string, cidade: string, pais: string) => void
}

export function AutorForm({onAdd}: AutorFormProps) {
    const nomeInputRef = useRef<HTMLInputElement>(null)
    const cidadeInputRef = useRef<HTMLInputElement>(null)
    const paisInputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event)=> {
        event.preventDefault()
        const nome = nomeInputRef.current!.value
        const cidade = cidadeInputRef.current!.value
        const pais = paisInputRef.current!.value

        event.target.reset()

        if(nome.trim().length <= 0) {
            alert('Digite o nome do autor')
        } else if(cidade.trim().length <= 0) {
            alert('Digite a cidade do autor')
        } else if(pais.trim().length <= 0) {
            alert('Digite o país do autor')
        } else {
            onAdd(nome, cidade, pais)
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
            <input type="text" ref={nomeInputRef} placeholder='Nome do autor' />
            <input type="text" ref={cidadeInputRef} placeholder='Cidade do autor' />
            <input type="text" ref={paisInputRef} placeholder='País do autor' />
            <input type="submit" value="Adicionar autor" />
        </form>
        </>
    )
}
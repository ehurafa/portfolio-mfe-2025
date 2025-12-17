// @ts-nocheck
import React from 'react'

const Toolbar = ({ insertText }) => {
  return (
    <div className="toolbar">
      <button onClick={() => insertText('# ', '')}>H1</button>
      <button onClick={() => insertText('## ', '')}>H2</button>
      <button onClick={() => insertText('**', '**')}>Bold</button>
      <button onClick={() => insertText('*', '*')}>Itálico</button>
      <button onClick={() => insertText('[', '](https://)')}>Link</button>
      <button onClick={() => insertText('````', '````')}>Bloco de código</button>
      <button onClick={() => insertText('- ', '')}>Lista de itens</button>
      <button onClick={() => insertText('\n---\n ', '')}>Linha horizontal</button>
    </div>
  )
}

export default Toolbar

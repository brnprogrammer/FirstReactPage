import React, { Component } from 'react';

const TableHead = () =>{
    return(
    <thead>
        <tr>
          <th>Autores</th>
          <th>Livros</th>
          <th>Preços</th>
          <th>Remover</th>
        </tr>
      </thead>
    );
}

const TableTbody = props =>{
    const linhas = props.autores.map((linha, index) =>{
        return(
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick = { () => {props.removeAutor(index)}} className="waves-effect waves-light indigo lighetn-2 btn">Remover</button></td>
            </tr>
        );
    });
    return (
        <tbody>
            {linhas}
        </tbody>
    )
}

class Tabela extends Component{

    render(){
        // props = propriedades compartilhadas de outro component -- no caso o array de autores em App.js
        const {autores , removeAutor} = this.props;
        console.log(autores);

        return(
            <table className="centered highlight">
            <TableHead /> 
            <TableTbody autores = { autores } removeAutor = { removeAutor } />
      </table>
        );
    }

}export default Tabela;
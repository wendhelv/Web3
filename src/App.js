import "./styles.css";
import { useState } from "react";

export default function App() {
  const [cursos, setCursos] = useState(null);

  const handleSelecionar = (event) => {
    setCursos(event.target.value);
  };

  return (
    <div className="App">
      <header className="cabecalho">
        <div className="marca">Ache sua sala</div>
      </header>
      <h2>Curso:</h2>
      <select value={cursos} onChange={handleSelecionar}>
        <option value="" selected>
          --- Escolha ---
        </option>
        <option value="institucionais">Turmas Institucionais</option>
        <option value="sistemas">Sistemas de Informação</option>
        <option value="ciencia">Ciência da Computação</option>
        <option value="engenharia">Engenharia de Softaware</option>
      </select>
      <p></p>

      {cursos !== "institucionais" ? (
        <table align="center">
          <tr class="linha">
            <td>Disciplina</td>
            <td>Horário</td>
            <td>Turma</td>
            <td>Sala</td>
          </tr>
          {cursos === "sistemas" && (
            <tr>
              <td>Administração e Gerência de Redes</td>
              <td>7M</td>
              <td>0308</td>
              <td>Labin V - 710</td>
            </tr>
          )}
          {cursos === "engenharia" && (
            <tr>
              <td>Algoritmos e Programação</td>
              <td>2N</td>
              <td>0300</td>
              <td>550</td>
            </tr>
          )}
          {cursos === "ciencia" && (
            <tr>
              <td>Computação Gráfica</td>
              <td>6N</td>
              <td>0708</td>
              <td>Labin IV - 706</td>
            </tr>
          )}
        </table>
      ) : (
        <table align="center">
          <tr class="linha">
            <td>Código Da Disciplina</td>
            <td>Disciplina</td>
            <td>Turma</td>
            <td>Sala</td>
            <td>Horário</td>
          </tr>
          <tr>
            <td>128100</td>
            <td>Anatomofisiologia</td>
            <td>7002</td>
            <td>207</td>
            <td>5N</td>
          </tr>
          <tr>
            <td>112151</td>
            <td>Bioética e Biossegurança</td>
            <td>0005</td>
            <td>205</td>
            <td>7M</td>
          </tr>
          <tr>
            <td>134102</td>
            <td>Fisiopatologia</td>
            <td>7017</td>
            <td>422</td>
            <td>5N</td>
          </tr>
          <tr>
            <td>118106</td>
            <td>Libras</td>
            <td>7020</td>
            <td>235</td>
            <td>4M</td>
          </tr>
          <tr>
            <td>128101</td>
            <td>Políticas Públicas e Gestão em Saúde</td>
            <td>7010</td>
            <td>320</td>
            <td>2N</td>
          </tr>
        </table>
      )}
    </div>
  );
}

import conectarAoBanco from "../config/dbConfig.js";

// **Importa a função `conectarAoBanco` do arquivo `dbConfig.js`.**
// Essa função é responsável por estabelecer a conexão com o banco de dados.

// **Conecta ao banco de dados.**
// A variável `process.env.STRING_CONEXAO` contém a string de conexão (URL) para o banco de dados.
// A função `conectarAoBanco` é chamada com essa string e o resultado é armazenado na variável `conexao`.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// **Define uma função assíncrona para obter todas as imagens de Paraty do banco de dados.**
// A palavra-chave `async` indica que a função pode realizar operações assíncronas, como consultas ao banco de dados.
export default async function getTodasParatyImages() {
  // **Seleciona o banco de dados "imersao-instabytes".**
  // A propriedade `db` do objeto de conexão é utilizada para selecionar o banco de dados desejado.
  const db = conexao.db("imersao-instabytes");
  // **Seleciona a coleção "paratyimages".**
  // A propriedade `collection` é utilizada para selecionar a coleção dentro do banco de dados.
  const colecao = db.collection("paratyimages");
  // **Busca todos os documentos da coleção e retorna como um array.**
  // O método `find()` encontra todos os documentos na coleção, e o método `toArray()` converte o cursor resultante em um array de objetos.
  return colecao.find().toArray();
};
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função para obter todas as imagens de Paraty
export async function getTodasParatyImages() {
  // Seleciona o banco de dados "imersao-instabytes"
  const db = conexao.db("imersao-instabytes");
  // Seleciona a coleção "paratyimages"
  const colecao = db.collection("paratyimages");
  // Busca todos os documentos da coleção e retorna como um array
  return colecao.find().toArray();
};

// Função para criar uma nova imagem de Paraty
export async function criarParatyImages(novaParatyImages) {
  // Seleciona o banco de dados "imersao-instabytes"
  const db = conexao.db("imersao-instabytes");
  // Seleciona a coleção "paratyimages"
  const colecao = db.collection("paratyimages");
  // Insere um novo documento na coleção com os dados da nova imagem
  return colecao.insertOne(novaParatyImages);
};

// *** Acima tem os comentários do Gemini ***

// import conectarAoBanco from "../config/dbConfig.js";

// const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// export async function getTodasParatyImages() {
//   const db = conexao.db("imersao-instabytes");
//   const colecao = db.collection("paratyimages");
//   return colecao.find().toArray();
// };

// export async function criarParatyImages(novaParatyImages) {
//   const db = conexao.db("imersao-instabytes");
//   const colecao = db.collection("paratyimages");
//   return colecao.insertOne(novaParatyImages);
// };
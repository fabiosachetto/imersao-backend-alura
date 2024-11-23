import fs from "fs";
import { criarParatyImages, getTodasParatyImages } from "../models/paratyImagesModel.js";

// Função para listar todas as imagens de Paraty
export async function listarParatyImages(req, res) {
  // Obtém todas as imagens de Paraty do banco de dados
  const paratyImages = await getTodasParatyImages();
  // Envia as imagens como resposta JSON com status 200 (OK)
  res.status(200).json(paratyImages);
};

// Função para postar uma nova imagem de Paraty
export async function postarParatyImages(req, res) {
  // Obtém os dados da nova imagem do corpo da requisição
  const novaParatyImages = req.body;
  try {
    // Cria a nova imagem no banco de dados
    const criandoParatyImages = await criarParatyImages(novaParatyImages);
    // Envia a imagem criada como resposta JSON com status 200 (OK)
    res.status(200).json(criandoParatyImages);
  } catch(erro) {
    // Imprime o erro no console
    console.error(erro.message);
    // Envia uma mensagem de erro como resposta JSON com status 500 (Internal Server Error)
    res.status(500).json({"Erro":"Falha na REQUISIÇÃO!"});
  };
};

// Função para fazer upload de uma imagem de Paraty
export async function uploadImagem(req, res) {
  // Cria um objeto com os dados da nova imagem, incluindo o nome do arquivo original
  const novaParatyImages = {
    image_description: "",
    imgUrl: req.file.originalname,
    alt: ""
  };

  try {
    // Cria a nova imagem no banco de dados
    const criandoParatyImages = await criarParatyImages(novaParatyImages);
    // Renomeia o arquivo para incluir o ID da imagem criada
    const imagemAtualizada = `uploads/${criandoParatyImages.insertedId}.jpg`;
    fs.renameSync(req.file.path, imagemAtualizada);
    // Envia a imagem criada como resposta JSON com status 200 (OK)
    res.status(200).json(criandoParatyImages);
  } catch(erro) {
    // Imprime o erro no console
    console.error(erro.message);
    // Envia uma mensagem de erro como resposta JSON com status 500 (Internal Server Error)
    res.status(500).json({"Erro":"Falha na REQUISIÇÃO!"});
  };
};

// *** Acima tem os comentários do Gemini ***

// import fs from "fs";
// import { criarParatyImages, getTodasParatyImages } from "../models/paratyImagesModel.js";

// export async function listarParatyImages(req, res) {
//   const paratyImages = await getTodasParatyImages();
//   res.status(200).json(paratyImages);
// };

// export async function postarParatyImages(req, res) {
//   const novaParatyImages = req.body;
//   try {
//     const criandoParatyImages = await criarParatyImages(novaParatyImages);
//     res.status(200).json(criandoParatyImages);
//   } catch(erro) {
//     console.error(erro.message);
//     res.status(500).json({"Erro":"Falha na REQUISIÇÃO!"});
//   };
// };

// export async function uploadImagem(req, res) {
//   const novaParatyImages = {
//     image_description: "",
//     imgUrl: req.file.originalname,
//     alt: ""
//   };

//   try {
//     const criandoParatyImages = await criarParatyImages(novaParatyImages);
//     const imagemAtualizada = `uploads/${criandoParatyImages.insertedId}.jpg`;
//     fs.renameSync(req.file.path, imagemAtualizada);
//     res.status(200).json(criandoParatyImages);
//   } catch(erro) {
//     console.error(erro.message);
//     res.status(500).json({"Erro":"Falha na REQUISIÇÃO!"});
//   };
// };
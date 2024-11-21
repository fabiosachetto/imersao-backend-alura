import getTodasParatyImages from "../models/paratyImagesModel.js";

export async function listarParatyImages(req, res) {
  // Chama a função para obter as imagens
  const paratyImages = await getTodasParatyImages();
  // Envia as imagens como resposta JSON com status 200 (OK)
  res.status(200).json(paratyImages);
};
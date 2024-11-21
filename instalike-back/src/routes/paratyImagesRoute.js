import express from "express";
import { listarParatyImages } from "../controllers/paratyImagesController.js";

const routes = (app) => {
  // Habilita o parser JSON para lidar com requisições JSON
  app.use(express.json());

  // Rota para obter todas as imagens de Paraty
  app.get("/paratyImages", listarParatyImages);
};

export default routes;
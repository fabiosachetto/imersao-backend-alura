// Importa o framework Express para criar aplicações web Node.js
import express from "express";

// Importa o middleware Multer para lidar com uploads de arquivos
import multer from "multer";

// Importa funções controladoras de imagens de Paraty (provavelmente do arquivo paratyImagesController.js)
import { listarParatyImages, postarParatyImages, uploadImagem } from "../controllers/paratyImagesController.js";

// Configura o Multer para armazenar uploads na pasta "./uploads" (sem armazenamento personalizado)
const upload = multer({ dest: "./uploads" });

// Função para definir as rotas da aplicação
const routes = (app) => {
  // Habilita o parser JSON para processar requisições com corpo em formato JSON
  app.use(express.json());

  // Rota GET para listar todas as imagens de Paraty (provavelmente acessa o banco de dados)
  app.get("/paratyImages", listarParatyImages);

  // Rota POST para salvar uma nova imagem de Paraty (provavelmente envia dados para o banco de dados)
  app.post("/paratyImages", postarParatyImages);

  // Rota POST para upload de imagem
  //  - upload.single("imagem"): processa um único arquivo chamado "imagem" do formulário HTML
  //  - uploadImagem: função chamada após o upload para lidar com a imagem (salvar caminho, processar, etc.)
  app.post("/upload", upload.single("imagem"), uploadImagem);
};

// Exporta a função routes para uso em outros arquivos
export default routes;

// *** Acima tem os comentários do Gemini ***

// import express from "express";
// import multer from "multer";
// import { listarParatyImages, postarParatyImages, uploadImagem } from "../controllers/paratyImagesController.js";

// // Essa configuração só precisa para usuários do Windows
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //       cb(null, 'uploads/');
// //   },
// //   filename: function (req, file, cb) {
// //       cb(null, file.originalname);
// //   }
// // });

// // const upload = multer({dest:"./uploads", storage});

// const upload = multer({ dest: "./uploads" });

// const routes = (app) => {
//   // Habilita o parser JSON para lidar com requisições JSON
//   app.use(express.json());

//   // Rota para obter todas as imagens de Paraty
//   app.get("/paratyImages", listarParatyImages);

//   app.post("/paratyImages", postarParatyImages);

//   app.post("/upload", upload.single("imagem"), uploadImagem);
// };

// export default routes;
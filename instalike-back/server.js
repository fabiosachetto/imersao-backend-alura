import express from "express";
import routes from "./src/routes/paratyImagesRoute.js";

const app = express();
routes(app);
// **Cria uma instância do Express, que é o framework web utilizado para criar o servidor.**
// O objeto `app` representa a aplicação Express.

// **Inicia o servidor na porta 3000.**
// A função `listen` inicia o servidor e escuta por requisições na porta 3000.
// Quando o servidor é iniciado, a mensagem "Server escutando..." é exibida no console.
app.listen(3000, () => {
  console.log("Server escutando...");
});


// import express from "express";
// import conectarAoBanco from "./src/config/dbConfig.js";
// const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// const app = express();
// app.use(express.json());

// app.listen(3000, () => {
//   console.log("Server escutando...");
// });

// function getTodasParatyImages() {
//   const db = conexao.db("imersao-instabytes");
//   const colecao = db.collection("paratyimages");
//   return colecao.find().toArray()
// };

// app.get("/paratyImages", async (req, res) => {
//   const paratyImages = await getTodasParatyImages();
//   res.status(200).json(paratyImages);
// });

// const paratyImages = [
//   {
//     id: 1,
//     title: "Praia do Pontal",
//     publish_date: "2024-11-19",
//     suite_description: "", // You can add a description about Praia do Pontal here
//     content: "", // You can add some content about Praia do Pontal here
//     image_description: "A beautiful view of Praia do Pontal beach in Paraty-RJ.",
//     image: "https://spaceks.net/sites/radiotudoissoeparaty.net/images/album/user_1766464115.jpg"
//   },
//   {
//     id: 2,
//     title: "Centro Histórico de Paraty",
//     publish_date: "2024-11-19",
//     suite_description: "", // You can add a description about Centro Histórico here
//     content: "", // You can add some content about Centro Histórico here
//     image_description: "A vibrant scene from the historical center of Paraty-RJ.",
//     image: "https://spaceks.net/sites/radiotudoissoeparaty.net/images/album/user_226513575.jpg"
//   },
//   {
//     id: 3,
//     title: "Saco da Mangueira",
//     publish_date: "2024-11-19",
//     suite_description: "", // You can add a description about Saco da Mangueira here
//     content: "", // You can add some content about Saco da Mangueira here
//     image_description: "A serene picture of Saco da Mangueira in Paraty-RJ.",
//     image: "https://spaceks.net/sites/radiotudoissoeparaty.net/images/album/user_131942907.jpg"
//   },
//   {
//     id: 4,
//     title: "Cais de Paraty",
//     publish_date: "2024-11-19",
//     suite_description: "", // You can add a description about Cais de Paraty here
//     content: "", // You can add some content about Cais de Paraty here
//     image_description: "A lively scene of the Paraty pier.",
//     image: "https://spaceks.net/sites/radiotudoissoeparaty.net/images/album/user_1108946573.jpg"
//   },
//   {
//     id: 5,
//     title: "Festa do Divino em Paraty",  // pôr do sol means sunset in portuguese
//     publish_date: "2024-11-19",
//     suite_description: "", // You can add a description about sunset in Paraty here
//     content: "", // You can add some content about sunset in Paraty here
//     image_description: "A breathtaking sunset over Paraty-RJ.",
//     image: "https://spaceks.net/sites/radiotudoissoeparaty.net/images/album/user_1769010586.jpg"
//   }
// ];

// function getIdParatyImages(id){
//   return paratyImages.findIndex((paratyImages) => {
//     return paratyImages.id === Number (id);
//   });
// };

// app.get("/paratyImages/:id", (req, res) => {
//   const index = getIdParatyImages(req.params.id);
//   res.status(200).json(paratyImages[index]);
//   // console.log(res);
// });
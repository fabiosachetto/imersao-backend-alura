import express from "express";

const paratyImages = [
  {
    id: 1,
    title: "Praia do Pontal",
    publish_date: "2024-11-19",
    suite_description: "", // You can add a description about Praia do Pontal here
    content: "", // You can add some content about Praia do Pontal here
    image_description: "A beautiful view of Praia do Pontal beach in Paraty-RJ.",
    image: "https://placeholdit.img/300x150?text=Praia+do+Pontal"
  },
  {
    id: 2,
    title: "Centro Histórico de Paraty",
    publish_date: "2024-11-19",
    suite_description: "", // You can add a description about Centro Histórico here
    content: "", // You can add some content about Centro Histórico here
    image_description: "A vibrant scene from the historical center of Paraty-RJ.",
    image: "https://placeholdit.img/300x150?text=Centro+Histórico"
  },
  {
    id: 3,
    title: "Saco da Mangueira",
    publish_date: "2024-11-19",
    suite_description: "", // You can add a description about Saco da Mangueira here
    content: "", // You can add some content about Saco da Mangueira here
    image_description: "A serene picture of Saco da Mangueira in Paraty-RJ.",
    image: "https://placeholdit.img/300x150?text=Saco+da+Mangueira"
  },
  {
    id: 4,
    title: "Cais de Paraty",
    publish_date: "2024-11-19",
    suite_description: "", // You can add a description about Cais de Paraty here
    content: "", // You can add some content about Cais de Paraty here
    image_description: "A lively scene of the Paraty pier.",
    image: "https://placeholdit.img/300x150?text=Cais+de+Paraty"
  },
  {
    id: 5,
    title: "Pôr do sol em Paraty",  // pôr do sol means sunset in portuguese
    publish_date: "2024-11-19",
    suite_description: "", // You can add a description about sunset in Paraty here
    content: "", // You can add some content about sunset in Paraty here
    image_description: "A breathtaking sunset over Paraty-RJ.",
    image: "https://placeholdit.img/300x150?text=Pôr+do+Sol+Paraty"
  }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server escutando...");
});

app.get("/paratyImages", (req, res) => {
  res.status(200).json(paratyImages);
  // console.log(res);
});

function getIdParatyImages(id){
  return paratyImages.findIndex((paratyImages) => {
    return paratyImages.id === Number (id);
  });
};

app.get("/paratyImages/:id", (req, res) => {
  const index = getIdParatyImages(req.params.id);
  res.status(200).json(paratyImages[index]);
  // console.log(res);
});
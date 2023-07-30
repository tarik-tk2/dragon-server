const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;
const category = require("./data/catagories.json");
const allNews = require("./data/news.json");
app.use(cors());

app.get("/category", (req, res) => {
  res.send(category);
});
app.get("/news", (req, res) => {
  res.send(allNews);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const matchedNews = allNews.find((news) => news._id === id);
  res.send(matchedNews);
});
app.get("/category/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const matchedCategory = allNews.filter(
    (news) => parseInt(news.category_id) === id
  );

  res.send(matchedCategory);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

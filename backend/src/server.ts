import express from "express";
import cors from "cors";
import { sample_foods, sample_tags } from "./data";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/foods", (req, res) => {
  res.send(sample_foods);
});

app.get("/api/foods/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm.trim().toLowerCase();
  const foods = sample_foods.filter((food) => {
    const foodName = food.name.toLowerCase();
    return foodName.includes(searchTerm);
  });
  res.send(foods);
});

app.get("/api/foods/tags", (req, res) => {
  res.send(sample_tags);
});

app.get("/api/foods/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName.toLowerCase();
  const foods = sample_foods.filter((food) => {
    return food.tags?.some((tag: any) => {
      return tag.toLowerCase() === tagName;
    });
  });
  res.send(foods);
});

app.get("/api/foods/:foodId", (req, res) => {
  const foodId = req.params.foodId;
  const food = sample_foods.find((food) => {
    return food.id === foodId;
  });
  res.send(food);
});

const port = 5001;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});

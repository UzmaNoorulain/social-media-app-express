const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const { v4: uuidv4 } = require("uuid"); // for creating new id
const methodOverride = require("method-override"); // for allow form to accept PATCH and DELETE request
const multer = require("multer"); // for uploading image and show on page

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* Multer Configuration */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// let posts = [
//   {
//     id: uuidv4(),
//     username: "uzmanoorulain",
//     image: "https://picsum.photos/400/300?random=1",
//     caption: "Learning Express.js 🚀",
//   },
//   {
//     id: uuidv4(),
//     username: "uzmanoorulain",
//     image: "https://picsum.photos/400/300?random=2",
//     caption: "Building my Instagram clone today.",
//   },
//   {
//     id: uuidv4(),
//     username: "uzmanoorulain",
//     image: "https://picsum.photos/400/300?random=3",
//     caption: "Coding and coffee ☕",
//   },
//   {
//     id: uuidv4(),
//     username: "ali",
//     image: "https://picsum.photos/400/300?random=4",
//     caption: "My first Instagram clone post!",
//   },
//   {
//     id: uuidv4(),
//     username: "ali",
//     image: "https://picsum.photos/400/300?random=5",
//     caption: "Weekend vibes 😎",
//   },
//   {
//     id: uuidv4(),
//     username: "ali",
//     image: "https://picsum.photos/400/300?random=6",
//     caption: "Exploring Node.js and Express.",
//   },
//   {
//     id: uuidv4(),
//     username: "hayasuleman",
//     image: "https://picsum.photos/400/300?random=7",
//     caption: "Beautiful sunset 🌅",
//   },
//   {
//     id: uuidv4(),
//     username: "hayasuleman",
//     image: "https://picsum.photos/400/300?random=8",
//     caption: "Nature is the best therapy 🌿",
//   },
//   {
//     id: uuidv4(),
//     username: "hayasuleman",
//     image: "https://picsum.photos/400/300?random=9",
//     caption: "Golden hour magic ✨",
//   },
//   {
//     id: uuidv4(),
//     username: "sarah",
//     image: "https://picsum.photos/400/300?random=10",
//     caption: "Morning walk completed 🏃‍♀️",
//   },
//   {
//     id: uuidv4(),
//     username: "sarah",
//     image: "https://picsum.photos/400/300?random=11",
//     caption: "Reading a new book today 📚",
//   },
//   {
//     id: uuidv4(),
//     username: "ahmed",
//     image: "https://picsum.photos/400/300?random=12",
//     caption: "Working on my portfolio website.",
//   },
//   {
//     id: uuidv4(),
//     username: "ahmed",
//     image: "https://picsum.photos/400/300?random=13",
//     caption: "JavaScript is getting interesting!",
//   },
//   {
//     id: uuidv4(),
//     username: "fatima",
//     image: "https://picsum.photos/400/300?random=14",
//     caption: "First day at college 🎓",
//   },
//   {
//     id: uuidv4(),
//     username: "fatima",
//     image: "https://picsum.photos/400/300?random=15",
//     caption: "Study session with friends.",
//   },
//   {
//     id: uuidv4(),
//     username: "zain",
//     image: "https://picsum.photos/400/300?random=16",
//     caption: "Football practice ⚽",
//   },
//   {
//     id: uuidv4(),
//     username: "zain",
//     image: "https://picsum.photos/400/300?random=17",
//     caption: "Match day!",
//   },
//   {
//     id: uuidv4(),
//     username: "mariam",
//     image: "https://picsum.photos/400/300?random=18",
//     caption: "Trying out photography 📸",
//   },
//   {
//     id: uuidv4(),
//     username: "mariam",
//     image: "https://picsum.photos/400/300?random=19",
//     caption: "City lights at night 🌃",
//   },
//   {
//     id: uuidv4(),
//     username: "john",
//     image: "https://picsum.photos/400/300?random=20",
//     caption: "Travel memories ✈️",
//   },
// ];
let posts = [
  {
    id: uuidv4(),
    username: "uzmanoorulain",
    image: "/uploads/Beautiful flowers.jpg",
    caption: "Nature Vibes🌵🐝",
  },
  {
    id: uuidv4(),
    username: "uzmanoorulain",
    image: "/uploads/cloudy.jpeg",
    caption: "Beautiful sunset 🌅",
  },
  {
    id: uuidv4(),
    username: "uzmanoorulain",
    image: "/uploads/foggy.jpeg",
    caption: "fog with trees hits different...",
  },
  {
    id: uuidv4(),
    username: "ali",
    image: "/uploads/heavy_rain.jpg",
    caption: "My first Rain!",
  },
  {
    id: uuidv4(),
    username: "ali",
    image: "/uploads/hotChocolate.jpg",
    caption: "cold coffee🍵☕",
  },
  {
    id: uuidv4(),
    username: "ali",
    image: "/uploads/rainy.jpeg",
    caption: "Weekend vibes 😎",
  },
  {
    id: uuidv4(),
    username: "hayasuleman",
    image: "/uploads/RaspberrySmoothie.jpg",
    caption: "Strawberry Smoothee",
  },
  {
    id: uuidv4(),
    username: "hayasuleman",
    image: "/uploads/sunny.jpeg",
    caption: "Nature is the best therapy 🌿",
  },
  {
    id: uuidv4(),
    username: "hayasuleman",
    image: "/uploads/unknown.jpeg",
    caption: "City lights at night 🌃",
  },
  {
    id: uuidv4(),
    username: "sarah",
    image: "/uploads/ChickenMadraswithBG.jpg",
    caption: "Mutton Curry😋",
  },
  {
    id: uuidv4(),
    username: "sarah",
    image: "/uploads/Solelp — byminjco.jpeg",
    caption: "Reading a new book today 📚",
  },
  {
    id: uuidv4(),
    username: "uzmanoorulain",
    image:
      "/uploads/1781623511213-WhatsApp Image 2024-08-25 at 20.51.19_1476ff03.jpg",
    caption: "forever hijabi girl",
  },
  {
    id: uuidv4(),
    username: "ahmed",
    image: "/uploads/Vi-Con by Hayong Kim.jpeg",
    caption: "New Gadget!",
  },
  {
    id: uuidv4(),
    username: "ahmed",
    image: "/uploads/thumb-1920-687706.jpg",
    caption: "JavaScript is getting interesting!",
  },
  {
    id: uuidv4(),
    username: "fatima",
    image:
      "/uploads/thousands-of-bubbles-against-bright-blue-sky-free-photo.webp",
    caption: "First day at college 🎓",
  },
  {
    id: uuidv4(),
    username: "fatima",
    image: "/uploads/pexels-codioful-7130536.jpg",
    caption: "Study session with friends.",
  },
  {
    id: uuidv4(),
    username: "zain",
    image: "/uploads/pexels-marek-piwnicki-3907296-15499459.jpg",
    caption: "AI ⚽",
  },
  {
    id: uuidv4(),
    username: "zain",
    image: "/uploads/pexels-salomon-v-17631291-6442024.jpg",
    caption: "Best day!",
  },
  {
    id: uuidv4(),
    username: "mariam",
    image: "/uploads/sea-the-sky-flight-the-city-wallpaper-preview.jpg",
    caption: "Trying out photography 📸",
  },
  {
    id: uuidv4(),
    username: "mariam",
    image:
      "/uploads/photography-landscape-nature-mountains-wallpaper-preview.jpg",
    caption: "Golden hour magic ✨",
  },
  {
    id: uuidv4(),
    username: "john",
    image:
      "/uploads/maple-leaf-red-maple-station-bend-fushou-mountain-farm.jpg",
    caption: "Travel memories ✈️",
  },
];
/* Home Page */
app.get("/posts", (req, res) => {
  res.render("home.ejs", { posts });
});

/* New Post Form */
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

/* Create Post with Image Upload */
app.post("/posts", upload.single("image"), (req, res) => {
  const { username, caption } = req.body;

  const newPost = {
    id: uuidv4(),
    username,
    image: "/uploads/" + req.file.filename,
    caption,
  };

  posts.push(newPost);
  console.log(newPost);
  res.redirect("/posts");
});

// Show all posts of one user
app.get("/posts/:username", (req, res) => {
  let { username } = req.params;

  let userPosts = posts.filter(
    (post) => post.username.toLowerCase() === username.toLowerCase(),
  );

  res.render("show.ejs", {
    username,
    userPosts,
  });
});

// to show a single post in details
app.get("/posts/id/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("post.ejs", { post });
});

// edit post
app.patch("/posts/id/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  let newCaption = req.body.caption;
  post.caption = newCaption;
  res.redirect("/posts");
});

app.get("/posts/id/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

// delete post
app.delete("/posts/id/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id != p.id);
  res.redirect("/posts");
});

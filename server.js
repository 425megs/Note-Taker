const express = require('express');
const path = require('path');
// const savedNotes = require('./db/db.json');
const fs = require('fs');

//grant unique id, don't think it will live on this page
// const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

let notes = JSON.parse(fs.readFileSync("db/db.json"))

// nav to notes page after clicking 'Get Started'
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', function (req, res) {
  return res.json(notes)
});

app.get('*', (req, res) => 
  res.send(
    `Make a request to http://localhost:${PORT}/api/notes or http://localhost:${PORT}/notes`
  )
);

app.post('/api/notes', function (req, res) {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) {
      throw err
    }
    const noteArray = JSON.parse(data);
    noteArray.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(noteArray, null, 4), err => {
      if (err) {
        throw err;
      }
    })
  })
}
);

app.listen(PORT, () =>
  console.log(`You are now listening to the sweet tunes of PORT 3001 at http://localhost:${PORT} 🚀`)
);

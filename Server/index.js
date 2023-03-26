const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

{/*Conexão Com o banco de dados */}

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO usuarios (email, password) VALUE (?,?)",
          [email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Pengguna berhasil terdaftar" });
          }
        );
      });
    } else {
      res.send({ msg: "Email sudah terdaftar" });
    }
  });
});

{/*Verificação de login*/}

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response == true) {
          res.send(response);
        } else {
          res.send({ msg: "Email atau password salah" });
        }
      });
    } else {
      res.send({ msg: "Pengguna tidak terdaftar!" });
    }
  });
});




app.listen(3008, () => {
  console.log("Server berjalan pada port 3008");
});

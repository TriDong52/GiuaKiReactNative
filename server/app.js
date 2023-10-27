const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(bodyParser.json());
const port = 3000;

const db = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'db_video_app',
});

app.listen(port, () => {
  console.log(`API backend đang lắng nghe tại cổng ${port}`);
});

app.get('/category', function (req, res) {
  db.query('SELECT * FROM `category`', function (err, results, fields) {
    if (err) throw err
    res.send(results);
  }
  );
});

app.get('/food', function (req, res) {
  db.query('SELECT * FROM `food`', function (err, results, fields) {
    if (err) throw err
    res.send(results);
  }
  );
});
app.use('/img_foods', express.static('public/foods'));
app.use('/img_categories', express.static('public/categories'));

app.post("/register", function (req, res, next) {
  const { name, password, email } = req.body;
  bcrypt.hash(password, saltRounds, (hashErr, hashedPassword) => {
    if (hashErr) {
      res.status(500).json({ error: 'Lỗi trong quá trình băm mật khẩu.' });
    } else {
      const checkQuery = 'SELECT * FROM `users` WHERE mail = ?';
      db.query(checkQuery, [email], (checkErr, checkResults) => {
        if (checkErr) {
          res.status(500).json({ error: 'Lỗi trong quá trình kiểm tra email.' });
          console.log(checkErr);
        } else if (checkResults.length > 0) {
          res.status(400).json({ error: 'Email đã tồn tại.' });
        } else {
          // Thêm người dùng mới vào cơ sở dữ liệu
          const insertQuery = 'INSERT INTO users (name, password, mail) VALUES (?, ?, ?)';
          db.query(insertQuery, [name, hashedPassword, email], (insertErr, insertResults) => {
            if (insertErr) {
              res.status(500).json({ error: 'Lỗi trong quá trình đăng ký.' });
              console.log(insertErr);
            } else {
              // res.status(200).json({ message: 'Đăng ký thành công.' });
              res.send({ status: "success", data: req.body, msg: "" });
            }
          });
        }
      });
    }
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const selectQuery = 'SELECT * FROM users WHERE mail = ?';
  db.query(selectQuery, [email], (selectErr, selectResults) => {
    if (selectErr) {
      res.status(500).json({ error: 'Lỗi trong quá trình truy vấn cơ sở dữ liệu.' });
      console.log(selectErr);
    } else if (selectResults.length === 0) {
      res.status(400).json({ error: 'Email không tồn tại.' });
    } else {
      const hashedPassword = selectResults[0].password;
      bcrypt.compare(password, hashedPassword, (compareErr, isMatch) => {
        if (compareErr) {
          res.status(500).json({ error: 'Lỗi trong quá trình so sánh mật khẩu.' });
        } else if (isMatch) {
          // res.status(200).json({ message: 'Đăng nhập thành công.' });
          res.send({ status: "success", data: selectResults[0].name, msg: "" });
        } else {
          res.status(401).json({ error: 'Mật khẩu không đúng.' });
        }
      });
    }
  });
});

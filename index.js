const express = require('express');
const app = express();

// Định nghĩa một route cơ bản
app.get('/', (req, res) => {
    res.send('Hello World từ Expresse!d');
});
console.log('main 3')

console.log("Hello World từ Express!");

console.log("Hello World từ Express!");

console.log("Hello World từ Express!");
// Lắng nghe trên cổng 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng txtd, ${PORT}`);
});

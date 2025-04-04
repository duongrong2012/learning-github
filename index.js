const express = require('express');
const app = express();

// Định nghĩa một route cơ bản
app.get('/', (req, res) => {
    res.send('Hello World từ Express!');
});
<<<<<<< HEAD
console.log('main')

console.log("Hello World từ Express!");

=======
>>>>>>> 5eb6fe47a1ac89a019810ecbcab70efc9a6a52b0
console.log("Hello World từ Express!");

console.log("Hello World từ Express!");
// Lắng nghe trên cổng 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng txtd, ${PORT}`);
});

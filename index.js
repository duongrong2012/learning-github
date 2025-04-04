const express = require('express');
const app = express();

// Định nghĩa một route cơ bản
app.get('/', (req, res) => {
    res.send('Hello World từ Express!');
});
console.log('main')

// Lắng nghe trên cổng 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng txtd, ${PORT}`);
});

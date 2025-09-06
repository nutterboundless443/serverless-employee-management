const express = require('express');
const app = express();

app.use(express.json());

// 示例路由
app.get('/employees', (req, res) => {
  res.send('获取员工信息');
});

app.listen(3000, () => {
  console.log('服务运行在 http://localhost:3000');
});
import express from "express";

const app = express();
app.use(express.json());

// 서버 상태 확인
app.get("/", (req, res) => {
  res.send("API 살아있음");
});

// 문자 테스트 API
app.post("/send-sms", async (req, res) => {
  const { phone, message } = req.body;

  console.log("문자 요청:", phone, message);

  res.send({
    success: true,
    phone,
    message
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`서버 실행됨: ${PORT}`);
});

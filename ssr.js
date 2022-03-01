const express = require("express");
const puppeteer = require("puppeteer");
const app = express();

app.get("*", async (req, res) => {
  if (req.url === "/favicon.ico") {
    return res.send({
      code: 0,
    });
  }

  const url = 'http://localhost:9093' + req.url
  const brower = await puppeteer.launch()
  const page = await brower.newPage()
  await page.goto(url, {
      waitUntil: ['networkidle0']
  })
  const html = await page.content()
  res.send(html);
});

app.listen(8081, () => {
  console.log("ssr server");
});

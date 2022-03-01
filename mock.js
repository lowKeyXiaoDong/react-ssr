const express = require('express')
const app = express()

app.get('/api/user/info', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    res.header('Content-Type', 'application/json;charset=utf-8')
    res.json({
        code: 0,
        data: {
            name: '分贝通',
            best: '韩晓东'
        }
    })
})

app.get('/api/course/list', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    res.header('Content-Type', 'application/json;charset=utf-8')
    res.json({
        code: 0,
        list: [
            { name: '123', id: 1 },
            { name: '456', id: 2 },
            { name: '789', id: 3 },
            { name: '098', id: 4 },
        ]
    })
})

app.listen('9090', () => {
    console.log('mock启动成功');
})
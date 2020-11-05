export default {
  
    //支持自定义函数，API 参考 express@4
    'POST /api/users/newPage': (req, res) => {
        // 添加跨域请求头
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json;charset=UTF-8');
        res.write(JSON.stringify({req:"sd",code: 0,data: ["dad", "newpaheadasd", "basn"]
        }))
        res.end();
      },
  }
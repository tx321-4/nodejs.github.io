# nodejs.github.io
nodejs学习记录
# 安装 Express
cnpm install --save express <br />
以上命令会将 Express 框架安装在当前目录的 node_modules 目录中， node_modules 目录下会自动创建 express 目录。以下几个重要的模块是需要与 express 框架一起安装的：<br />
body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。<br />
cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。<br />
multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。<br />
<br />
cnpm install --save body-parser <br />
cnpm install --save cookie-parser <br />
cnpm install --save multer 

# 安装 Mysql 驱动
cnpm install --save express 
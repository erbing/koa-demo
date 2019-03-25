const Koa = require('koa')
const app = new Koa()

let testFun = () => {
  console.log(this)
}

app.use(async (ctx, next) => {
  // await testFun()
  console.log('中间件 todo something')
  await next()
  console.log('中间件 执行结束')

})



app.use(async (ctx, next) => {
  let stime = new Date().getTime()
  await next()
  let etime  = new Date().getTime()
  ctx.response.type = 'text/html'
  ctx.response.body = '<h2>Hello Koa2 World!!!</h2>'
  console.log(`请求地址: ${ctx.path}. 响应时间:${etime - stime}`)
})


app.listen(3000, ()=>{
  console.log('Server is already!!!')
})
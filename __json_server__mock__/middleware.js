module.exports = (req, res, next) => {
    if (req.method === 'POST') {
       console.log('使用了post')
    }
    next()
}
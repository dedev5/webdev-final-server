const HelloController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Life is good!')
    });
    app.get('/goodbye', (req, res) => {
        res.send('Life is good! Or is it?')
    });
    app.get('/', (req, res) => {
        res.send('Final Project API. Use /courses and /users')
    });
}
export default HelloController;
const router = require("express").Router();

// const userRoutes = require("./api/user-routes");

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api')

router.use('/api', apiRoutes)
router.use('/', homeRoutes);

//url will look like is localhost:3001
module.exports = router;

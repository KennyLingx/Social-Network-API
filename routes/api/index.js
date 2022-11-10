const router = require('express').Router();
const thoughtRoutes = require('./ThoughtRoutes');
const userRoutes = require('./UserRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
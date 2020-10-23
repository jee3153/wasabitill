const router = require('express').Router();
const pool = require('../db');

// get products
router.get('/sushi', async (req, res) => {
  try {
    const sushi = await pool.query(
      'SELECT * FROM product WHERE category_id = 1'
    );
    res.json(sushi.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/hotfood', async (req, res) => {
  try {
    const hotfood = await pool.query(
      'SELECT * FROM product WHERE category_id = 2'
    );
    res.json(hotfood.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

const app = require('./app');

/* MIDDLEWARE */

/* ROUTES */
// app.use('/staff', require('./routes/staff'));
// // get all transactions
// app.get('/transactions', async (req, res) => {
//   try {
//     const allTransactions = await pool.query('SELECT * FROM transaction');

//     res.json(allTransactions.rows);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// // get a transaction with id parametre
// app.get('/transactions/:id', async (req, res) => {
//   // console.log(req.params);
//   try {
//     const { id } = req.params; // get an id from req.params
//     const transaction = await pool.query(
//       'SELECT * FROM transaction WHERE transaction_id = $1',
//       [id],
//     );

//     res.json(transaction.rows[0]);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// // create a transaction
// app.post('/transactions', async (req, res) => {
//   try {
//     const { method, amount, card_number } = req.body;
//     const newTransaction = await pool.query(
//       'INSERT INTO transaction (method, amount, card_number, category_id, staff_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
//       [method, amount, card_number, category_id, staff_id]
//     );
//     res.json(newCategory)
//     res.json(newTransaction.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // update a transaction
// app.put('/transactions/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { amount } = req.body;
//     const updateTransaction = await pool.query(
//       'UPDATE transaction SET amount = $1 WHERE transaction_id = $2',
//       [amount, id]
//     );

//     res.json('A transaction was updated');
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // delete a transaction
// app.delete('/transactions/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteTransaction = await pool.query(
//       'DELETE FROM transaction WHERE transaction_id = $1',
//       [id]
//     );

//     res.json("A transaction deleted")
//   } catch (err) {
//     console.err(err.message)
//   }
// });

app.listen(5000, () => {
  console.log('server started on port 5000');
});

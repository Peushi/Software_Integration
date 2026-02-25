const db = require('./db');

const User = {
  async create(name, email) {
    const res = await db.query(
      'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *', 
      [name, email]
    );
    return res.rows[0];
  },

  async getAll() {
    const res = await db.query('SELECT * FROM users ORDER BY id ASC');
    return res.rows;
  },

  async update(id, name, email) {
    const res = await db.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    return res.rows[0];
  },

  async delete(id) {
    const res = await db.query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);
    return res.rows[0];
  }
};

module.exports = User;
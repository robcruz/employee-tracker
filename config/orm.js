let connection = require("./connection");

let orm = {

  all: (col, cb) => {
    let queryString = `
    SELECT e.id,
           e.first_name, 
           e.last_name, 
           r.title, 
           d.name as department,
           r.salary,
           concat(m.first_name, " ", m.last_name) as manager
    FROM   employee e
           INNER JOIN role r
           ON e.role_id = r.id
           INNER JOIN department d
           ON r.department_id = d.id
           LEFT JOIN manager m
           ON e.manager_id = m.id
    ORDER BY ${col};
    `;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  roles: (cb) => {
    let queryString = "select id, title from role;";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  managers: (cb) => {
    let queryString = "select * from manager;";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: (firstName, lastName, roleId, managerId, cb) => {
    let queryString = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', ${roleId}, ${managerId});`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update: (roleId, employeeId, cb) => {
    let queryString = `UPDATE employee set role_id = ${roleId} where id = ${employeeId};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  delete: (id, cb) => {
    let queryString = `delete from employee where id = ${id};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;

// Import MySQL connection.
let connection = require("./connection");

// Object for all our SQL statement functions.
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
           INNER JOIN manager m
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

  create: function(table, cols, vals, cb) {



    let queryString = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
    queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(table, condition, cb) {
    let queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;

//
// // Helper function for SQL syntax.
// // Let's say we want to pass 3 values into the mySQL query.
// // In order to write the query, we need 3 question marks.
// // The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// // ["?", "?", "?"].toString() => "?,?,?";
// function printQuestionMarks(num) {
//   var arr = [];
//
//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }
//
//   return arr.toString();
// }
//
// // Helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//   var arr = [];
//
//   // loop through the keys and push the key/value as a string int arr
//   for (var key in ob) {
//     var value = ob[key];
//     // check to skip hidden properties
//     if (Object.hasOwnProperty.call(ob, key)) {
//       // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//       // e.g. {sleepy: true} => ["sleepy=true"]
//       arr.push(key + "=" + value);
//     }
//   }
//
//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// }

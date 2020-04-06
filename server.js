const inquirer = require('inquirer');
const orm = require("./config/orm");
const cTable = require('console.table');

console.clear();

start();

async function fetchQuestionnaire(cb) {
    const { answer } = await inquirer.prompt({
        type: "list",
        name: "answer",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees By Department",
            "View All Employees By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager"
        ]
    });
    cb(answer);
}

async function fetchEmployeeName(cb) {
    const { firstName, lastName } = await inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "firstName"
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "lastName"
        }
    ]);
    cb(firstName, lastName );
}

async function fetchEmployeeRoleId(results, cb) {
    let choices = [];
    let idLookup = {};
    for (let result of results) {
        choices.push(result.title);
        idLookup[result.title] = result.id
    }

    let question = "What is the employee's role?";
    const { role } = await inquirer.prompt({
        type: "list",
        name: "role",
        message: question,
        choices: choices
    });
    cb(idLookup[role]);
}

async function fetchEmployeeManagerId(results, cb) {
    let choices = [];
    let idLookup = {};
    for (let result of results) {
        const name = `${result.first_name} ${result.last_name}`;
        choices.push(name);
        idLookup[name] = result.id
    }

    let question = "Who is the employee's manager?";
    const { name } = await inquirer.prompt({
        type: "list",
        name: "name",
        message: question,
        choices: choices
    });
    cb(idLookup[name]);
}

async function fetchEmployeeId(results, cb) {
    let choices = [];
    let idLookup = {};
    for (let result of results) {
        const name = `${result.first_name} ${result.last_name}`;
        choices.push(name);
        idLookup[name] = result.id
    }

    let question = "Which employee would you like to remove?";
    const { name } = await inquirer.prompt({
        type: "list",
        name: "name",
        message: question,
        choices: choices
    });
    cb(idLookup[name]);
}

async function start() {
    await fetchQuestionnaire((answer) => {
        switch (answer) {
            case "View All Employees":
                orm.all('id', table => {
                    console.table(table);
                    start();
                });
                break;
            case "View All Employees By Department":
                orm.all('name', table => {
                    console.table(table);
                    start();
                });
                break;
            case "View All Employees By Manager":
                orm.all('manager', table => {
                    console.table(table);
                    start();
                });
                break;
            case "Add Employee":
                fetchEmployeeName((firstName, lastName ) => {
                    orm.roles(results => {
                        fetchEmployeeRoleId(results, roleId => {
                            orm.managers(results => {
                                fetchEmployeeManagerId(results, managerId => {
                                    orm.create(firstName, lastName, roleId, managerId, (results) => {
                                        // console.log(`firstName: ${firstName}\nlastName: ${lastName}\nroleId: ${roleId}\nmanagerId: ${managerId}`);
                                        start();
                                    })
                                })
                            })
                        });
                    });
                });
                break;
            case "Remove Employee":
                orm.all('id', results => {
                    fetchEmployeeId(results, id => {
                        orm.delete(id, results => {
                            start();
                        })
                    })
                });
                break;
            case "Update Employee Role":
                orm.all('id', results => {
                    fetchEmployeeId(results, employeeId => {
                        fetchEmployeeRoleId(results, roleId => {
                            orm.update(roleId, employeeId, (result) => {
                                start()
                            })
                        })
                    })
                });
                break;
            default:
                break;
        }
    })
}

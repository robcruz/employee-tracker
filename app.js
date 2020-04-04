const inquirer = require('inquirer');
const orm = require("./config/orm");
const cTable = require('console.table');

start();

async function start() {
    console.clear();

    while(true){
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

        if (answer === 'View All Employees'){
            orm.view_all_employees((table) => {
                console.table(table);
            });
        } else if (answer === 'View All Employees By Department'){

        } else if (answer === 'View All Employees By Manager'){

        } else if (answer === 'Add Employee'){

        } else if (answer === 'Remove Employee'){

        } else if (answer === 'Update Employee Role'){

        } else if (answer === 'Update Employee Manager'){

        } else {

        }

        console.log('\n');
    }
}

// while(true) {
//     let employee = await inquirer.prompt({
//         type: "checkbox",
//         message: "Choose employee role you want to enter next:",
//         name: "role",
//         choices: [
//             "Engineer",
//             "Intern",
//             "Done"
//         ]
//     });
//
//     let role = employee.role.shift();
//
//     if (role === 'Engineer') {
//         let engineerPrompt = await inquirer.prompt([
//             {
//                 message: "Enter engineer's name:",
//                 name: "name"
//             },
//             {
//                 message: "Enter engineer's email:",
//                 name: "email"
//             },
//             {
//                 message: "Enter engineer's Github account:",
//                 name: "github"
//             }
//         ]);
//
//         let engineer = new Engineer();
//         engineer.name = engineerPrompt.name;
//         engineer.email = engineerPrompt.email;
//         engineer.github = engineerPrompt.github;
//         engineer.id = interns.length + managers.length + engineers.length + 1;
//
//         engineers.push(engineer);
//
//     } else if (role === 'Intern') {
//         let internPrompt = await inquirer.prompt([
//             {
//                 message: "Enter intern's name:",
//                 name: "name"
//             },
//             {
//                 message: "Enter intern's email:",
//                 name: "email"
//             },
//             {
//                 message: "Enter intern's School:",
//                 name: "school"
//             }
//         ]);
//
//         let intern = new Intern();
//         intern.name = internPrompt.name;
//         intern.email = internPrompt.email;
//         intern.school = internPrompt.school;
//         intern.id = interns.length + managers.length + engineers.length + 1;
//
//         interns.push(intern);
//
//     } else {
//         let managerHtml = generateManagerHtml(managers.shift());
//         let engineerHtml = '';
//         for (let engineer of engineers) engineerHtml += generateEngineerHtml(engineer);
//         let internHtml = '';
//         for (let intern of interns) internHtml += generateInternHtml(intern);
//         let engineerSeparator = "";
//         if (engineers.length > 0) engineerSeparator = "<hr>";
//         let internSeparator = "";
//         if (interns.length > 0) internSeparator = "<hr>";
//         let htmlOutput = generateHTML(managerHtml, engineerSeparator, engineerHtml, internSeparator, internHtml);
//         writeHtmlOutput(htmlOutput);
//         break;
//     }
// }

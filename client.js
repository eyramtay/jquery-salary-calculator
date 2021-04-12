console.log('--- Weekend Project ---');

const startingEmployees = [
    {
        firstName: 'Jen', 
        lastName: 'Barber',
        iD: 4521,
        title: 'Team Lead',
        annualSalary: 80000,
    },
    {
        firstName: 'Maurice', 
        lastName: 'Moss',
        iD: 8724,
        title: 'Support Team',
        annualSalary: 58000,
    },
    {
        firstName: 'Roy', 
        lastName: 'Smith',
        iD: 9623,
        title: 'Quality Assurance',
        annualSalary: 48000,
    }
];

const budget = 20000;

// function calculateEmployeeCost() {
//     console.log('In calculateEmployeeCost');

//     // let employeeCost = startingEmployees.annualSalary / 12;

//     for( let i = 0; i < startingEmployees.length; i++) {
//         startingEmployees[i].annualSalary = startingEmployees[i].annualSalary / 12;
//         console.log(startingEmployees[i].annualSalary);
//     }
// }

function calculateBuget() {
    console.log('in calculateBudget');

    let totalBudget = 0;
    for (let i = 0; i < startingEmployees.length; i++) {
        totalBudget += Number(startingEmployees[i].annualSalary/12);
    }
    console.log(totalBudget);
    let budgetOnDom = $('#totalBudgetDisplay');
    budgetOnDom.empty();
    budgetOnDom.append(totalBudget);
}

$(document).ready(readyNow);


function readyNow() {
    // addEmployeeButton();
    $( '#add-employee' ).on('click', addEmployeeButton);
    calculateBuget();
}

function addEmployeeButton() {
    console.log('In addEmployee');

    let newEmployee = {
        firstName: $('#in-first-name').val(),
        lastName: $('#in-last-name').val(),
        iD: $('#in-ID').val(),
        title: $('#in-title').val(),
        annualSalary: Number($('#in-salary').val()),
    };

    startingEmployees.push( newEmployee );
        // $('#out-employees').append(`<tr>
        //     <td>${newEmployee.firstName}</td>
        //     <td>${newEmployee.lastName}</td>
        //     <td>${newEmployee.iD}</td>
        //     <td>${newEmployee.title}</td>
        //     <td>${newEmployee.annualSalary}</td>
        //     <td><button class="deleteButton">Delete</button></td>
        // </tr>`)
        
        // $('#add-employee').empty();
        renderEmployees();

        clearInputFields();

        calculateBuget();
    }

    function renderEmployees() {
        $('#out-employees').empty();

        for (let person of startingEmployees) {
            $('#out-employees').append(`
            <tr>
                <td>${person.firstName}</td>
                <td>${person.lastName}</td>
                <td>${person.iD}</td>
                <td>${person.title}</td>
                <td>${person.annualSalary}</td>
                <td>
                <button class"delete">Delete</button>
                </td>
            </tr>`)
        }
    }

    function clearInputFields() {
        $('#in-first-name').val('');
        $('#in-last-name').val('');
        $('#in-ID').val('');
        $('#in-title').val('');
        $('#in-salary').val('');
    }

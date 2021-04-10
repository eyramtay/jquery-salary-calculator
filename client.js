console.log('--- Weekend Project ---');

$(document).ready(readyNow);

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

function readyNow() {
    // addEmployeeButton();
    $( '#add-employee' ).on('click', addEmployeeButton);
}

function addEmployeeButton() {
    console.log('In addEmployee');

    let newEmployee = {
        firstName: $('#in-first-name').val(),
        lastName: $('#in-last-name').val(),
        iD: $('#in-ID').val(),
        title: $('#in-title').val(),
        annualSalary: $('#in-salary').val(),
    }
        $('.employees').append(`<tr>
            <td>${newEmployee.firstName}</td>
            <td>${newEmployee.lastName}</td>
            <td>${newEmployee.iD}</td>
            <td>${newEmployee.title}</td>
            <td>${newEmployee.annualSalary}</td>
            <td>&nbsp;</td>
        </tr>`)
        
        $('#in-first-name').val();
    }

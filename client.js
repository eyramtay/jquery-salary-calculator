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

$(document).ready(readyNow);


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
        $('#out-employees').append(`<tr>
            <td>${newEmployee.firstName}</td>
            <td>${newEmployee.lastName}</td>
            <td>${newEmployee.iD}</td>
            <td>${newEmployee.title}</td>
            <td>${newEmployee.annualSalary}</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>`)
        
        // $('#add-employee').empty();
        clearInputFields();
    }

    function renderEmployees() {
        $('#out-employees').empty();

        for (let person of startingEmployees) {
            $('#out-employees').append(`
            <tr>
                <td>${newEmployee.firstName}</td>
                <td>${newEmployee.lastName}</td>
                <td>${newEmployee.iD}</td>
                <td>${newEmployee.title}</td>
                <td>${newEmployee.annualSalary}</td>
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

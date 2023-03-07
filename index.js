// Write your solution in this file!
const employee = {
    name: "Johnny Joestar",
    streetAddress: "10 Homie way"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = { ...employee}
    newEmployee[key] = value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
   const newEmployee1 = { ...employee}
    delete newEmployee1[key]
    return newEmployee1
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key]
   return employee
}

const employees =[
{name:'shojib',designation:'webdeveloper',salary:30000},
{name:'jannatul ferdusi',designation:'content writer',salary:25000},
{name:'hafsa',designation:'digital marketer',salary:20000}
]
// // console.log(employees[0].salary)
// for(const emp of employees){
//     console.log(emp.name,emp.salary,emp.designation)
// }
employees[2].name = 'orpita jannat Hafsa'
for(const emp of employees){
    const person =emp ;
    const personInfo = person.name + ": " + person.designation + ' '+ person.salary;
    console.log(personInfo)
}
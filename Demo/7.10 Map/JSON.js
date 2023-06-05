function runActivity() {
  let employees = [
    {
      first_name: "Daiben",
      last_name: "Sanchez",
      position: "Sanitary Engineer",
      department: "Utilities",
    },
    {
      first_name: "Manny",
      last_name: "Pacquiao",
      position: ["Legal Officer 2", "Consultant", "Case Manager"],
      department: "Public Relations",
      cases_won: 4,
    },
    {
      first_name: "Jinky",
      last_name: "Pacquiao",
      position: "Human Resources Lead",
      department: "Human Resources",
    },
  ];
  console.log(typeof employees);
  function runActivity() {
    for (let i = 0; i < employees[1].position.length; i++) {
      console.log(employees[1].position[i]);
    }
    //   console.log(employees[1].position[1]);

    //   console.log(employees[2].department);
    //   let first_name = prompt("FIRST NAME?");
    //   let last_name = prompt("LAST NAME?");
    //   let position = prompt("POSITION?");
    //   let department = prompt("DEPARTMENT");
    //   employees.push({
    //     first_name: first_name,
    //     last_name: last_name,
    //     position: position,
    //     department: department,
    //   });
    //   employees[3].position = "Trash Manager";
    for (let i = 0; i < employees.length; i++) {
      console.log(
        employees[i].first_name +
          " " +
          employees[i].last_name +
          " | " +
          employees[i].position +
          " | " +
          employees[i].department
      );
    }
  }
}

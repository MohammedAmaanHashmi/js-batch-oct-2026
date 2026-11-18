class Employee {
  empID;
  role;
  empSalary;

  constructor(empID = 0, role = "Not assigned", empSalary = 0) {
    this.empID = empID;
    this.role = role;
    this.empSalary = empSalary;
  }

  loginTime() {
    console.log("Every emp have to complete 9 hours");
  }

  taskAssigned() {
    console.log(
      "Parent - Every emp have to perform the task which is assigned",
    );
  }
}

class QA extends Employee {
  skills;

  constructor(
    empID = 0,
    role = "Not assigned",
    empSalary = 0,
    skills = "Automation Testing",
  ) {
    super(empID, role, empSalary); // call the parent class constructor
    this.skills = skills;
  }

  roles() {
    console.log("QA will perform all QA activities");
  }

  display() {
    console.log(
      `Emp ID - ${this.empID} will be joined for role ${this.role} will skills ${this.skills} will salary of ${this.empSalary}`,
    );
  }

  taskAssigned() {
    console.log("Child - Task will be assigned during sprint");
  }
}

const obj1 = new QA(101, "Sr. SDET", 50, "Manual+Automation+AI");
obj1.roles(); //same class
obj1.loginTime(); // parent class
obj1.taskAssigned(); // Child class
obj1.display();

const obj2 = new Employee();
obj2.taskAssigned();  //parent class


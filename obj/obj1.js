let employee = {
  name: "Alice",
  position: "Software Engineer",
  salary: 60000,
  department: "Development",
  yearsOfExperience: 7,
  getdetails() {
    console.log(this.name);
    console.log(this.position);
    console.log(this.salary);
    console.log(this.department);
    console.log(this.yearsOfExperience);
  },
  giveraise(amount) {
    employee.salary += amount;
    console.log(this.salary);
  },
  changeposition(newposition) {
    this.position = newposition;
  },
  isEligibleForPromotion() {
    return this.yearsOfExperience > 5;
  },
};
// Task 1: Print employee details
employee.getdetails();

// Task 2: Give a raise of 5000
employee.giveraise(5000);

// Task 3: Change position to "Senior Software Engineer"
employee.changeposition("Senior Software Engineer");

// Task 4: Check promotion eligibility
console.log(`Eligible for promotion: ${employee.isEligibleForPromotion()}`);

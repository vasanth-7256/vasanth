let employees = [
  { id: 1, name: "John Doe", department: "IT", role: "Engineer", email: "john@company.com", phone: "9876543210" },
  { id: 2, name: "Jane Smith", department: "HR", role: "Manager", email: "jane@company.com", phone: "9123456780" }
];

const employeeList = document.getElementById("employeeList");
const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const addEmployeeForm = document.getElementById("addEmployeeForm");

function renderEmployees() {
  const searchTerm = searchInput.value.toLowerCase();
  const deptFilter = departmentFilter.value;

  employeeList.innerHTML = "";

  const filtered = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm) &&
    (deptFilter === "" || emp.department === deptFilter)
  );

  if (filtered.length === 0) {
    employeeList.innerHTML = "<p>No employees found.</p>";
    return;
  }

  filtered.forEach(emp => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    card.innerHTML = `
      <div class="employee-card">
        <h5>${emp.name}</h5>
        <p><b>Department:</b> ${emp.department}</p>
        <p><b>Role:</b> ${emp.role}</p>
        <p><b>Email:</b> ${emp.email}</p>
        <p><b>Phone:</b> ${emp.phone}</p>
      </div>
    `;
    employeeList.appendChild(card);
  });
}

// Search and Filter Events
searchInput.addEventListener("input", renderEmployees);
departmentFilter.addEventListener("change", renderEmployees);

// Add Employee Event
addEmployeeForm.addEventListener("submit", function(e){
  e.preventDefault();
  const newEmp = {
    id: employees.length + 1,
    name: document.getElementById("empName").value,
    department: document.getElementById("empDept").value,
    role: document.getElementById("empRole").value,
    email: document.getElementById("empEmail").value,
    phone: document.getElementById("empPhone").value
  };
  employees.push(newEmp);
  addEmployeeForm.reset();
  renderEmployees();
});

// Initial Render
renderEmployees();

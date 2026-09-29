
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        function Employee(name, email, department) {
            this.name = name;
            this.email = email;
            this.department = department;
            this.salary = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        }

        function renderEmployees() {
            let tableBody = document.getElementById("employeeTableBody");
            tableBody.innerHTML = ""; 

            let totalSalary = 0;

            employees.forEach(function(emp) {
                totalSalary += emp.salary; 

                let row = `<tr>
                    <td>${emp.name}</td>
                    <td>${emp.email}</td>
                    <td>${emp.department}</td>
                    <td>$${emp.salary}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });

            
            document.getElementById("totalSalary").innerText = "$" + totalSalary;
        }

     
        let subtn = document.getElementById("submitbtn");
        subtn.addEventListener("click", function() {
            let nameinput = document.getElementById("name").value;
            let emailinput = document.getElementById("email").value;
            let departmentinput = document.getElementById("department").value;

            if (!nameinput || !emailinput || !departmentinput) {
                alert("يرجى ملء جميع الحقول!");
                return;
            }


            let newEmployee = new Employee(nameinput, emailinput, departmentinput);


            employees.push(newEmployee);

            localStorage.setItem("employees", JSON.stringify(employees));

            renderEmployees();

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("department").value = "";
        });

        window.onload = function() {
            renderEmployees();
        };
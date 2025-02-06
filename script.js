function validateForm() {
    const studentId = document.getElementById('student-id').value;
    const studentName = document.getElementById('student-name').value;
    const email = document.getElementById('email').value;
    
    if (!studentId || !studentName || !email) {
        alert("All fields are required!");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address!");
        return false;
    }

    // If all checks pass, form will be submitted
    return true;
}

// Student Data
const students = [
    { id: "S001", name: "Alice Johnson", email: "alice.johnson@example.com" },
    { id: "S002", name: "Bob Smith", email: "bob.smith@example.com" },
    { id: "S003", name: "Charlie Brown", email: "charlie.brown@example.com" },
    { id: "S004", name: "David Wilson", email: "david.wilson@example.com" },
    { id: "S005", name: "Emma Davis", email: "emma.davis@example.com" },
    { id: "S006", name: "Frank Thomas", email: "frank.thomas@example.com" },
    { id: "S007", name: "Grace Lee", email: "grace.lee@example.com" },
    { id: "S008", name: "Henry White", email: "henry.white@example.com" },
    { id: "S009", name: "Isabella Martinez", email: "isabella.martinez@example.com" },
    { id: "S010", name: "Jack Taylor", email: "jack.taylor@example.com" }
];

// Assign students to classes
const classes = {
    "Intro to Programming": ["S001", "S002", "S003", "S004"],
    "Data Structures": ["S005", "S006", "S007"],
    "Web Development": ["S008", "S009", "S010"]
};

function showStudents() {
    const courseSelect = document.getElementById("course-select");
    const selectedCourse = courseSelect.value;

    const studentsList = document.getElementById("students-list");
    const studentsTableBody = document.getElementById("students-table-body");

    // Clear previous student list
    studentsTableBody.innerHTML = "";

    if (selectedCourse && classes[selectedCourse]) {
        const studentIds = classes[selectedCourse];

        studentIds.forEach(studentId => {
            const student = students.find(s => s.id === studentId);
            if (student) {
                const row = studentsTableBody.insertRow();
                row.insertCell().textContent = student.name;
                row.insertCell().textContent = student.id;
            }
        });

        studentsList.style.display = "block";
    } else {
        studentsList.style.display = "none";
    }
}


// Instructor

function validateInstructorLogin() {
    const instructorId = document.getElementById('instructor-id').value;
    const password = document.getElementById('password').value;

    if (!instructorId || !password) {
        alert("Instructor ID and Password are required!");
        return false;
    }

    // successful login
    if (instructorId === "instructor123" && password === "password123") {
        // Show the schedule section
        document.getElementById('instructor-schedule-section').style.display = 'block';

        // Populate the schedule 
        const scheduleData = [
            { course: "Intro to Programming", date: "2025-01-10", time: "10:00 AM", location: "Room 101" },
            { course: "Data Structures", date: "2025-01-12", time: "02:00 PM", location: "Room 202" },
            { course: "Web Development", date: "2025-01-15", time: "11:00 AM", location: "Room 303" }
        ];

        const scheduleTable = document.getElementById('schedule-table').getElementsByTagName('tbody')[0];
        scheduleTable.innerHTML = ''; // Clear existing rows

        scheduleData.forEach(session => {
            const row = scheduleTable.insertRow();
            row.insertCell().textContent = session.course;
            row.insertCell().textContent = session.date;
            row.insertCell().textContent = session.time;
            row.insertCell().textContent = session.location;
        });

        return false; // Prevent form submission
    } else {
        alert("Invalid Instructor ID or Password!");
        return false;
    }
}

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

// Intructor

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

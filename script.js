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

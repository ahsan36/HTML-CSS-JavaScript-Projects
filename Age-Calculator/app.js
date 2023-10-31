const container = document.querySelector('.container');
const error = document.querySelector('.error');

const getAge = () => {
    const dobValue = document.getElementById('dob').value;

    // stores dob (India Standard time)

    let dob = new Date(dobValue);

    // Current date

    let currDate = new Date();

    // Difference between current and stores dob

    let diff = currDate - dob;

    let age = diff / (1000 * 60 * 60 * 24 * 365); // 22.922

    calAge(age);
}

// Function for calculate the age

const calAge = (age) => {
    let year = Math.floor(age); // 22
    let remainYear = age - year; // 0.6976

    let monthDiff = remainYear * 12; // 8.3712
    let month = Math.floor(monthDiff); // 8

    let remainMonth = monthDiff - month; // 0.3712

    let day = Math.floor(remainMonth * 30); // 11

    displayAge(year, month, day);
}

// Function for display the

const displayAge = (y, m, d) => {
    const years = document.getElementById('years');
    const months = document.getElementById('months');
    const days = document.getElementById('days');

    years.innerText = y;
    months.innerText = m;
    days.innerText = d;
}

container.addEventListener('input', getAge);

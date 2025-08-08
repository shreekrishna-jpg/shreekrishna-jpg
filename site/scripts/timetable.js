//below is course code, name, and weekly hours in an array of course data ordered by term
const courses = [
    { term: "Winter", code: "CSD123", name: "Computing Environment and Tools", hrs: 3 },
    { term: "Winter", code: "CSD120", name: "Communication", hrs: 2 },
    { term: "Winter", code: "CSD110", name: "Technology in Society", hrs: 3 },
    { term: "Winter", code: "CSD113", name: "Intro to Programming", hrs: 4 },
    { term: "Winter", code: "CSD220", name: "Hardware/OS/Network", hrs: 3 },
    { term: "Winter", code: "CSD150", name: "Computer Math", hrs: 4 },
    { term: "Summer", code: "CSD123", name: "Programming Concepts", hrs: 4 },
    { term: "Summer", code: "CSD120", name: "Intro to Web Development", hrs: 3 },
    { term: "Summer", code: "CSD110", name: "Database 1", hrs: 3 },
    { term: "Summer", code: "CSD113", name: "Business Application and Tools", hrs: 3 },
    { term: "Summer", code: "CSD220", name: "System Analysis and Design", hrs: 3 },
    { term: "Summer", code: "CSD150", name: "Emerging Technology", hrs: 2 }
];
//This code structures and adds a course schedule dynamically to the page.
function createTimetable() {
    const tableContainer = document.getElementById('making-a-table');
    if (!tableContainer) {
        console.error("Timetable container with ID 'making-a-table' not found.");
        return;
    }

    const table = document.createElement('table');
    const caption = document.createElement('caption');
    caption.textContent = "Table 1. Current Courses";
    table.appendChild(caption);

    const thead = document.createElement('thead');
    thead.innerHTML = `
    <tr>
      <th scope="col" rowspan="2">Term</th>
      <th scope="col" colspan="3">Course</th>
    </tr>
    <tr>
      <th scope="col">Code</th>
      <th scope="col">Name</th>
      <th scope="col">Hrs/Week</th>
    </tr>
  `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    const groupedCourses = courses.reduce((acc, course) => {
        (acc[course.term] = acc[course.term] || []).push(course);
        return acc;
    }, {});

    for (const term in groupedCourses) {
        groupedCourses[term].forEach((course, index) => {
            const tr = document.createElement('tr');

            if (index === 0) {
                const th = document.createElement('th');
                th.scope = "row";
                th.rowSpan = groupedCourses[term].length;
                th.textContent = term;
                tr.appendChild(th);
            }

            const tdCode = document.createElement('td');
            tdCode.textContent = course.code;
            tr.appendChild(tdCode);

            const tdName = document.createElement('td');
            tdName.textContent = course.name;
            tr.appendChild(tdName);

            const tdHrs = document.createElement('td');
            tdHrs.textContent = course.hrs;
            tr.appendChild(tdHrs);

            tbody.appendChild(tr);
        });
    }
    table.appendChild(tbody);

    const totalHours = courses.reduce((sum, course) => sum + course.hrs, 0);
    const tfoot = document.createElement('tfoot');
    tfoot.innerHTML = `
    <tr>
      <th scope="col" colspan="3">Total</th>
      <td align="left">${totalHours}</td>
    </tr>
  `;
    table.appendChild(tfoot);

    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}
createTimetable();
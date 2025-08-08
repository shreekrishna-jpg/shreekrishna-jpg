// Provide the list of navigation links along with their target URLs and content.
const navLinks = [
    { text: "Home", url: "index.html" },
    { text: "Glossary", url: "glossary.html" },
    { text: "Links", url: "links.html" },
    { text: "Survey", url: "survey.html" }
];

function createNavBar() {
    const header = document.querySelector('header');

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    // This loops through each links and make a list of items dynamically
    navLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);

    header.innerHTML = '';
    header.appendChild(nav);
}

createNavBar();

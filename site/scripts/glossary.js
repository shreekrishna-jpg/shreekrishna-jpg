const glossary = [
    { term: "Sagarmatha", description: "Highest peak of the world (8848.86 meters)"},
    { term: "Dashain", description: "One of the popular festival of Nepal who follow hinduism"},
    { term: "Pilgrimage", description: "A journey made by a person to a sacred place for religious or spiritual reasons"},
    { term: "Zeal", description: "Describes a strong eagerness to do something, especially with dedication and excitement"},
    { term: "Subalpine", description: "The area above the tree line where trees can not grow"},
];

const main = document.getElementById("Creating-a-glossary");

const heading = document.createElement("h1");
heading.textContent = "Glossary";
main.appendChild(heading);

const dl = document.createElement("dl");
glossary.forEach(entry => {
    const dt = document.createElement("dt");
    dt.textContent = entry.term;

    const dd = document.createElement("dd");
    dd.textContent = entry.description;

    dl.appendChild(dt);
    dl.appendChild(dd);
});
main.appendChild(dl);

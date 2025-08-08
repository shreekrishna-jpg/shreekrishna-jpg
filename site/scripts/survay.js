//This is the survey form questions defined as structured data for reuse and scalability
const surveyQuestions = [
    { type: "text", label: "What is your name?", name: "name_field", required: true },
    { type: "email", label: "What is your email?", name: "email_field", required: true },
    { type: "number", label: "Which whole number is best?", name: "best_whole_number", min: 0, step: 1 },
    { type: "date", label: "Which day is best?", name: "best_day" },
    { type: "select", label: "Which bear is best?", name: "best_bear", required: true, options: ["", "Black", "Brown", "Care", "Panda", "Polar", "Teddy"] },
    { type: "radio", legend: "Do you like radio buttons?", name: "enjoys_radio_buttons", options: [{ label: "Yes", value: "yes" }, { label: "No", value: "no" }, { label: "None of your business", value: "?", checked: true }] },
    { type: "textarea", label: "What is the meaning of life?", name: "life_meaning", rows: 5, cols: 50, placeholder: "Enter the correct answer here" }
];

// this code creates and adds the survey form into the "creating-a-web-form" element.
function createSurveyForm() {
    const formContainer = document.getElementById('creating-a-web-form');
    if (!formContainer) {
        console.error("Survey form container with ID 'creating-a-web-form' not found.");
        return;
    }

    formContainer.innerHTML = '<h1>Survey</h1>';
    const form = document.createElement('form');
    form.action = "https://formspree.io/f/manjorld";
    form.method = "POST";

    // This creates the necessary form controls after repeating through each question object as loops are used.
    surveyQuestions.forEach(question => {
        if (question.type === "radio") {
            const fieldset = document.createElement('fieldset');
            const legend = document.createElement('legend');
            legend.textContent = question.legend;
            fieldset.appendChild(legend);

            const ul = document.createElement('ul');
            question.options.forEach(option => {
                const li = document.createElement('li');
                const input = document.createElement('input');
                input.type = "radio";
                input.name = question.name;
                input.value = option.value;
                input.id = `${question.name}_${option.value}`;
                if (option.checked) {
                    input.checked = true;
                }

                const label = document.createElement('label');
                label.htmlFor = input.id;
                label.textContent = option.label;

                li.appendChild(input);
                li.appendChild(label);
                ul.appendChild(li);
            });
            fieldset.appendChild(ul);
            form.appendChild(fieldset);
        } else {
            const p = document.createElement('p');
            const label = document.createElement('label');
            label.htmlFor = question.name;
            label.textContent = question.label;
            if (question.required) {
                label.innerHTML += ' <abbr title="required" aria-label="required">*</abbr>';
            }

            let inputElement;
            if (question.type === "select") {
                inputElement = document.createElement('select');
                inputElement.id = question.name;
                inputElement.name = question.name;
                if (question.required) {
                    inputElement.required = true;
                }
                question.options.forEach((optionText, index) => {
                    const option = document.createElement('option');
                    option.value = optionText.toLowerCase();
                    option.textContent = optionText;
                    if (index === 0 && optionText === "") {
                        option.selected = true;
                    }
                    inputElement.appendChild(option);
                });
            } else if (question.type === "textarea") {
                inputElement = document.createElement('textarea');
                inputElement.id = question.name;
                inputElement.name = question.name;
                inputElement.rows = question.rows;
                inputElement.cols = question.cols;
                inputElement.placeholder = question.placeholder;
            } else {
                inputElement = document.createElement('input');
                inputElement.type = question.type;
                inputElement.id = question.name;
                inputElement.name = question.name;
                if (question.required) {
                    inputElement.required = true;
                }
                if (question.min) {
                    inputElement.min = question.min;
                    inputElement.setAttribute('aria-valuemin', question.min);
                }
                if (question.step) {
                    inputElement.step = question.step;
                }
            }

            p.appendChild(label);
            p.appendChild(inputElement);
            form.appendChild(p);
        }
    });

    const submitP = document.createElement('p');
    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.textContent = "Send";
    submitP.appendChild(submitButton);
    form.appendChild(submitP);

    formContainer.appendChild(form);
}
createSurveyForm();
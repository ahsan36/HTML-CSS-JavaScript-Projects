function addCode () {
    const htmlCode = document.getElementById("html").value;
    const cssCode = document.getElementById("css").value;
    const jsCode = document.getElementById("js").value;
    const outputField = document.getElementById("output");

    outputField.contentDocument.body.innerHTML = htmlCode + `<style> ${cssCode} </style>`;

    // evaluate JavaScript code

    outputField.contentWindow.eval(jsCode);
}
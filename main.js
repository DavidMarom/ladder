// function addToContainer(el) {
//     document.querySelector('.main-container').innerHTML += `${el}`;
// }

function getContent() {
    addTitleBox(prompt('Enter Title'));

    let content = [];
    let tempA = '';
    let tempB = '';
    let tempC = '';

    while (true) {
        tempA = prompt('Enter Item: ');
        tempB = prompt('How many are done? ');
        tempC = prompt('Items total: ');
        content.push([tempA, tempB, tempC]);

        if (!confirm('Add another item?')) { break }
    }
    addBox(content);

    document.querySelector('button').remove();

}

function addTitleBox(string) {
    document.querySelector('.main-container').innerHTML += `
    <div class="title">
    <p>${string}</p>
    </div>
    `
}

function addRegulartitle(title) {
    aaa.innerHTML += `
    <h1>${title}</h1>
    `;
}

function addBox(content) {
    document.querySelector('.main-container').innerHTML += `<div class="box-01"></div>`;
    let ccc = document.querySelector('.box-01');
    for (let i = 0; i < content.length; i++) {
        let temp = content[i];
        ccc.innerHTML += `
            <div class="strip">
            <p>${temp[0]}</p>
            <p>${temp[1]}/${temp[2]}</p>
            </div>
    `;
    }
}
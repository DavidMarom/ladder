let aaa = document.querySelector('.area-01');

function onLoad() {

    getContent();



    // box([
    //     ['Complete 5 lessons', 3, 5],
    //     ['Do homework', 2, 3],
    //     ['Subscribe to our Youtube channel', 0, 1]

    // ]);

}

function getContent() {

    let title = '';
    let content = [];
    let tempA = '';
    let tempB = '';
    let tempC = '';

    title = prompt('Enter title');
    titleBox(title);


    while (tempA != 'stop') {

        tempA = prompt('Enter item: ');
        if (tempA === 'stop'){break}
        tempB = prompt('Items done: ');
        if (tempB === 'stop'){break}
        tempC = prompt('Items total: ');
        if (tempC === 'stop'){break}

        content.push([tempA, tempB, tempC]);

    }


    box(content);





}



function titleBox(string) {
    aaa.innerHTML += `
    <div class="title">
    <p>${string}</p>
    </div>
    `
}

function title(title) {
    aaa.innerHTML += `
    <h1>${title}</h1>
    `;
}

function box(content) {

    aaa.innerHTML += `<div class="box-01"></div>`;
    let bbb = document.querySelector('.box-01');

    for (let i = 0; i < content.length; i++) {
        let temp = content[i];
        bbb.innerHTML += `
            <div class="strip">
            <p>${temp[0]}</p>
            <p>${temp[1]}/${temp[2]}</p>
            </div>
    `;
    }
}


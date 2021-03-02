let aaa = document.querySelector('.area-01');

function onLoad() {
    titleBox('Progress');

    box([
        ['Complete 5 lessons', 3, 5],
        ['Do homework', 2, 3],
        ['Subscribe to our Youtube channel', 0, 1]

    ]);

}

function titleBox(string){

    aaa.innerHTML+=`
    
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


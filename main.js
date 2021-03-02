let aaa = document.querySelector('.area-01');

function onLoad() {
    title('This is my title');
    title('This is the second line');

    box([
        ['aaaa', 3, 4],
        ['bbbb', 0, 1]
    ]);

}

function title(title) {
    aaa.innerHTML += `
    <h1>${title}</h1>
    `;
}

function box(content) {
    let temp = content[0];
    let temp2 = content[1];

    aaa.innerHTML += `<div class="box-01"></div>`;

    let bbb = document.querySelector('.box-01');
    bbb.innerHTML += `
        <div class="strip">
        <p>${temp[0]}</p>
        <p>${temp[1]}/${temp[2]}</p>
        </div>
        
        
`;




}


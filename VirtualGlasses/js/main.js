let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
let renderList = () => {
    //input: colorList[]
    //output: html <img src="./img/g1.jpg"/> ...
    let html = '';
    for(let i in dataGlasses){
        let glass = dataGlasses[i];
        html += `
            <div class="col-4">
                <div class="vglasses__items">
                    <img src="${glass.src}" style="width: 100%" onclick="applyGlass('${glass.virtualImg}','${glass.name}','${glass.brand}','${glass.color}','${glass.price}','${glass.description}')"/>
                </div>
            </div>
        `
    }
    //in ra man hinh
    document.querySelector('#vglassesList').innerHTML = html;
}
window.applyGlass = (source, name, brand, color, price, description) => {
    let output = '<img src=' + source +' />';
    document.querySelector('#avatar').innerHTML = output;
    let html = '<h4>' + name + ' - ' + brand + ' (' + color + ')' + '</h4>'
    + '<button style="background-color: red; border:none; color:white; margin-bottom: 20px">$' + price +'</button>'
    + '<p>' + description +'</p>';
    document.querySelector('.vglasses__info').style.display = 'block';
    document.querySelector('.vglasses__info').innerHTML = html;
}
window.onload = function(){
    renderList();
}

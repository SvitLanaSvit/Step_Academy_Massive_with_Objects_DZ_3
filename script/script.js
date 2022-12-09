//------------------1----------------
class Buy{
    constructor(name, count, isBuyed){
        this.name = name;
        this.count = count;
        this.isBuyed = isBuyed;
        // this.toString = function(){
        //     return `Name: ${name}, Count: ${count}, IsBuyed: ${isBuyed}\n`;
        // }
    }
}

let buies = [new Buy('Accer', 5, false), new Buy('Lenovo', 3, false), new Buy('Dell', 8, true), new Buy('HP', 11, true), new Buy('Apple', 3, false)];

function compare(a,b){
    if(a.isBuyed > b.isBuyed)
    return 1;
    if(a.isBuyed < b.isBuyed)
    return -1;
    return 0;
}

function addBuy(array, buy){
    let index = -1;
    index = array.findIndex(e => e.name == buy.name);
    if(index >= 0){
        array[index].count += buy.count;
    }
    else{
        array.push(buy);
    }
}

function saleBuy(nameOfBuy){
    let index = -1;
    index = buies.findIndex(e => e.name == nameOfBuy);
    console.log(index);
    if(index >= 0){
        buies[index].count = 0;
        buies[index].isBuyed = true;
    }else return index;
}

//------------------2----------------
class Product{
    constructor(name, count, price){
        this.name = name;
        this.count = count;
        this.price = price;
        this.toString = function(){
            return `${name}\t${count}\t\t\t${price}`;
        }
        // this.compare = function(a){
        //     return a.price - a.price;
        // }
    }
}

let products = [new Product('Brot',1,0.99), new Product('Butter',2,3.29),  new Product('Milch',1,1.09)];

function showScore(array){
    array.forEach(element => console.log(element.toString()));
}

function showTotalPrice(array){
    let sum = 0;
    array.forEach(element => {
        sum += element.price;
    })
    return sum;
}

function showTopProduct(array){
    let max = array[0].price;
    let index;
    for (let i = 0; i < array.length; i++) {
        if(array[i].price > max ){
            max = array[i].price;
            index = i;
        }
    }
    console.log(`The most expensive purchase in the check:\n${array[index].toString()}`);
}

function avgPriceOfProducts(array){
    let countTotal = 0;
    let sum = showTotalPrice(array);
    array.forEach(element => {
        countTotal += element.count;
    });
    return sum / countTotal;
}

//------------------3----------------
let styles = [
    {color: "darkorange"},
    {"text-align": "center"},
    {"font-size": "32px"},
    {"font-family": "Tahoma"}
]

let styleText = "";
for(let item of styles){
    for(let key in item){
        styleText += (`${key}: ${item[key]}; `);
    }
}

function putStyleIntoParagraph(style, text){
    document.write(`<p style = "${style}">${text}</p>`);
}

//------------------4----------------
class Auditory{
    constructor(name, places, faculty){
        this.name = name;
        this.places = places;
        this.faculty = faculty;
        this.toString = function(){
            return `${name}:\n${places}\t${faculty}`;
        }
    }
}

class Group{
    constructor(nameG, placesG, facultyG){
        this.nameG = nameG;
        this.placesG = placesG;
        this.facultyG = facultyG;
        this.toString = function(){
            return `${nameG}:\n${placesG}\t${facultyG}`;
        }
    }
}

let academy = [
    new Auditory('backend', 15, 'it_developer'),
    new Auditory('frontend', 20, 'it_developer'),
    new Auditory('QA', 10, 'it_developer'),
    new Auditory('language', 20, 'international_relations'),
    new Auditory('math', 18, 'international_relations'),
    new Auditory('history', 15, 'international_relations'),
    new Auditory('biology', 18, 'medicine'),
    new Auditory('chemie', 16, 'medicine')
];

let groupPW = new Group('PW', 15, 'it_developer');

function showAuditoryInFaculty(faculty){
    let res = false;
    academy.forEach(element => {
        if(element.faculty == faculty){
            console.log(element.name);
            res = true;
        }
    });
    if(!res){
        console.log('There is not the fuculty!');
    }
}

function showAuditoryByParam(acad, group){
    let res = false;
    acad.forEach(el => {
        if(el.faculty == group.facultyG){
            console.log(el.name);
            res = true;
        }
    });
    if(!res){
        console.log(`There is not the fuculty ${group.facultyG}!`);
    }
}

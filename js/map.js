const list = [10, 2, 8, 4];

// gauti sarasa, kur kiekvienas skaicius yra padidintas nurodyta konstanta

const padidinti = (arr, multiplyer) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * multiplyer);
    }
    return newArr
}

// const dvigubi = padidinti(list, 2);
// console.log(dvigubi);       // [20, 4, 16, 8]

// const trigubi = padidinti(list, 3);
// console.log(trigubi);

/*******************************************************************/

const mapDvigubas = list.map(n => n * 2);
const mapTrigubas = list.map(n => n + 5);

console.log(list);
console.log(mapDvigubas);
console.log(mapTrigubas); 
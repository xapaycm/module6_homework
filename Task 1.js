let arr = [0, 2, 7,"tree", 6, 5, 6, 5, 0];
function outTypeElements(){
    let even = 0;
    let add = 0;
    let zero = 0;
    for (let i=0; i < arr.length; i++){
        if (typeof arr[i] === "number" && !Number.isNaN(arr[i])){
            if (arr[i]%2 === 0 && arr[i] !== 0) {
                even++;
            }
            else if (arr[i]%2 !== 0  && arr[i] !== 0) {
                add++;
            }  else {
                zero++;
            }
        }
    }
    console.log(even + " четных", add + " нечетных", zero + " нолей");
}
outTypeElements();
//Выведение в консоль количества чётных и нечётных элементов в массиве, содержащем любые (не только числовые) значения.
// Нулевой элемент выводится отдельно.


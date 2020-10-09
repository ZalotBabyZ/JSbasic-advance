// Retest problem 2 part 2

// function รับ input prompt เป็น array เมื่อ user ไม่ได้กรอก parameter เวลาเรียกfunction
// ใช้กับข้อ 4,11,12,13
function getArray(promptMsg) {
    let newList = new Array();
    let newItem;
    while (newItem !== "X") {
        newItem = prompt(`พิมพ์ X ใหญ่ เมื่อจบlist\n   ${promptMsg}`);
        if (newItem === "X") break;
        newList.push(+newItem);
    }
    return newList;
}

// ข้อ 1
function checkCharacer(inputString = prompt("string input:")) {
    console.log(" -> input: " + inputString);
    let charCase;
    for (let Char of inputString) {
        if (Char.toUpperCase() === Char && Char.toLowerCase() === Char) continue;
        if (charCase === undefined) {
            charCase = Char.toUpperCase() === Char ? "capital" : "small";
        } else {
            const thisCharCase = Char.toUpperCase() === Char ? "capital" : "small";
            if (charCase !== thisCharCase) {
                charCase = "mix";
                break;
            }
        }
    }
    return `All character are ${charCase}`;
}
console.log("ข้อ 1 : checkCharacer('กรอกข้อความ')");
console.log(checkCharacer("HELLO ไทย 123"));

// ข้อ 2
let pow = (a = +prompt("หาเลขยกกำลัง| เลขฐาน"), n = +prompt("หาเลขยกกำลัง| เลขชี้กำลัง")) => a ** n
console.log("ข้อ 2 : pow(เลขฐาน, เลขชี้กำลัง)");
console.log(pow(2, 5));

// ข้อ 3
function thaiTypeof(inputString) {
    console.log(" -> input:" + inputString);
    const thaiType = {
        string: "ข้อความ",
        number: "ตัวเลข",
        object: "ออปเจ็คต์",
        undefined: "ไม่ได้ระบุค่า",
        Nan: "ไม่สามารถทำเป็นตัวเลขได้"
    };
    const inputType = typeof (inputString);
    return thaiType[inputType];
}
console.log("ข้อ 3 : thaiTypeof(ข้อมูล)");
console.log(thaiTypeof("ไม่ได้ระบุค่า"));

// ข้้อ 4
function evenArraySum(array = getArray("หาผลรวมเลขคู่ | กรอกตัวเลขใดๆ:")) {
    console.log(" -> array: " + array);
    let sumEven = 0;
    for (let i of array) sumEven += i % 2 === 0 ? i : 0;
    return sumEven;
}
console.log("ข้อ 4: evenArraySum([ตัวเลข1,ตัวเลข2,...])");
console.log(evenArraySum([2, 3, 4, 5, 6]));

// ข้อ 5
// คิดปีอธิกสุรทินตาม ปฏิทินเกรโกเรียน
function changeStringtoThaiDate(dateString = prompt("dd-mm-yyyy(คศ)")) {
    console.log(" -> input: " + dateString);
    const gregorian = year => (year % 4 !== 0) ? false
        : (year % 100 !== 0) ? true
            : (year % 400 !== 0) ? false
                : true;
    const month = [
        { thai: 'มกราคม', days: 31 },
        { thai: 'กุมภาพันธ์', days: 28 },
        { thai: 'มีนาคม', days: 31 },
        { thai: 'เมษายน', days: 30 },
        { thai: 'พฤษภาคม', days: 31 },
        { thai: 'มิถุนายน', days: 30 },
        { thai: 'กรกฎาคม', days: 31 },
        { thai: 'สิงหาคม', days: 31 },
        { thai: 'กันยายน', days: 30 },
        { thai: 'ตุลาคม', days: 31 },
        { thai: 'พฤศจิกายน', days: 30 },
        { thai: 'ธันวาคม', days: 31 },
    ]
    const dateArray = dateString.split("-")
    let checkDate = +dateArray[0] <= month[+dateArray[1] - 1].days ? true : false
    if (+dateArray[1] === 2) {
        if (+dateArray[0] === 29) checkDate = gregorian(+dateArray[2])
    }
    if (!checkDate) return "error";

    return `วันที่ ${dateArray[0]} เดือน${month[dateArray[1] - 1].thai} พ.ศ.${+dateArray[2] + 543}`
}
console.log("ข้อ 5: changeStringtoThaiDate(29-8-2020)");
console.log(changeStringtoThaiDate("29-2-2020"));
console.log(changeStringtoThaiDate("29-2-2019"));

// ข้อ 6
function isAnagram(string1 = prompt("Anagram ภาษา Eng | คำที่1 : "), string2 = prompt("Anagram ภาษา Eng | คำที่2 : ")) {
    console.log(` -> string1: ${string1} \n -> string2: ${string2}`);
    strArray1 = string1.toLocaleLowerCase().split("").filter(char => isNaN(char));
    strArray2 = string2.toLocaleLowerCase().split("").filter(char => isNaN(char));
    for (let char of strArray1) {
        if (strArray2.findIndex(char2 => char2 === char) !== -1) {
            strArray2[strArray2.findIndex(char2 => char2 === char)] = "";
        } else {
            return false;
        }
    }
    return strArray2.findIndex(char2 => char2 !== "") === -1 ? true : false;
}
console.log('ข้อ 6: isAnagram("ข้อความ1","ข้อความ2")');
console.log(isAnagram("Tom Marvolo Riddle", "I am Lord Voldemort"));

// ข้อ 7
function numberOfSquare(height = +prompt("หาจำนวนสี่เหลี่ยมจัตตุรัสที่ใหญ่ที่สุด | height: "), width = +prompt("หาจำนวนสี่เหลี่ยมจัตตุรัสที่ใหญ่ที่สุด | width: ")) {
    console.log(` -> width: ${width}, height: ${height}`);
    const lessNum = height < width ? height : width;
    const MoreNum = height >= width ? height : width;
    for (let i = lessNum; i >= 1; i--) {
        if (lessNum % i === 0) {
            if (MoreNum % i === 0) {
                width /= i;
                height /= i;
                break;
            }
        }
    }
    return width * height
}
console.log("ข้อ 7: numberOfSquare( สูง, กว้าง)");
console.log(numberOfSquare(20, 15));

// ข้อ 8
function toChange(money = +prompt("หาเงินทอน | money: ")) {
    console.log(` -> จำนวนเงินทอน: ${money}`);
    const change = [
        { value: 1000, count: 0, unit: "ใบ" },
        { value: 500, count: 0, unit: "ใบ" },
        { value: 100, count: 0, unit: "ใบ" },
        { value: 50, count: 0, unit: "ใบ" },
        { value: 20, count: 0, unit: "ใบ" },
        { value: 10, count: 0, unit: "เหรียญ" },
        { value: 5, count: 0, unit: "เหรียญ" },
        { value: 1, count: 0, unit: "เหรียญ" },
        { value: 0.5, count: 0, unit: "เหรียญ" },
        { value: 0.25, count: 0, unit: "เหรียญ" }
    ]
    for (let i = 0; i <= change.length - 1; i++) {
        change[i].count = (change[i].value <= money) ? Math.floor(money / change[i].value) : 0;
        money -= change[i].count * change[i].value;
    }
    return change.filter(type => type.count > 0
    ).reduce(
        (acc, type) => acc + `ทอน ${type.value} จำนวน ${type.count} ${type.unit}\n`, "");
}
console.log("ข้อ 8: toChange(จำนวนเงิน)");
console.log(toChange(788.50));

// ข้อ 9
function maxPossibleNumber(number = +prompt("หาค่ามากสุดจากเลข | กรอกเลข: ")) {
    console.log(" -> เลขตั้งต้น: " + number);
    const inputArray = String(number).split("").map((n) => {
        return { number: n, order: String(number).length }
    })
    const pointOrder = inputArray.findIndex(char => char.number === ".");
    let index = 0;
    for (let num of inputArray) {
        if (num.number === ".") {
            num.order = pointOrder;
            continue;
        }
        num.order = inputArray.filter(moreNum => +moreNum.number > num.number).length;
        num.order += inputArray.filter((equalNumOrder, ind) => equalNumOrder.number === num.number && ind < index).length;
        num.order += (num.order >= pointOrder) ? 1 : 0;
        index++;
    }
    return inputArray.sort((a, b) => a.order - b.order).reduce((acc, value) => acc += value.number, "");
}
console.log("ข้อ 9: maxPossibleNumber(เลข)");
console.log(maxPossibleNumber(1224.26));

// ข้อ 10
function squareRoot(number = +prompt("หารากที่2 | กรอกเลข :")) {
    console.log(" -> ค่าที่รับมา: " + number);
    let result = 1;
    for (let i = 2; i <= number; i++) {
        if (number % i ** 2 === 0) {
            number = number / i ** 2;
            result *= i;
            i--;
        }
    }
    return number === 1 ? result : result === 1 ? number : result + " root " + number;
}
console.log("ข้อ 10: squareRoot(เลข)");
console.log(squareRoot(12));

// ข้อ 11
function dotProduct(vector1 = getArray(), vector2 = getArray()) {
    const length = vector1.length > vector2.length ? vector1.length : vector2.length;
    const pushZero = (array, loop) => {
        for (let i = 1; i <= loop; i++) {
            array.push(0);
        }
        return array;
    }
    vector1 = vector1.length < length ? pushZero(vector1, length - vector1.length) : vector1;
    vector2 = vector2.length < length ? pushZero(vector2, length - vector2.length) : vector2;
    result = vector1.reduce((acc, num, index) => acc + num * vector2[index], 0);
    return result;
}
console.log("ข้อ 11: dotProduct([array],[array])");
console.log(dotProduct([1, 2, 6], [3, 2, 6, 3]));

// ข้อ 12 ใช้ sort function
function maxPairSum(array = getArray()) {
    console.log(" -> ค่าที่รับมา: " + array);
    let sortArray = array.sort((a, b) => b - a);
    return sortArray[0] + sortArray[1];
}
console.log("ข้อ 12: maxPairSum ([array])");
console.log(maxPairSum([2, 5, 3, 9, 19, 3, 7, 58]));

// ข้อ 13 ไม่ใช้ sort function
function minPairSum(array = getArray()) {
    console.log(" -> ค่าที่รับมา: " + array);
    let min1 = min2 = Infinity;
    for (let i of array) {
        if (i <= min1) {
            min2 = min1;
            min1 = i;
        } else if (i < min2) {
            min2 = i
        }
    }
    return min2 !== Infinity ? min1 + min2 : min1 !== Infinity ? min1 : "error"
}
console.log("ข้อ 12: minPairSum ([array])");
console.log(minPairSum([2, 5, 3, 9, 19, 3, 7, 58]));

// ข้อ  14 วิธีไม่ใช้ Math.ceil()
function numberOfJumpFrog(speed = +prompt("ใส่ค่าspeed"), distance = +prompt("ใส่ค่าระยะทาง")) {
    console.log(` -> speed: ${speed}, distance: ${distance}`);
    return distance % speed === 0 ? distance / speed : (distance - distance % speed) / speed + 1
}
console.log("ข้อ 14: numberOfJumpFrog(ความเร็ว,ระยะทาง)");
console.log(numberOfJumpFrog(6, 40));

// ข้อ 15
function calculateInterest(money = +prompt('กรอกจำนวนเงินต้น'), years = +prompt('กรอกจำนวนปี')) {
    console.log(`เงินต้น: ${money} ปี: ${years}`);
    for (let year = 1; year <= years; year++) money += money * 0.025;
    return money;
}
console.log("ข้อ 15: calculateInterest( เงินต้น, ปี)");
console.log(calculateInterest(100000, 1));
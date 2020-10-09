// Retest problem 2 part 1

// function รับ input prompt เป็น array เมื่อ user ไม่ได้กรอก parameter เวลาเรียกfunction
// ใช้กับข้อ 7,8,10,11,12,13
function getArray(promptMsg) {
    let newList = new Array();
    let newItem;
    while (newItem !== "X") {
        newItem = prompt(`พิมพ์ X ใหญ่ เมื่อจบlist\n   ${promptMsg}`)
        if (newItem === "X") break;
        newList.push(+newItem);
    }
    return newList
}

// ข้อ 1 วิธี 1  สร้าง flag เป็น isPrime กรองอันที่ไม่ใช่จำนวนเฉพาะออก
function findPrime_1(start = 1, stop = 100) {
    const primeNum = new Set();
    for (let i = start; i <= stop; i++) {
        let isPrime = true;
        if (i === 1) isPrime = false;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) isPrime = false;
        }
        if (isPrime === true) primeNum.add(i);
    }
    console.log(` -> จำนวนเฉพาะตั้งแต่ ${start} ถึง ${stop}`);
    return primeNum;
}
console.log("ข้อ 1 วิธี 1 (สร้างตัวแปร flag):\n findPrime_1(min,max)\n   min = เริ่มตั้งแต่เลข?\n   max = ถึงเลข?");
console.log(findPrime_1());
// ข้อ 1 วิธี2 ไม่เอาตัวแปร isPrime ใช้ break และ  continue
// คิดว่าประสิทธิภาพดีกว่า อะไรไม่ใช่แล้วออกจาก loop / ไม่ต้องผ่านเข้า loop เลย
// ***function นี้ต้องเรียกใช้ต่อในข้อ2ด้วย ***
function findPrime(start = 1, stop = 100) {
    const primeNum = new Set();
    for (let i = start; i <= stop; i++) {
        if (i === 1) continue;
        for (let j = 2; j <= i; j++) {
            if (j === i) primeNum.add(i);
            if (i % j === 0) break;
        }
    }
    console.log(` -> จำนวนเฉพาะตั้งแต่ ${start} ถึง ${stop}`);
    return primeNum;
}
console.log("ข้อ 1 วิธี 2 (เพิ่มประสิทธิภาพ break loop, no flag):\n findPrime(min,max)\n   min = เริ่มตั้งแต่เลข?\n   max = ถึงเลข?");
console.log(findPrime());

// ข้อ2 
// เรียกใช้ function findPrime จากข้อ 1 วิธี 2
function maxNumPrime(num = +prompt("หาจำนวนเฉพาะตั้งแต่ 1 ถึง (กรอกค่า):")) {
    return findPrime(1, num);
}
console.log("ข้อ 2: maxNumPrime(max)\n   max = จำนวนเฉพาะตั้งแต่ 1 ถึง?");
console.log(maxNumPrime(942));

// ข้อ 3
// ***function นี้ต้องเรียกใช้ต่อในข้อ4ด้วย ***
function nNumPrime(primeNeed = +prompt("ต้องการจำนวนเฉพาะกี่ตัว: ")) {
    const primeNum = new Array();
    while (primeNum.length < primeNeed) {
        for (let i = 2; i < Infinity; i++) {
            for (let j = 2; j <= i; j++) {
                if (i === j) primeNum.push(i);
                if (i % j === 0) break;
            }
            if (primeNum.length === primeNeed) break;
        }
    }
    console.log(` -> จำนวนเฉพาะ ${primeNeed} ตัวแรก`);
    return primeNum.filter((item, index) => index < primeNeed);
}
console.log("ข้อ3: nNumPrime(n)\n   n = ต้องการจำนวนเฉพาะกี่ตัว?");
console.log(nNumPrime(160));

// ข้อ 4 
// เรียกใช้ function nNumPrime จากข้อ 3
function sumNPrime(primeNeed = +prompt("ต้องการจำนวนเฉพาะกี่ตัว: ")) {
    console.log("หาผลรวมของ");
    return nNumPrime(primeNeed).reduce((acc, item) => acc += item, 0);
}
console.log("ข้อ4: sumNPrime(n)\n   n = ต้องการจำนวนเฉพาะกี่ตัว?");
console.log(sumNPrime(8));

// ข้อ 5
function sumNSquare(n = +prompt("1+2+2+3+3+3+...n+nครั้ง\n   โดย n คือ: ")) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i ** 2;
    console.log(` -> 1+2+2+3+3+3+...n(nครั้ง)\n    โดย n คือ ${n}`);
    return sum;
}
console.log("ข้อ5: sumNSquare(n)\n   n = ต้องการผลบวกกำลัง2 ตั้งแต่ 1 ถึง?");
console.log(sumNSquare(4));

// ข้อ 6
function minusPrime(num = +prompt("ผลรวม-จำนวนเฉพาะ ตั้งแต่ 1 ถึง (กรอกค่า):")) {
    if (num < 1) return;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                result += 2 * i;
                break;
            }
        }
        result -= i;
    }
    console.log(` -> ผลรวม\n    1-2-3+4-5+6-7+8+9+10-11+...\n    ตั้งแต่ 1 ถึง ${num}`);
    return result;
}
console.log("ข้อ6: minusPrime(n)\n   n = 1-2-3+4-5+6-7+8+9+10-11+... ตั้งแต่ 1 ถึง?");
console.log(minusPrime(11));

// ข้อ 7
function findGCD(list = getArray("หาครน.กรอกเลข 123 etc เพื่อเพิ่มเลขลงlist")) {
    let minNum = Infinity;
    console.log(` -> หา หรม. ของ ${list}`);
    for (let num of list) {
        num = num < 0 ? 0 - num : num;
        minNum = num < minNum ? num : minNum;
    }
    for (let i = minNum; i > 1; i--) {
        if (minNum % i === 0) {
            for (let num of list) {
                if (num % i !== 0) break;
                if (list.indexOf(num) === list.length - 1) {
                    return i
                }
            }
        }
    }
}
console.log("ข้อ7: findGCD([list])\n   [list] = [5,10,15] etc");
console.log(findGCD([6,8,16]));

// ข้อ8
function findLCM(list = getArray("หาครน.กรอกเลข 123 etc เพื่อเพิ่มเลขลงlist")) {
    let maxNum = 0;
    console.log(` -> หา ครน. ของ ${list}`);
    for (let num of list) {
        num = num < 0 ? 0 - num : num;
        maxNum = num > maxNum ? num : maxNum;
    }
    for (let i = maxNum; i <= Infinity; i += maxNum) {
        for (let num of list) {
            if (i % num !== 0) break;
            if (list.indexOf(num) === list.length - 1) return i;
        }
    }

}
console.log("ข้อ8: findLCM([list])\n   [list] = [12,18,36] etc");
console.log(findLCM([24,48,96]));

// ข้อ 9
function factorial(n = +prompt("กรอกค่า n:")) {
    return n < 0 ? `error ${n}!` : (n === 0 ? 1 : n * factorial(n - 1));
}
console.log("ข้อ9: factorial(n)\n   n = ค่าสุดท้ายที่นำมาคูณ (ผลคูณตั้งแต่ 1-n)");
console.log(factorial(5));

// ข้อ 10
function sortList(list = getArray("เรียงค่า ascend/ descend กรอกเลข 123 etc เพื่อเพิ่มเลขลงlist"), isAscend = +prompt("Accend->1 Descend->0")) {
    if (isAscend !== 1 && isAscend !== 0) return;
    let sortAscend = new Array();
    for (let num of list) {
        if (sortAscend.length === 0) {
            sortAscend.push(num);
        } else {
            if (sortAscend[sortAscend.length - 1] < num) {
                sortAscend.push(num)
            } else {
                const tempSort = sortAscend.filter(item => item > num);
                sortAscend = sortAscend.filter(item => item <= num);
                sortAscend.push(num);
                sortAscend = sortAscend.concat(tempSort);
            }
        }

    }
    console.log(` -> list: [${list}]\n    isAscend: ${isAscend}`);
    if (isAscend) {
        return sortAscend;
    } else {
        return sortAscend.reverse();
    };
}
console.log("ข้อ10: sortList([list],isAscend)\n   [list] = [5,7,2,4,3] etc\n   isAscend = จากน้อยไปมาก->1 มากไปน้อย->0");
console.log(sortList([8, 6, 10, 9, 11], 0));
console.log(sortList([8, 6, 10, 9, 11], 1));

// ข้อ 11 ไม่ใช้ reverse
const sortList2 = (list = getArray("เรียงค่า ascend/ descend กรอกเลข 123 etc เพื่อเพิ่มเลขลงlist"), isAscend = +prompt("Accend->1 Descend->0")) => {
    if (isAscend !== 1 && isAscend !== 0) return;
    let sortAscend = new Array();
    for (let num of list) {
        if (sortAscend.length === 0) {
            sortAscend.push(num);
        } else {
            if (sortAscend[sortAscend.length - 1] < num) {
                sortAscend.push(num);
            } else {
                const tempSort = sortAscend.filter(item => item > num);
                sortAscend = sortAscend.filter(item => item <= num);
                sortAscend.push(num);
                sortAscend = sortAscend.concat(tempSort);
            }
        }

    }
    console.log(` -> list: [${list}]\n    isAscend: ${isAscend}`);
    if (isAscend) {
        return sortAscend;
    } else {
        let sortDescend = new Array();
        for (let count in list) sortDescend.push(sortAscend.pop());
        return sortDescend;
    };
}
console.log("ข้อ11: sortList2([list],isAscend)\n   [list] = [5,7,2,4,3] etc\n   isAscend = จากน้อยไปมาก->1 มากไปน้อย->0");
console.log(sortList2([8, 6, 10, 9, 11], 0));
console.log(sortList2([8, 6, 10, 9, 11], 1));

// ข้อ 12
function multiplyOf(baseNum = +prompt("ค่าตั้งต้น:"), upperBorder = +prompt("สูงสุดไม่เกินค่า:")) {
    let result = new Array();
    for (i = baseNum; i < upperBorder; i += baseNum) result.push(i);
    return result;
}
function sumMultiplyOf(baseNumList = getArray("กรอกเลข 3 etc เพื่อเพิ่มlistของค่าพหุคูณตั้งต้น"), upperBorder = +prompt("สูงสุดไม่เกินค่า:")) {
    console.log(` -> เลขตั้งต้น: [${baseNumList}]\n    ค่าไม่เกิน: ${upperBorder} `);
    let multiplyAll = baseNumList.reduce((acc, num) => acc.concat(multiplyOf(num, upperBorder)), []);
    multiplyAll = multiplyAll.filter((num, index) => multiplyAll.indexOf(num) === index);
    const sumAllMul = multiplyAll.reduce((acc, num) => acc += num, 0);
    return sumAllMul;
}
console.log("ข้อ 12: sumMultiplyOf([list],upperBorder)\n   [list] = [3,5,7] เลขตั้งต้น\n   upperBorder = ค่าไม่เกินเลขนี้");
console.log(sumMultiplyOf([3, 5], 1000));

// ข้อ 13
function digitSum(numbers = getArray("กรอกเลข 123 etc เพื่อเพิ่มเลขลงlist")) {
    console.log(` -> numbers list: [${numbers}]`);
    let sum = 0;
    for (let number of numbers) {
        number = String(number);
        for (let digit of number) {
            sum += +digit;
        }
    }
    return sum;
}
console.log(`ข้อ13: digitSum[list]\n   list = [120,130] etc`);
console.log(digitSum([120, 130]));

// ข้อ 14
function sumDigitFac(num = +prompt("กรอกเลขที่ต้องการทำเป็นค่า factorial: ")) {
    console.log(` -> digit sum of ${num}!`);
    if (num < 0) return `error ${num}!`;
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    let sumDigit = 0;
    for (let digit of String(factorial)) {
        sumDigit += Number(digit);
    }
    return sumDigit;
}
console.log(`ข้อ 14: sumDigitFac(num)\n   num = เลขที่ต้องการทำเป็น factorial`);
console.log(sumDigitFac(5));

// ข้อ 15 วิธีที่ 1 (นานมาก 1-4129980 วนloop 4,129,980 ครั้ง)
function digitCount(startNum = +prompt("ค่าเริ่มต้นนับ: "), stopNum = +prompt("ค่าสุดท้ายที่นับ")) {
    console.log(`นับจำนวนเลขโดดตั้งแต่ ${startNum} ถึง ${stopNum}`);
    countDigit = 0;
    for (let i = startNum; i <= stopNum; i++) {
        for (let num in String(i)) {
            countDigit += 1;
        }
    }
    return countDigit;
}
console.log(`ข้อ 15 วิธีที่ 1(run นานมาก):\n digitCount(start,stop)\n   start = เลขเริ่มต้นนับ\n   stop = เลขสุดท้ายที่นับ`);
console.log("|ประมาลผลนาน -> ขอไม่แสดงตัวอย่าง\n|หากต้องการทดสอบ\n พิมพ์: digitCount(1, 4129980)");
//console.log(digitCount(1, 4129980)); // ปิดไว้เพราะรันนานมาก

// ข้อ 15 วิธีที่ 2
function digitCount2(startNum = +prompt("ค่าเริ่มต้นนับ: "), stopNum = +prompt("ค่าสุดท้ายที่นับ")) {
    console.log(`นับจำนวนเลขโดดตั้งแต่ ${startNum} ถึง ${stopNum}`);
    countDigit = 0;
    for (let i = String(startNum).length + 1; i <= String(stopNum).length - 1; i++) {
        countDigit += i * 9 * 10 ** (i - 1);
    }
    countDigit += String(startNum).length * (10 ** String(startNum).length - startNum);
    countDigit += String(stopNum).length * (stopNum - (10 ** (String(stopNum).length - 1) - 1));

    return countDigit;
}
console.log(`ข้อ 15 วิธี 2(เร็ว):\n digitCount2(start,stop)\n   start = เลขเริ่มต้นนับ\n   stop = เลขสุดท้ายที่นับ`);
console.log(digitCount2(1, 4129980));
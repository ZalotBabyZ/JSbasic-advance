// ------------ เรียกโดย  function draw อีกที ไม่ต้องทำให้เป็น comment ------------
//ใช้กับ ข้อ13-16 | drawStarUp drawStarUp
function drawStarUp(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (j <= i) {
                    if (char1 === "i") {
                        msg += i;
                    } else if (char1 === "j") {
                        msg += j;
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "i") {
                        msg += i;
                    } else if (char2 === "j") {
                        msg += j;
                    } else {
                        msg += char2;
                    }
                }
            }
        }
        msg += "\n";
    }
    return msg;
}
function drawStarDown(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = int_n; i > 0; i--) {
        if (int_n - i >= skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (j <= i) {
                    if (char1 === "i") {
                        msg += i;
                    } else if (char1 === "j") {
                        msg += j;
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "i") {
                        msg += i;
                    } else if (char2 === "j") {
                        msg += j;
                    } else {
                        msg += char2;
                    }
                }
            }
            msg += "\n";
        }
    }
    return msg;

}
//ใช้กับ ข้อ17-20 | drawDashUp drawDashUp
function drawDashDown(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (int_n - i >= j) {
                    if (char1 === "count") {
                        msg += countNum();
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "count") {
                        msg += countNum();
                    } else {
                        msg += char2;
                    }
                }
            }
            msg += "\n";
        }
    }
    return msg;
}
function drawDashUp(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (j <= i - 1) {
                    if (char1 === "count") {
                        msg += countNum();
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "count") {
                        msg += countNum();
                    } else {
                        msg += char2;
                    }
                }
            }
            msg += "\n";
        }
    }
    return msg;
}
//ใช้กับ ข้อ21-24 | drawArrowUp drawArrowUp
function drawArrowUp(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= 2 * int_n - 1; j++) {
                if ((j <= int_n + i - 1) && (j >= int_n - i + 1)) {
                    if (char2 === "count") {
                        msg += countNum();
                    } else {
                        msg += char2;
                    }
                } else {
                    if (char1 === "count") {
                        msg += countNum();
                    } else {
                        msg += char1;
                    }
                }
            }
            msg += "\n";
        }
    }
    return msg;
}
function drawArrowDown(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= 2 * int_n - 1; j++) {
                if (j <= i - 1 || j >= 2 * int_n + 1 - i) {
                    if (char1 === "count") {
                        msg += countNum();
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "count") {
                        msg += countNum();
                    } else {
                        msg += char2;
                    }
                }
            }
            msg += "\n";
        }
    }
    return msg;
}
//ใช้กับข้อ 20,24
function countNum() {
    return count++
}



// ------------ ใช้เรียกทุกข้อ ------------
let msg, count;
let int_n = +prompt("Insert int_n here",5);
console.log(`int: ${int_n}`);

// ------------ เริ่ม ------------
//ข้อ1
function draw1(int_n) {
    msg="";
    for (let i=1; i<=int_n; i++){
        msg+="*";
    }
    return msg;
}
console.log("ข้อ 1: draw1(int_n)");
console.log(draw1(int_n));

//ข้อ2
function draw2(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++) {
       for (let j = 1; j <= int_n; j++) {
           msg += "*";
       }
       msg += "\n";
   }
   return msg;
}
console.log("ข้อ 2: draw2(int_n)");
console.log(draw2(int_n));

//ข้อ3
function draw3(int_n) {
    msg = "";
    for (let i = 1; i <= int_n; i++){
        for(let j = 1; j <= int_n; j++){
            msg += j;
        }
        msg += "\n";
    }
    return msg;
}
console.log("ข้อ 3: draw3(int_n)");
console.log(draw3(int_n));

//ข้อ4
function draw4(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++){
        for(let j = 1; j <= int_n; j++){
            msg += i;
        }
        msg += "\n";
    }
    return msg;
}
console.log("ข้อ 4: draw4(int_n)");
console.log(draw4(int_n));

//ข้อ5
function draw5(int_n) {
    msg= "";
    for (let i = int_n; i > 0; i--){
        for(let j = 1; j <= int_n; j++){
            msg += i;
        }
        msg += "\n";
    }
    return msg;
}
console.log("ข้อ 5: draw5(int_n)");
console.log(draw5(int_n));

//ข้อ6 แบบ 1 เน้นสูตร
function draw6_1(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++){
        for (let j = 1; j <= int_n; j++){
            msg += j+(i-1)*int_n;
        }
        msg += "\n";
    }
    return msg;
}
console.log("ข้อ 6 วิธี 1: draw6_1(int_n)");
console.log(draw6_1(int_n));

//ข้อ6 แบบ 2 ใช้ count
function draw6_2(int_n) {
    msg="";
    count=1;
    for (let i = 1; i <= int_n; i++){
        for (let j = 1; j <= int_n; j++){
            msg += count++;
        }
        msg += "\n";
    }
    return msg;
}
console.log("ข้อ 6 วิธี2: draw6_2(int_n)");
console.log(draw6_2(int_n));


//ข้อ7 แบบ 1 เน้นสูตร
function draw7_1(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++) {
        for (let j = 1; j <= int_n; j++){
            msg += int_n**2-int_n*(i-1)-j+1;
        }
        msg += "\n";
    }
    return msg;
}
console.log("ข้อ 7 วิธี 1: draw7_1(int_n)");
console.log(draw7_1(int_n));

//ข้อ7 แบบ 2 ใช้ count
function draw7_2(int_n) {
    msg="";
    let count=int_n**2;
    for (let i = 1; i <= int_n; i++) {
        for (let j = 1; j <= int_n; j++){
            msg += count--;
        }
        msg += "\n";
    }
    return msg;
}
console.log("ข้อ 7 วิธี 2: draw7_2(int_n)");
console.log(draw7_2(int_n));


//ข้อ8
function draw8(int_n) {
    msg="";
    for ( i = 0; i < int_n; i++){
        msg += 2*i+"\n";
    }
    return msg;
}
console.log("ข้อ 8 draw8(int_n)");
console.log(draw8(int_n));


//ข้อ9
function draw9(int_n) {
    msg="";
    for ( i = 1; i <= int_n; i++){
        msg += 2*i+"\n";
    }
    return msg;
}
console.log("ข้อ 9: draw9(int_n)");
console.log(draw9(int_n));

//ข้อ10
function draw10(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++){
        for (let j = 1; j <= int_n; j++){
            msg += i*j;
        }
        msg += "\n";
    }
    return msg;
}
console.log("ข้อ 10: draw10(int_n)");
console.log(draw10(int_n));

//ข้อ11
function draw11(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++) {
       for (let j = 1; j <= int_n; j++) {
           if (j !== i) {
               msg += "*";
           } else {
               msg += "-";
           }

       }
       msg += "\n";
   }
   return msg;
}
console.log("ข้อ 11: draw11(int_n)");
console.log(draw11(int_n));

//ข้อ 12
function draw12(int_n) {
    msg="";
    for (let i = int_n; i > 0; i-- ){
        for (let j = 1; j <= int_n; j++){
            if (i !== j){
                msg += "*";
            } else {
                msg += "-";
            }
        }
        msg += "\n";
    }
    return msg;
}
console.log("ข้อ 12: draw12(int_n)");
console.log(draw12(int_n));

//ข้อ13 แบบต้องเรียก drawStarUp
function draw13_1(int_n){
    msg = "";
    msg += drawStarUp(int_n,0,"*","-");
    return msg;
}
console.log("ข้อ 13 วิธี 1: เรียกใช้function drawStarUp อีกที :draw13_1(int_n)");
console.log(draw13_1(int_n));

//ข้อ13 แบบไม่เรียก drawStarUp
function draw13_2(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++) {
        for (let j = 1; j <= int_n; j++) {
            if (j <= i) {
                msg += "*";
            } else {
                msg += "-";
            }
        }
        msg += "\n";
    }
    return msg;
}
console.log("ข้อ 13 วิธี 2: ไม่ต้องเรียกใช้functionอื่น :draw13_2(int_n)");
console.log(draw13_2(int_n));

//ข้อ14 แบบต้องเรียก drawStarDown
function draw14_1(int_n) {
    msg ="";
    msg += drawStarDown(int_n,0,"*","-");
    return msg;
}
console.log("ข้อ 14 วิธี 1: เรียกใช้function drawStarDown อีกที :draw14_1(int_n)");
console.log(draw14_1(int_n));

//ข้อ14 แบบไม่เรียก drawStarDown
function draw14_2(int_n){
    msg="";
    for (let i = int_n; i > 0; i--){
        for (let j = 1; j <= int_n; j++){
            if (j <= i){
                msg += "*";
            } else {
                msg += "-";
            }
        }
        msg += "\n";
    }
    return msg;
}
console.log("ข้อ 14 วิธี 2: ไม่ต้องเรียกใช้functionอื่น :draw14_2(int_n)");
console.log(draw14_2(int_n));

//ข้อ15 ต้องเรียก drawStarUp drawStarDown
function draw15(int_n) {
    msg = "";
    msg += drawStarUp(int_n, 0, "*", "-");
    msg += drawStarDown(int_n, 1, "*", "-");
    return msg;
}
console.log("ข้อ 15: ต้องเรียก drawStarUp drawStarDown : draw15(int_n)");
console.log(draw15(int_n));

//ข้อ16 ต้องเรียก drawStarUp drawStarDown
function draw16(int_n){
    msg = "";
    msg += drawStarUp(int_n,0,"i","-");
    msg += drawStarDown(int_n,1,"i","-");
    return msg;
}
console.log("ข้อ 16: ต้องเรียก drawStarUp drawStarDown : draw16(int_n)");
console.log(draw16(int_n));

//ข้อ17 ต้องเรียก drawDashDown
function draw17(int_n){
    msg ="";
    msg += drawDashDown(int_n,0,"-","*");
    return msg;
}
console.log("ข้อ 17: ต้องเรียก drawDashDown : draw17(int_n)");
console.log(draw17(int_n));

//ข้อ18 ต้องเรียก drawDashUp
function draw18(int_n){
    msg ="";
    msg += drawDashUp(int_n,0,"-","*");
    return msg;
}
console.log("ข้อ 18: ต้องเรียก drawDashUp : draw18(int_n)");
console.log(draw18(int_n));

//ข้อ19 ต้องเรียก drawDashUp
function draw19(int_n){
    msg ="";
    msg += drawDashDown(int_n,0,"-","*");
    msg += drawDashUp(int_n,1,"-","*");
    return msg;
}
console.log("ข้อ 19: ต้องเรียก drawDashUp drawDashDown : draw19(int_n)");
console.log(draw19(int_n));

//ข้อ20
function draw20(int_n) {
    count = 1;
    msg = "";
    msg += drawDashDown(int_n, 0, "-", "count");
    msg += drawDashUp(int_n, 1, "-", "count");
    return msg;
}
console.log("ข้อ 20: ต้องเรียก drawDashUp drawDashDown : draw20(int_n)");
console.log(draw20(int_n));

//ข้อ21 ต้องเรียก drawArrowUp
function draw21(int_n) {
    msg = "";
    msg += drawArrowUp(int_n, 0, "-", "*");
    return msg;
}
console.log("ข้อ 21: ต้องเรียก drawArrowUp : draw21(int_n)");
console.log(draw21(int_n));

//ข้อ22 ต้องเรียก drawArrowDown
function draw22(int_n){
    msg ="";
    msg += drawArrowDown(int_n,0,"-","*");
    return msg;
}
console.log("ข้อ 22: ต้องเรียก drawArrowDown : draw22(int_n)");
console.log(draw22(int_n));

//ข้อ23 ต้องเรียก drawArrowUp drawArrowDown
function draw23(int_n){
    msg ="";
    msg += drawArrowUp(int_n,0,"-","*");
    msg += drawArrowDown(int_n,1,"-","*");
    return msg;
}
console.log("ข้อ 23: ต้องเรียก drawArrowUp drawArrowDown : draw23(int_n)");
console.log(draw23(int_n));

//ข้อ24 ต้องเรียก drawArrowUp drawArrowDown
function draw24(int_n){
    count = 1;
    msg ="";
    msg += drawArrowUp(int_n,0,"-","count");
    msg += drawArrowDown(int_n,1,"-","count");
    return msg;
}
console.log("ข้อ 24: ต้องเรียก drawArrowUp drawArrowDown : draw24(int_n)");
console.log(draw24(int_n));





/*
สรุป pitfall ที่พบบ่อยจากการทำบฝ.นี้
   let ชื่อตัวแปลซ้ำ
   for (let i อย่าลืม let
   i++ / i--
   ใช้ i++  ใน loop j
   prompt อย่าลืมทำให้เป็น Number

*/
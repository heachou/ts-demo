// number
var a = 1;
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 3] = "Blue";
    Color[Color["Green"] = 4] = "Green";
})(Color || (Color = {}));
var colorName = Color[3];
// any
var notSure = "hello,any type";
notSure = 1;
notSure = true;
var list = [1, true, 'text'];
// void  函数返回为空
function warnUser() {
    console.log("warn user");
}
var b = warnUser();
// undefined
// --strictChecksNull 开启会报错，不允许number再
var c = undefined;
c = null;
// --strictChecksNull 开启会报错，不允许number再
var d = null;
d = undefined;
// --strictChecksNull 开启会报错，不允许number再
var e = 3;
e = null;
// 联合类型
var f = 3;
f = null;
// never 任何类型的子类型
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("something wrong");
}
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);

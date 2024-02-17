//Assignment Solution
// Task 2:
//  let personName: string ="Eric";
//  console.log(`Hello ${personName},would you like to learn some python today?`);
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
var myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', '2022']);
console.log(myCar);

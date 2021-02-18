// Создать объект user  со свойствами name, age, role.
// Создать второй объект admin и унаследовать все свойства объекта user
// , кроме значения свойства role. Также в объектах должны быть два метода,
// первый метод length() выводит в консоль количество ключей в объекте,
// при вызове метода  user.length()  должно отобразиться количество ключей;
// второй метод checkPermission()  показывает alert с текстом "Access granted"
// если role === 'admin', и "Access denied" если role === 'user'.

let user = {
    name: 'Alex',
    age: 24,
    role: 'user',
}

let admin = {
    name: user.name,
    age: user.age,
    role: 'admin',
}

user.length = function() {
    console.log(Object.keys(user));
}
user.Permission = function() {
    if (this.role === 'admin') {
        alert('Access granted');
    } else {
        alert('Access denited');
    }

}




admin.length = function() {
    console.log(Object.keys(user));
}
admin.Permission = function() {
    if (this.role === 'admin') {
        alert('Access granted');
    } else {
        alert('Access denited');
    }

}


user.length();
admin.length();

user.Permission();
// admin.Permission();
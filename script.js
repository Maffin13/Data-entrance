


const user = {}

for ( i = 0; i <= 10; i++) {
    
    let name = prompt('Введите свое имя');
    let age = +prompt('Введите свой возраст');
        user[i] = {
            name: name,
            age: age
        }
    
}


for (const key in user) {
    console.log(`Пользователь ${key}`);
    for(const newKey in user[key]){
        console.log(` данные пользовалетеля ${user[key][newKey]}`)
    }
}

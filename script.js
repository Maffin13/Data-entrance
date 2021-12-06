


const user = {}

for ( i = 1; i <= 10; i++) {
    
    var name = prompt('Введите свое имя');
    var age = +prompt('Введите свой возраст');

     for (const key in user) {
        console.log(`Данные ${i}-го пользовалетеля ${user[key]}`)
    }
        
        user[i] = {
            name: name,
            age: age
        }
    
}





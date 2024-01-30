 //Nulish coalescing operator | tratando valores nulos

 /* const idade = null

 document.body.innerText = 'Sua idade é ' + (idade ?? '(não informado)') */



 // Objetos

 /* const user = {
    name: 'thiago',
    nickname: 'Nascimento',
    idade: 23,
    address: {
        street: 'Rua Santana',
        number: 44,
    },
 } */



 // Desestruturação

 //function mostraIdade(idade){
 //   return user.idade
 //}

 //document.body.innerText = mostraIdade(user)

 //const { address, idade : age, nickname = 'Afonso'} = user

 //document.body.innerText = JSON.stringify({ address, age, nickname })



 // Rest operator

 /* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const [first, , third, ...rest] = array

 document.body.innerText = JSON.stringify({first, third, rest}) */


 // Short Syntax
 /* const name = 'Gabriel'
 const age = 21

 const user = {
    name,
    age,
 }

 document.body.innerText = JSON.stringify(user) */


 // Optional chaining

 /* const user = {
    name: 'thiago',
    nickname: 'Nascimento',
    idade: 23,
    address: {
        street: 'Rua Santana',
        number: 44,
        zip: {
            code: '23860000',
            city: 'Mangaratiba',
        },
        //showFullAddress() {
        //    return 'ok'
        //}
    },
 }

 document.body.innerText = user.address?.showFullAddress?.() */


 // Metodos de array

 //const array = [1, 2, 3, 4, 5]

 //for (const i of array){
 //   document.body.innerText += i
 //}

 /* const novoArray = []

 array.forEach(item => {
    novoArray.push(item * 2)

 })

 document.body.innerText = JSON.stringify(novoArray) */

 /* const novoArray = array.map( item => {
    if (item % 2 === 0){
        return item * 10
    }

    return item
 }) */



 //METODOS IMPORTANTES: map, filter, every, some, find, findIndex, reduce



 /* const novoArray = array
 .filter(item => item % 2 === 0)
 .map(item => item * 10) */

 //const todosItensSaoNumeros = array.every(item => typeof item === 'number')

 /* const peloMenosUmItemNaoEUmNumero = array.some(item => {
    return typeof item !== 'number'
    }) */

 //const par = array.findIndex(item => item % 2 === 0)

 /* const soma = array.reduce((acc, item) => {
    return acc + item
 }, 0) */

 //document.body.innerText = JSON.stringify(soma)



 // Template literals

 /* const nome = null
 const message = `bem vindo, ${nome ? nome : 'visitante'}`

 document.body.innerText = message */



 // Promisses
 // .then / .catch


/* const somaDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

somaDoisNumeros(2, 4)
    .then(soma => {
        document.body.innerText = soma
    })
    .catch(err => {
        console.log(err)
    })

    */


/* fetch('https://api.github.com/users/diego3g')
    .then(response => {
        return response.json()
    })
    .then(body => {
        console.log(body)
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        console.log('deu')
    })

    */


async function buscaDadosNoGithub() {
    try{
        const response = await fetch('https://api.github.com/users/diego3g')
        const body = await response.json()

        return body.name
        console.log(body)
    } catch (err){
        console.log(err)
    } finally{
        console.log('deu')
    }
}

buscaDadosNoGithub().then(name => {
    console.log(name)
}) 



    //.then(response => {
    //    response.json().then(body => {
    //        console.log(body)
    //    })
    //})
    //.catch(err => {
    //    console.log(err)
    //})


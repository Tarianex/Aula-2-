class Banco{
    constructor(nome, Banco){
        this.nome = nome;
        this.Banco = Banco;
   
    }
    setarBanco(novoBanco){
        if(typeof novoBanco == "string"){
            this.banco = novoBanco
        }
    }

}

let p1 = new Banco("Maria","Safra");
let p2 = new Banco("Joana","Inter");
let p3 = new Banco("Matheus","Bradesco");
let p4 = new Banco("Nick","Stone");

console.log(`${p1.nome} tem ${p1.Banco} Como seu Banco `)
console.log(`${p2.nome} tem ${p2.Banco} Como seu Banco `)
console.log(`${p3.nome} tem ${p3.Banco} Como seu Banco `)
console.log(`${p4.nome} tem ${p4.Banco} Como seu Banco `)
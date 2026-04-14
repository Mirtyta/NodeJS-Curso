class Mascota {
  constructor(nombre, especie, edad ) {
    this.mascota = nombre.trim().toUpperCase();
    this.raza = especie;
    this.edad = edad;    
  }
}

const salaDeEspera = [
  new Mascota("LOLA", "Bulldog", 5),
  new Mascota("Lola", "Bulldog", 1),
  new Mascota("LoLa", "Bulldog", 5),
  new Mascota("Roco", "Bulldog Frances", 1),
  new Mascota("Pepe", "Bulldog", 2)
]


function buscaMascota(lista, name) {
  let contador = 0;
  const buscar = name.trim().toUpperCase();  
 
lista.forEach(base => {
  const { mascota } = base;
  
  if (mascota === buscar ) {        
    contador ++;   
  }   

});  
 console.log(`Doctor, encontré ${contador} pacientes llamados "${buscar}"`) 
}

buscaMascota(salaDeEspera,"lola")

console.log("Mascotas que deben Vacunarse");

salaDeEspera.forEach(base => {
  const { edad } = base;   
  if(edad <= 2 ) {
    console.log(`✅ Vacunar a: "${base.mascota}" y tiene ${base.edad} años`);
  }else{
    console.log(`❌ NO vacunar a: "${base.mascota}" y tiene ${base.edad} años`);

  }
});

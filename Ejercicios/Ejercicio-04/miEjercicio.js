class TomarPresion {
  constructor(nombre, sis, dia) {
    this.paciente = nombre.trim().toUpperCase();
    this.sistolica = sis;
  }
}

const toma =  [
  new TomarPresion("MirtY", 140, 70),
  new TomarPresion("mirty", 100, 50),
  new TomarPresion("MIRTY", 120, 60),
  new TomarPresion("maria", 160, 80),
  new TomarPresion("luisa", 180, 90)]

  //console.log(toma)

function buscaPaciente(lista, name) { 
    const buscar = name.trim().toUpperCase();
    
    lista.forEach(base => {
      const { paciente } = base;
  if (paciente === buscar) {
    console.log(
      "los pacientes de la toma son..,", 
      base.paciente, base.sistolica, base.diastolica
    );
  }
});  
}

buscaPaciente(toma,"mirty");









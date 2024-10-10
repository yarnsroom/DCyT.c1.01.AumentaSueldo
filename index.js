class Cl_personal{
   constructor(cedula, sueldoAct, tipo){
      this.cedula = cedula
      this.sueldoAct = sueldoAct
      this.tipo = tipo
   }
   
   incremento(){
      let inc = 0
	  if (this.tipo===1)
         inc=this.sueldoAct*0.20
      else 
         inc=this.sueldoAct*0.10
      return inc
   }

   nvoSueldo(){
      return this.sueldoAct + this.incremento()
   }
}

class Cl_empresa{
   constructor(){
      this.acumIncremento
      = this.contObreros
      = this.contPersonal = 0
   }
   
   procesarPersona(p){
      this.acumIncremento += p.incremento()
      this.contPersonal++
      if (p.tipo===1)
         this.contObreros++
   }

   totIncremento(){
      return this.acumIncremento
   }

   porcObreros(){
      return this.contObreros / this.contPersonal * 100
   }
}

let personal1 = new Cl_personal(555, 200, 2)
let personal2 = new Cl_personal(888, 500, 1)
let personal3 = new Cl_personal(777, 400, 2)
let personal4 = new Cl_personal(666, 600, 1)
let personal5 = new Cl_personal(444, 800, 1)

let empresa = new Cl_empresa()
empresa.procesarPersona(personal1)
empresa.procesarPersona(personal2)
empresa.procesarPersona(personal3)
empresa.procesarPersona(personal4)
empresa.procesarPersona(personal5)

salida = document.getElementById("app")
salida.innerHTML = "Resultados:"

salida.innerHTML += `<br>Cédula ${personal1.cedula}: Incremento $${personal1.incremento()}, Nvo.Sueldo $${personal1.nvoSueldo()}`
salida.innerHTML += `<br>Cédula ${personal2.cedula}: Incremento $${personal2.incremento()}, Nvo.Sueldo $${personal2.nvoSueldo()}`
salida.innerHTML += `<br>Cédula ${personal3.cedula}: Incremento $${personal3.incremento()}, Nvo.Sueldo $${personal3.nvoSueldo()}`
salida.innerHTML += `<br>Cédula ${personal4.cedula}: Incremento $${personal4.incremento()}, Nvo.Sueldo $${personal4.nvoSueldo()}`
salida.innerHTML += `<br>Cédula ${personal5.cedula}: Incremento $${personal5.incremento()}, Nvo.Sueldo $${personal5.nvoSueldo()}`
salida.innerHTML += '<br>'
salida.innerHTML += `<br>Total por incremento: $${empresa.totIncremento()}`
salida.innerHTML += `<br>Porcentaje personal obrero: ${empresa.porcObreros()}%`

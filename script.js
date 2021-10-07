document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Porfavor Ingresa una Tarea")
    }
    else{
        // Se agregan las tareas
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        // Se remueven las tareas las tareas

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        // Se tachan las tareas

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        //Limpia la caja de texto

        document.querySelector("#newtask input").value = "";
    }
}

/*class Manejador {
    constructor() {
      this.cajaDeTexto = document.querySelector('#newtask input');
      this.push = document.querySelector('#push');
      this.tasks = document.querySelector('#tasks');
      this.push.onclick = this.escucharEvento.bind(this);
    }
    escucharEvento() {
      if (!this.cajaDeTexto.value) {
        alert("Porfavor Ingresa una Tarea");
        return;
      }
      const elemento = this.crearElemento(this.cajaDeTexto.value);
      this.tasks.innerHTML += elemento;
      this.escucharEventoBorrar();
      this.escucharEventoTachar();
      this.limpiar();
    }
    crearElemento(valor) {
      return `
        <div class="task">
            <span id="taskname">
                ${valor}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>`;
    }
    escucharEventoBorrar() {
      var current_tasks = document.querySelectorAll(".delete");
      for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
          this.parentNode.remove();
        }
      }
    }
    escucharEventoTachar() {
      var tasks = document.querySelectorAll(".task");
      for (var i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
          this.classList.toggle('completed');
        }
      }
    }
    limpiar() {
      this.cajaDeTexto.value = "";
    }
  }

  */
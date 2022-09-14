class Student {
  constructor(student_id, first_name, last_name, group_id, start_year) {
    this.student_id = student_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.group_id = group_id;
    this.start_year = start_year;
  }
}

class Mark {
  constructor(student_id, subject_id, date, mark, mark_id) {
    this.mark_id = mark_id;
    this.student_id = student_id;
    this.subject_id = subject_id;
    this.date = date;
    this.mark = mark;
  }
}

function getStudent() {
  let url = "http://localhost:3000/students";
  let id = document.getElementById("student_id").value;
  let final = document.getElementById("final");

  if (id != "") {
    url += `?id="${id}"`;
  }
  let param = {
    headers: { "Content-type": "application/json; charset= UTF-8" },
    method: "GET",
  };
  fetch(url, param)
    .then(function (data) {
      return data.json();
    })
    .then(function (result) {
      //console.log(result);

      for (let i = 0; i < result.length; i++) {
        final.innerHTML += `<p><div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                <div class="card-header"></div>
                <div class="card-body">
                    <h5 class="card-title"><p></p>Datos del Alumno:</h5>
                    <p class="card-text">Nombre: ${result[i].first_name}</p>
                    <p class="card-text">Apellido: ${result[i].last_name}</p>
                    <p class="card-text">Grupo: ${result[i].group_id}</p>
                    <p class="card-text">Fecha de ingreso: ${result[i].start_year}</p>
                </div>
                </div></p>`;
      }
    })
    .catch(function (error) {
      //console.log(error);
    });
  final.innerHTML = "";
}

function postStudent() {
  let student = new Student(
    document.getElementById("student_id").value,
    document.getElementById("first_name").value,
    document.getElementById("last_name").value,
    document.getElementById("group_id").value,
    document.getElementById("start_year").value
  );
  //console.log(JSON.stringify(student))

  const url = "http://localhost:3000/students";

  if (validarS(student)) {
    let param = {
      headers: { "Content-type": "application/json; charset= UTF-8" },
      body: JSON.stringify(student),
      method: "POST",
    };

    fetch(url, param)
      .then(function (data) {
        return data.json();
      })
      .then(function (result) {
        console.log("result",result)
        // if (result == "-1")
        //   showToast("ERROR: Error al crear el estudiante", "bg-danger");
        // else showToast("Estudiante fue creado con ID: " + result, "bg-success");

        //console.log(result);
      })
      .catch(function (error) {
        showToast("ERROR: Error de conexion con ApiRest", "bg-danger");
        //console.log(error);
      });
  }
}

function putStudent() {
  let student = new Student(
      document.getElementById("student_id").value,
      document.getElementById("first_name").value,
      document.getElementById("last_name").value,
      Number(document.getElementById("group_id").value),
      document.getElementById("start_year").value
  );

  const url = "http://localhost:3000/students";
  console.log(JSON.stringify(student))

  if (validarPut(student)) {
    let param = {
      headers: { "Content-type": "application/json; charset= UTF-8" },
      body: JSON.stringify(student),
      method: "PUT",
    };

    fetch(url, param)
      .then(function (data) {
        return data.json();
      })
      .then(function (result) {
        if (result == "-1")
          showToast("ERROR: Error de creacion de Estudiante", "bg-danger");
        else showToast("Estudiante agregado", "bg-success");
      })
      .catch(function (error) {
        showToast("ERROR: Error de conexion con ApiRest", "bg-danger");
        //console.log(error);
      });
  }
}

function deleteStudent() {
  let id = document.getElementById("student_id").value;

  if (id != "") {
    id = Number(id);
    let student = new Student(id, "", "", "", "");

    const url = "http://localhost:3000/students";

    let param = {
      headers: { "Content-type": "application/json; charset= UTF-8" },
      body: JSON.stringify(student),
      method: "DELETE",
    };

    fetch(url, param)
      .then(function (data) {
        return data.json();
      })
      .then(function (result) {
        if (!result.error) {
          showToast("Estudiante eliminado", "bg-success");
        } else {
          showToast("Error en el ID", "bg-danger");
        }
      })
      .catch(function (error) {
        //console.log(error);
      });
  } else {
    showToast("Escribe un ID valido", "bg-danger");
  }
}

function validarS(student) {
  resultado = false;
  if (student.first_name == "" || student.first_name == "null") {
    showToast("AVISO: Campo Nombre en blanco", "bg-warning");
  } else if (student.last_name == "" || student.last_name == "null") {
    showToast("AVISO: Campo Apellido en blanco", "bg-warning");
  } else if (student.group_id == "" || student.group_id == "null") {
    showToast("AVISO: Campo Grupo en blanco", "bg-warning");
  } else if (student.start_year == "" || student.start_year == "null") {
    showToast("AVISO: Campo Fecha en Blanco", "bg-warning");
  } else resultado = true;

  return resultado;
}

function validarPut(student) {
  resultado = false;
  if (student.student_id == "" || student.students_id == "null") {
    showToast("AVISO: Escribe un ID valido", "bg-warning");
  } else resultado = true;

  return resultado;
}

//   MARKS //

function getMark() {
  let url = "http://localhost:3000/marks";
  let id = document.getElementById("student_id").value;
  let final = document.getElementById("final");

  if (id != "") {
    url += `?id="${id}"`;
  }

  let param = {
    headers: { "Content-type": "application/json; charset= UTF-8" },
    method: "GET",
  };
  fetch(url, param)
    .then(function (data) {
      return data.json();
    })
    .then(function (result) {
      //console.log(result);

      for (let id = 0; id < result.length; id++) {
        final.innerHTML += `<p><div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                                <div class="card-header"></div>
                                    <div class="card-body">
                                    <h5 class="card-title"><p></p>Notas del alumno:</h5>
                                    <p class="card-text">ID de estudiante: ${result[id].student_id}</p>
                                    <p class="card-text">ID de asignatura: ${result[id].subject_id}</p>
                                    <p class="card-text">Nota: ${result[id].mark}</p>
                                </div>
                                </div></p>`;
      }
    })
    .catch(function (error) {
      //console.log(error);
    });
  final.innerHTML = "";
}

function postMark() {
  let mark = new Mark(
    document.getElementById("student_id").value,
    document.getElementById("subject_id").value,
    document.getElementById("date").value,
    document.getElementById("mark").value,
    document.getElementById("mark_id").value
  );
  console.log(mark)

  const url = "http://localhost:3000/marks";

  if (validar(mark)) {
    let param = {
      headers: { "Content-type": "application/json; charset= UTF-8" },
      body: JSON.stringify(mark),
      method: "POST",
    };

    fetch(url, param)
      .then(function (data) {
        return data.json();
      })
      .then(function (result) {
        if (result == "-1")
          showToast("ERROR: Error al crear el valor", "bg-danger");
        else showToast("Nota Agregada: " + result, "bg-success");

        //console.log(result);
      })
      .catch(function (error) {
        showToast("ERROR: Error de conexion con ApiRest", "bg-danger");
        //console.log(error);
      });
  }
}

function putMark() {
  let mark = new Mark(
      document.getElementById("student_id").value,
      document.getElementById("subject_id").value,
      document.getElementById("date").value,
      document.getElementById("mark").value,
      Number(document.getElementById("mark_id").value)
  );
  //console.log(typeof(document.getElementById("mark").value))
  //console.log(JSON.stringify(mark))

  const url = "http://localhost:3000/marks";

  let param = {
    headers: { "Content-type": "application/json; charset= UTF-8" },
    body: JSON.stringify(mark),
    method: "PUT",
  };

  fetch(url, param)
    .then(function (data) {
      return data.json();
    })
    .then(function (result) {
      if (result == "-1")
        showToast("ERROR: Error al crear el valor", "bg-danger");
      else showToast("Nota Actualizada", "bg-success");
    })
    .catch(function (error) {
      showToast("ERROR: Error de conexion con ApiRest", "bg-danger");
      //console.log(error);
    });
}

function deleteMark() {
  let id = document.getElementById("mark_id").value;

  if (id != "") {
    id = Number(id);
    let mark = new Mark("", "", "", "",id);

    const url = "http://localhost:3000/marks";

    let param = {
      headers: { "Content-type": "application/json; charset= UTF-8" },
      body: JSON.stringify(mark),
      method: "DELETE",
    };

    fetch(url, param)
      .then(function (data) {
        return data.json();
      })
      .then(function (result) {
        if (!result.error) {
          showToast("Nota eliminada correctamente", "bg-success");
        } else {
          showToast("El ID es incorrecto", "bg-danger");
        }
      })
      .catch(function (error) {
        //console.log(error);
      });
  } else {
    showToast("Introduce un ID", "bg-danger");
  }
}

function validar(mark) {
  resultado = false;
  if (mark.student_id == "" || mark.student_id == "null") {
    showToast("AVISO: ID del Alumno en blanco", "bg-warning");
  } else if (mark.subject_id == "" || mark.subject_id == "null") {
    showToast("AVISO: ID de la Asignatura en blanco", "bg-warning");
  } else if (mark.date == "" || mark.date == "null") {
    showToast("AVISO: Campo Fecha en blanco", "bg-warning");
  } else if (mark.mark == "" || mark.mark == "null") {
    showToast("AVISO: Campo Nota en blanco", "bg-warning");
  } else resultado = true;

  return resultado;
}

function showToast(message, color) {
  document.getElementById("toastText").innerText = message;
  let toastElement = document.getElementById("toast");

  toastElement.className =
    toastElement.className.replace("bg-warning").replace("bg-danger") +
    " " +
    color;

  let toast = new bootstrap.Toast(toastElement);
  toast.show();
}
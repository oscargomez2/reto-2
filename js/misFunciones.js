function consultar(){
    $.ajax({
        url : 'https://g61dff592192815-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',
        // data : {id : 123},
        type : 'GET',
        datatype : 'json',
        success : function(respuesta){
        $("#resultado").empty();
            for(i= 0; i < respuesta.items.length; i++){
                $("#resultado").append(respuesta.items[i].nombre+"<br>");
            }
            console.log(respuesta);

        },
        error : function(xhr, status){
            alert('ha sucedido un problema, '+xhr.status);
        },
        complete : function(xhr, status){
            alert('peticion realizada, '+xhr.status);
        }
    });
}

function guardar(){
    $.ajax({
        url : 'https://g61dff592192815-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',
        data : {
            id : $("#id").val(),
            nombre : $("#nombre").val(),
            valor : $("#valor").val(),
            fecha : $("#fecha").val(),
            descripcion : $("#desc").val(),
            nombre_usuario : $("#user").val() },
        type : 'POST',
        datatype : 'json',
        success : function(respuesta, textStatus, xhr){
            console.log(respuesta);
        },
        error : function(xhr, status){
            alert('ha sucedido un problema, '+xhr.status);
        },
        complete : function(xhr, status){
            alert('peticion realizada, '+xhr.status);
            limpiarCampos();
        }
    });
}

function editar(){
    $.ajax({
        url : 'https://g61dff592192815-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',
        data : {
            id : $("#id").val(),
            nombre : $("#nombre").val(),
            valor : $("#valor").val(),
            fecha : $("#fecha").val(),
            descripcion : $("#desc").val(),
            nombre_usuario : $("#user").val() },
        type : 'PUT',
        datatype : 'json',
        success : function(respuesta, textStatus, xhr){
            console.log(respuesta);
        },
        error : function(xhr, status){
            alert('ha sucedido un problema, '+xhr.status);
        },
        complete : function(xhr, status){
            alert('peticion realizada, '+xhr.status);
            limpiarCampos();
        }
    });
}

function eliminar(){
    $.ajax({
        url : 'https://g61dff592192815-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',
        data : {
            id : $("#id").val() },
            
        type : 'DELETE',
        datatype : 'json',
        success : function(respuesta, textStatus, xhr){
            console.log(respuesta);
        },
        error : function(xhr, status){
            alert('ha sucedido un problema, '+xhr.status);
        },
        complete : function(xhr, status){
            alert('peticion realizada, '+xhr.status);
            limpiarCampos();
        }
    });
}

function buscarPorID(id){
    $.ajax({
        url : 'https://g61dff592192815-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos/:id',
        data : {
            id : $("#id").val() },
            //id : id },
        type : 'GET',
        datatype : 'json',
        success : function(respuesta){
            $("#resultado").emty();
            $("#resultado").append(respuesta.items[0].nombre)
            console.log(respuesta);
        },
        error : function(xhr, status){
            alert('ha sucedido un problema, '+xhr.status);
        },
        complete : function(xhr, status){
            alert('peticion realizada, '+xhr.status);
        }
    });
}

function limpiarCampos(){
    $("#nombre").val("");
    $("#valor").val("");
    $("#fecha").val("");
    $("#desc").val("");
    $("#user").val("");
}

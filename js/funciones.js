function guardarCliente(){
    $.ajax({
        url : 'https://g61dff592192815-reservabd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        data : {
            id : $("#id").val(),
            name : $("#name").val(),
            email : $("#email").val(),
            age : $("#age").val() },
            
            
        type : 'POST',
        datatype : 'json',
        success : function(respuesta, textStatus, xhr){
            
            console.log(respuesta);
            limpiarCampos();
        },
        error : function(xhr, status){
            alert('ha sucedido un problema, '+xhr.status);
        },
        complete : function(xhr, status){
            alert('peticion realizada, '+xhr.status);
            
        }
        
    });
}
function consultar(){
    $.ajax({
        url : 'https://g61dff592192815-reservabd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        //url : 'https://gd7875acd9fe525-sfdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        // data : {id : 123},
        type : 'GET',
        datatype : 'json',
        success : function(respuesta){
            $("#resultado").empty();
            console.log(respuesta);
            pintarRespuesta(respuesta.items);

        },
        error : function(xhr, status){
            alert('ha sucedido un problema, '+xhr.status);
        },
        complete : function(xhr, status){
            alert('peticion realizada, '+xhr.status);
        }
    });
}

function consultarMen(){
    $.ajax({
        url : 'https://g61dff592192815-reservabd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        //url : 'https://gd7875acd9fe525-sfdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        // data : {id : 123},
        type : 'GET',
        datatype : 'json',
        success : function(respuesta){
        
            console.log(respuesta);
            pintarRespuesta(respuesta.items);

        },
        error : function(xhr, status){
            alert('ha sucedido un problema, '+xhr.status);
        },
        complete : function(xhr, status){
            alert('peticion realizada, '+xhr.status);
        }
    });
}
function pintarRespuesta(items){
    let myTable="<table>";
    for(i= 0; i < items.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"<td>";
        myTable+="<td>"+items[i].name+"<td>";
        myTable+="<td>"+items[i].email+"<td>";
        myTable+="<td>"+items[i].age+"<td>";
        myTable+="<tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarmensaje(){
    $.ajax({
        url : 'https://g61dff592192815-reservabd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        data : {
            id : $("#id").val(),
            messagetext : $("#message").val() },
            
            
        type : 'POST',
        datatype : 'json',
        success : function(respuesta, textStatus, xhr){
            console.log(respuesta);
            limpiarCampos();
        },
        error : function(xhr, status){
            alert('ha sucedido un problema, '+xhr.status);
        },
        complete : function(xhr, status){
            alert('peticion realizada, '+xhr.status);
            
        }
        
    });
}

function guardarRoom(){
    $.ajax({
        url : 'https://g61dff592192815-reservabd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room',
        data : {
            id : $("#id").val(),
            room : $("#room").val(),
            stars : $("#stars").val(),
            category_id : $("#category_id").val(),
            description : $("#description").val() },
            
            
        type : 'POST',
        datatype : 'json',
        success : function(respuesta, textStatus, xhr){
            console.log(respuesta);
            limpiarCampos();
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
    $("#id").val("");
    $("#name").val("");
    $("#email").val("");
    $("#age").val("");
}
function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/"+cep+"/json/"
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //$("#logradouro").html(response.logradouro); //Pega pelo ID: #
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //alert(response.logradouro);
        }
    })//JQuery <<
}
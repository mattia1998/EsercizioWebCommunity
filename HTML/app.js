$(document).ready(function(){
   
   $("#btnRegistrati").click(function(){
     var form = $('<form class="form-inline" id="formRegistrazione"><label for="nome">Nome:  </label></form>');
     form.append('<input type="text" placeholder="Nome" id="nome" name="nome">');
     form.append('<br><br>');
     form.append('<label for="username">Username:  </label>');
     form.append('<input type="text" placeholder="Username" id="username" name="username">');
     form.append('<br><br>');
     form.append('<label for="password">Password:  </label>');
     form.append('<input type="password" placeholder="Password" id="password" name="password">');
     form.append('<br><br>');
     form.append('<button type="submit" class="btn btn-primary" name="btnInviaReg">Invia</button>');
     $("#contentForm").empty().append(form);
   });
  
  $("#btnInviaReg").click(function(){
    $("#formRegistrazione").hide();
  })
   
   
});
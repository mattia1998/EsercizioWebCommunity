$(document).ready(function() {

  //Bottone che mostra il Form per registrarsi
  $("#btnRegistrati").click(function() {
    var form_registrazione = $('<form class="form-inline" id="formRegistrazione"><label for="nome">Nome:  </label></form>');
    form_registrazione.append('<input type="text" placeholder="Nome" id="nome" name="nome">');
    form_registrazione.append('<br><br>');
    form_registrazione.append('<label for="username">Username:  </label>');
    form_registrazione.append('<input type="text" placeholder="Username" id="username" name="username">');
    form_registrazione.append('<br><br>');
    form_registrazione.append('<label for="password">Password:  </label>');
    form_registrazione.append('<input type="password" placeholder="Password" id="password" name="password">');
    form_registrazione.append('<br><br>');
    form_registrazione.append('<label for="provincia">Provincia :</label>');
    form_registrazione.append('<br><br>');
    var select = $('<select id="provincia" name="provincia"></select>');
    select.append('<option value="ag">Agrigento</option>');
    select.append('<option value="al">Alessandria</option>');
    select.append('<option value="an">Ancona</option>');
    select.append('<option value="ao">Aosta</option>');
    select.append('<option value="ar">Arezzo</option>');
    select.append('<option value="ap">Ascoli Piceno</option>');
    select.append('<option value="at">Asti</option>');
    select.append('<option value="av">Avellino</option>');
    select.append('<option value="ba">Bari</option>');
    select.append('<option value="bt">Barletta-Andria-Trani</option>');
    select.append('<option value="bl">Belluno</option>');
    select.append('<option value="bn">Benevento</option>');
    select.append('<option value="bg">Bergamo</option>');
    select.append('<option value="bi">Biella</option>');
    select.append('<option value="bo">Bologna</option>');
    select.append('<option value="bz">Bolzano</option>');
    select.append('<option value="bs">Brescia</option>');
    select.append('<option value="br">Brindisi</option>');
    select.append('<option value="ca">Cagliari</option>');
    select.append('<option value="cl">Caltanissetta</option>');
    select.append('<option value="cb">Campobasso</option>');
    select.append('<option value="ci">Carbonia-iglesias</option>');
    select.append('<option value="ce">Caserta</option>');
    select.append('<option value="ct">Catania</option>');
    select.append('<option value="cz">Catanzaro</option>');
    select.append('<option value="ch">Chieti</option>');
    select.append('<option value="co">Como</option>');
    select.append('<option value="cs">Cosenza</option>');
    select.append('<option value="cr">Cremona</option>');
    select.append('<option value="kr">Crotone</option>');
    select.append('<option value="cn">Cuneo</option>');
    select.append('<option value="en">Enna</option>');
    select.append('<option value="fm">Fermo</option>');
    select.append('<option value="fe">Ferrara</option>');
    select.append('<option value="fi">Firenze</option>');
    select.append('<option value="fg">Foggia</option>');
    select.append('<option value="fc">Forl&igrave;-Cesena</option>');
    select.append('<option value="fr">Frosinone</option>');
    select.append('<option value="ge">Genova</option>');
    select.append('<option value="go">Gorizia</option>');
    select.append('<option value="gr">Grosseto</option>');
    select.append('<option value="im">Imperia</option>');
    select.append('<option value="is">Isernia</option>');
    select.append('<option value="sp">La spezia</option>');
    select.append('<option value="aq">Laquila</option>');
    select.append('<option value="lt">Latina</option>');
    select.append('<option value="le">Lecce</option>');
    select.append('<option value="lc">Lecco</option>');
    select.append('<option value="li">Livorno</option>');
    select.append('<option value="lo">Lodi</option>');
    select.append('<option value="lu">Lucca</option>');
    select.append('<option value="mc">Macerata</option>');
    select.append('<option value="mn">Mantova</option>');
    select.append('<option value="ms">Massa-Carrara</option>');
    select.append('<option value="mt">Matera</option>');
    select.append('<option value="vs">Medio Campidano</option>');
    select.append('<option value="me">Messina</option>');
    select.append('<option value="mi">Milano</option>');
    select.append('<option value="mo">Modena</option>');
    select.append('<option value="mb">Monza e della Brianza</option>');
    select.append('<option value="na">Napoli</option>');
    select.append('<option value="no">Novara</option>');
    select.append('<option value="nu">Nuoro</option>');
    select.append('<option value="og">Ogliastra</option>');
    select.append('<option value="ot">Olbia-Tempio</option>');
    select.append('<option value="or">Oristano</option>');
    select.append('<option value="pd">Padova</option>');
    select.append('<option value="pa">Palermo</option>');
    select.append('<option value="pr">Parma</option>');
    select.append('<option value="pv">Pavia</option>');
    select.append('<option value="pg">Perugia</option>');
    select.append('<option value="pu">Pesaro e Urbino</option>');
    select.append('<option value="pe">Pescara</option>');
    select.append('<option value="pc">Piacenza</option>');
    select.append('<option value="pi">Pisa</option>');
    select.append('<option value="pt">Pistoia</option>');
    select.append('<option value="pn">Pordenone</option>');
    select.append('<option value="pz">Potenza</option>');
    select.append('<option value="po">Prato</option>');
    select.append('<option value="rg">Ragusa</option>');
    select.append('<option value="ra">Ravenna</option>');
    select.append('<option value="rc">Reggio di Calabria</option>');
    select.append('<option value="re">Reggio nellEmilia</option>');
    select.append('<option value="ri">Rieti</option>');
    select.append('<option value="rn">Rimini</option>');
    select.append('<option value="rm">Roma</option>');
    select.append('<option value="ro">Rovigo</option>');
    select.append('<option value="sa">Salerno</option>');
    select.append('<option value="ss">Sassari</option>');
    select.append('<option value="sv">Savona</option>');
    select.append('<option value="si">Siena</option>');
    select.append('<option value="sr">Siracusa</option>');
    select.append('<option value="so">Sondrio</option>');
    select.append('<option value="ta">Taranto</option>');
    select.append('<option value="te">Teramo</option>');
    select.append('<option value="tr">Terni</option>');
    select.append('<option value="to">Torino</option>');
    select.append('<option value="tp">Trapani</option>');
    select.append('<option value="tn">Trento</option>');
    select.append('<option value="tv">Treviso</option>');
    select.append('<option value="ts">Trieste</option>');
    select.append('<option value="ud">Udine</option>');
    select.append('<option value="va">Varese</option>');
    select.append('<option value="ve">Venezia</option>');
    select.append('<option value="vb">Verbano-Cusio-Ossola</option>');
    select.append('<option value="vc">Vercelli</option>');
    select.append('<option value="vr">Verona</option>');
    select.append('<option value="vv">Vibo valentia</option>');
    select.append('<option value="vi">Vicenza</option>');
    select.append('<option value="vt">Viterbo</option>');
    form_registrazione.append(select);
    form_registrazione.append('<br><br>');
    form_registrazione.append('<button type="submit" class="btn btn-primary" name="btnInviaReg">Invia</button>');
    $("#contentForm").empty().append(form_registrazione);
  });
  
  //Bottone per invio dei dati della registrazione
  $("#btnInviaReg").click(function() {
    $("#formRegistrazione").hide();
  })
  
  //Bottone che mostra il form per il log in
  $("#btnLog_In").click(function(){
    var form_log_in = $('<form class="form-inline" id="formLog_In"><label for="nome">Username:  </label></form>');
    form_log_in.append('<input type="text" placeholder="Username" id="username" name="username">');
    form_log_in.append('<br><br>');
    form_log_in.append('<label for="password">Password:  </label>');
    form_log_in.append('<input type="password" placeholder="Password" id="password_log" name="password_log">');
    form_log_in.append('<br><br>');
    form_log_in.append('<button type="submit" class="btn btn-primary" name="btnInviaLog_In">Accedi</button>');
    $("#contentForm").empty().append(form_log_in);
  });

});
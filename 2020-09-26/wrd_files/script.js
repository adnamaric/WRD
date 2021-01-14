$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var check = false;
        return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
);
$(".zaFormu").validate({
    rules:{
        ime:{
            required:true,
            regex:/^[A-Z][a-z]+ [A-Z][a-z]+$/
        },
        grad:{
            required:true,
            regex:/^[A-Z][a-z]+$/
        },
        licnibrojk:{
            required:true,
            regex:/^[ID]{2}(\/)[0-9]{3}(\-)[0-9]{3}$/
        }
    },
    messages:{
        ime:{
            required:"true",
            regex:"Molimo unesite ime i prezime sa velikim početnim slovima!"
        },
        grad:{
            required:"true",
            regex:"Molimo unesite samo tesktualne podatke!"
        },
        licnibrojk:{
            required:"true",
            regex:"Molimo unesite traženi format ID/111-222 "
        }
    }
});

function getPoziv(funk, url)
    {
       
        
        var zahtjev = new XMLHttpRequest();
       
        zahtjev.onload  = function() { 
                if (zahtjev.status === 200) {  
                   funk(JSON.parse(zahtjev.responseText));
                }
                else {  
                    alert("Server javlja grešku: " + zahtjev.statusText);  
                }  
        }

        zahtjev.onerror = function() {
            alert("Greška u komunikaciji sa serverom.");  
        };

        zahtjev.open("GET", url, true);
        zahtjev.send(null);
    }
    urlGetAll="http://onlineshop.wrd.app.fit.ba/api/ispit20190914/Narudzba/GetProizvodiAll";
function Transform(obj){
  return `
    <tr>
    <td>${obj.proizvodID}</td>
    <td id="naziv">${obj.naziv}</td>
    <td id="cijena">${obj.cijenaPoKvadratu}</td>
    <td><img src="${obj.slikaUrl}" height="100" width="100"/></td>
    <td>${obj.likeCounter}</td>
    </tr>
  `
}
function Load(obj){
 for(var i in obj){
     document.querySelector("#tabelaProizvodi tbody").innerHTML+=Transform(obj[i]);
 }
}

function Najskuplji(){
    var nazivi=document.querySelectorAll("#naziv");
    var cijene=document.querySelectorAll("#cijena");
    if(cijene.length==0){
        alert("Proizvodi nisu učitani!");
    }
    else{
    var temp=0;
    var pozicija=0;
    for(var i in cijene){
        if(Number(temp)<Number(cijene[i].innerHTML)){
            temp=cijene[i].innerHTML;
            pozicija=i;
        }
    }
    alert("Najskuplji proizvod je:"+nazivi[pozicija].innerHTML+" cijenom od: "+cijena[pozicija].innerHTML);
}
}
function Srednja(){
    var cijene=document.querySelectorAll("#cijena");
    var nazivi=document.querySelectorAll("#naziv");
    if(cijene.length==0)
    {
        alert("Proizvod nisu učitani!");
    }
    else{
    var suma= new Number();
    var duzina=cijene.length;
    var i;
    for(i=0;i<duzina;i++){
        suma+=Number(cijene[i].innerHTML);
    }
    var pozicija=0;
    var srednjaCijena=suma/cijene.length;
    var temp=Math.abs(srednjaCijena-Number(cijene[0].innerHTML));
    for (i=0;i<duzina-1;i++){
        if(temp>Math.abs(srednjaCijena-Number(cijene[i].innerHTML))){
            pozicija=i;
            temp=Math.abs(srednjaCijena-Number(cijene[i].innerHTML));
        }
    }
    alert("Element sa cijenom najblizoj srednjoj cijeni ("+srednjaCijena+") je:"+nazivi[pozicija].innerHTML+"sa cijenom:"+cijene[pozicija].innerHTML);
} 
} 
$(function() {
    let apivegpont="http://localhost:3000/termekek";
    const ajaxHivas=new AjaxHivas();
    ajaxHivas.getAjax(apivegpont, termekLista)

    function termekLista(termekek) {
        const szuloElem = $("table");
        const sablonElem = $(".termek");

        termekek.forEach(function(elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new TermekAdmin(node, elem);

        });
        sablonElem.remove(); //sablonelem eltávolítása
    }
    $(window).on("torles", (event) => {
        
    });
    var hely;
    $(window).on("modositas", (event) => {              
        $("#nev").val(event.detail.nev)
        $("#leir").val(event.detail.leiras)
        $("#ar").val(event.detail.ar)
        hely = (event.detail.id)        
    });
   
    $(".modositas").click(function(){

        var adat = {
            id: hely,
            nev: $("#nev").val(),
            leiras: $("#leir").val(),
            ar: $("#ar").val(),
            kep: "kepek/kep_6.jpeg"
                    }
        let apivegpontuj="http://localhost:3000/termekek";
        ajaxHivas.putAjax(apivegpontuj, adat, hely)


    });

});
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
    $(window).on("torles", () => {
        console.log("Töröltem magam!")
    });
    $(window).on("modositas", () => {
        console.log("Módosítottam magam!")
    });
    

});
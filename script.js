$(function () {
  const kosar = new Kosar()
  const ajaxHivas=new AjaxHivas();
  let apivegpont="http://localhost:3000/termekek";
  ajaxHivas.getAjax(apivegpont, termekLista)

  function termekLista(termekek) {
    const szuloElem = $('.termekek')
    const sablonElem = $('.sablon .termek')
    szuloElem.empty();
    sablonElem.show()

    termekek.forEach(function (elem) {
      let node = sablonElem.clone().appendTo(szuloElem)
      const obj = new TermekAruhaz(node, elem)
    })
    sablonElem.hide() //sablonelem eltávolítása

    $(window).on('termekKosarba', (event) => {
      //itt hívjuk meg a kosarat és belepakoljuk a kosár tömbbe az
      //aktuális termék adatait
      kosar.setKosar(event.detail)
    })
  }
  $("#tname").keyup(function(){
    let apivegpontuj="http://localhost:3000/termekek?q="+ $("#tname").val();
    ajaxHivas.getAjax(apivegpontuj, termekLista)
  });

  $("#rendez").on("click",(function(){
    if ($("#rendez").val()=="nő"){
      let apivegpontuj2="http://localhost:3000/termekek?_sort=ar&_order=asc";
      ajaxHivas.getAjax(apivegpontuj2, termekLista)
    }
    if ($("#rendez").val()=="csökken"){
      let apivegpontuj2="http://localhost:3000/termekek?_sort=ar&_order=desc";
      ajaxHivas.getAjax(apivegpontuj2, termekLista)
    }
    if ($("#rendez").val()=="nevnő"){
      let apivegpontuj2="http://localhost:3000/termekek?_sort=nev&_order=asc";
      ajaxHivas.getAjax(apivegpontuj2, termekLista)
    }
    if ($("#rendez").val()=="nevcsökken"){
      let apivegpontuj2="http://localhost:3000/termekek?_sort=nev&_order=desc";
      ajaxHivas.getAjax(apivegpontuj2, termekLista)
    }
    
    
   
    
  }));

})

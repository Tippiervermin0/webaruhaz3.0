
class AjaxHivas {
    constructor() { }



    getAjax(fajlnev, myCallback) {
        const termekek = [];
        $.ajax({
            url: fajlnev,
            type: "GET",
            success: function (result) {
                result.forEach((element) => {
                    termekek.push(element);
                });

                myCallback(termekek);

            },
        });
    }
    postAjax(fajlnev, myCallback) {
        const termekek = [];
        $.ajax({
            url: fajlnev,
            type: "POST",
            data: adat,
            success: function (result) {

            },
        });
    }
    putAjax(fajlnev, myCallback) {
        const termekek = [];
        $.ajax({
            url: fajlnev + "/" + id,
            type: "PUT",
            data: adat,
            success: function (result) {

            },
        });
    }
    deleteAjax(fajlnev, myCallback) {
        const termekek = [];
        $.ajax({
            url: fajlnev + "/" + id,
            type: "DELETE",
            data: adat,
            success: function (result) {

            },
        });
    }
}

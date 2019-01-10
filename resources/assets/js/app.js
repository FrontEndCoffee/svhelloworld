$(document).ready( function () {

    //language settings
    var dutch = {
        "sProcessing": "Bezig...",
        "sLengthMenu": "_MENU_ resultaten weergeven",
        "sZeroRecords": "Geen resultaten gevonden",
        "sInfo": "_START_ tot _END_ van _TOTAL_ resultaten",
        "sInfoEmpty": "Geen resultaten om weer te geven",
        "sInfoFiltered": " (gefilterd uit _MAX_ resultaten)",
        "sInfoPostFix": "",
        "sSearch": "Zoeken:",
        "sEmptyTable": "Geen resultaten aanwezig in de tabel",
        "sInfoThousands": ".",
        "sLoadingRecords": "Een moment geduld aub - bezig met laden...",
        "oPaginate": {
            "sFirst": "Eerste",
            "sLast": "Laatste",
            "sNext": "Volgende",
            "sPrevious": "Vorige"
        },
        "oAria": {
            "sSortAscending":  ": activeer om kolom oplopend te sorteren",
            "sSortDescending": ": activeer om kolom aflopend te sorteren"
        }
    };

    $('#activities-table').DataTable({
        language: dutch,
        // "columnDefs": [
        //     { "orderable": false, "targets": 2 }
        // ],
        "pageLength": 100
    });

    $('#activities-entries-table').DataTable({
        language: dutch,
        "pageLength": 100
    });

} );

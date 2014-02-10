ticketsApp.service('sharedProperties', function () {
    var ticket_fields = ['title', 'subtitle', 'price', 'date', 'nb_tickets', 'Cr Code Web Link'];
    var default_ticket_values = ['Default Title', 'default subtitle', '0 €', 'today', '200', 'Your Web Link'];
    var ticket_values = [];
    return {
        loadFields: function(){return ticket_fields},
        getDefaultTicketValues: function() {  return default_ticket_values; },
        setTicketValues: function(v_list) {  ticket_values = v_list; },
        getTicketValues: function() {  return ticket_values; }                
    };
});


ticketsApp.service('qrCode', function ($http, $q, $timeout) {
            
    function makeCode (value) {      
        qrcode = new QRCode(document.getElementById("qrcode"), {
                width : 150,
                height : 150
            });
                
        qrcode.makeCode(value);
    }
   
    return {
        make: function(input_text){
            
                makeCode(input_text);
                // debugger;
                $timeout(function(){
                    srcData = $('#qrcode').children()[2].src;
                    elems = $('.qrcode');
                    $.each(elems, function(index, el){                
                       el.src = srcData;                
                    });                       
                }, 1000);
        }

     }   

});

ticketsApp.service('barcodeService', function(){
    return {
        generateC39 : function(){
            // barcode by default corresponds to the ticket number, can be changed
            $('.barcode39').barcode({code:'code39'});
        },
        generateI25 : function(){
            $('.barcodeI25').barcode({code:'I25'});
        }
    }        
});
 // controller
ticketsApp.controller('ticketsController', function ($scope, sharedProperties, barcodeService, qrCode) {
   
    $scope.ticket = { 
        v_repeat : [1, 2],
        ticketNumbers : [],
        tvalues : sharedProperties.getTicketValues()
    }
    console.log('init : tvalues : ' + $scope.ticket.tvalues);

    var x = function(a,b,c,d){
        d=[];c=b-a+1;while(c--){d[c]=b--}return d
    }

    function zeroPad(num, places) {
      var zero = places - num.toString().length + 1;
      return Array(+(zero > 0 && zero)).join("0") + num;
    }

    function generateTickets(){
        // console.log('in gererateTickets');    

        // console.log($scope.ticket.tvalues);
        $scope.ticket.tvalues[4] = parseInt($scope.ticket.tvalues[4]);
        $scope.n_list = x(1,$scope.ticket.tvalues[4]);
        $scope.n_list.forEach(function(i){ $scope.ticket.ticketNumbers.push(zeroPad(i, 4))});
        // debugger;

    }

    generateTickets();

    $scope.barcodeGen = function(){
        barcodeService.generateC39();
        qrCode.make($scope.ticket.tvalues[5]);
    }


});

// controller
ticketsApp.controller('formController', function ($scope, sharedProperties, barcodeService) {

    $scope.ticket = {                    
        tfields : sharedProperties.loadFields(),
        tdvalues : sharedProperties.getDefaultTicketValues(),
        tvalues : []
    };    

    $scope.barcodeGen = function(){
        barcodeService.generateC39();
    }

    $scope.saveTickets = function(){
        localStorage.setItem('ticket.tvalues', JSON.stringify($scope.ticket.tvalues));
    };

    $scope.$watchCollection('ticket.tvalues', function() {
        if ((typeof $scope.ticket.tvalues[4] !== 'undefined') && 
            ($scope.ticket.tvalues[4].match(/^[0-9]*$/)) === null){
            $scope.ticket.tvalues[4] = '';                
        }                    
        sharedProperties.setTicketValues($scope.ticket.tvalues); 
    });

    // at init, try to get the tvalues from local storage if they had been saved
    $scope.ticket.tvalues = JSON.parse (localStorage.getItem('ticket.tvalues'));
    if ($scope.ticket.tvalues === null ) {
        $scope.ticket.tvalues  = $scope.ticket.tdvalues;
    }
    // debugger;


});

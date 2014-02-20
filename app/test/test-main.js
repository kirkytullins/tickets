
describe('formController', function(){
  var scope;
  var sharedProperties;
   
  beforeEach(angular.mock.module('tickets'));
  
  beforeEach(angular.mock.inject(function($rootScope, $controller){    
    scope = $rootScope.$new();
    $controller('formController', {$scope : scope})
  }));
  it('should have variable text', function(){  
    // dump(scope.ticket)
    expect(scope.ticket).toNotBe(undefined);
    expect(scope.ticket.tfields[0]).toBe('title');
    expect(scope.ticket.tdvalues[0]).toBe('Default Title');
  });
});

describe('sharedProperties', function(sharedProperties){
  beforeEach(module('tickets'));
  it('should load tickets values ', function(){  
    inject(function(sharedProperties){
      ff = sharedProperties.loadFields();
      
      dtv = sharedProperties.getDefaultTicketValues();

      expect(dtv).toEqual( ['Default Title', 'default subtitle', '0 €', 'today', '200', 'Your Web Link']);
      gtv = sharedProperties.getTicketValues();
      
      console.log(gtv);
      expect(gtv.length).toEqual(0);

    });

  });
});


describe('ticketsController', function(){
  var scope;
  var sharedProperties;
   
  // beforeEach( inject( function(_sharedProperties_){
  //    sharedProperties = _sharedProperties_ ;
  //    dump(sharedProperties)

  // }));


  beforeEach(angular.mock.module('tickets'));
  
  beforeEach(angular.mock.inject(function($rootScope, $controller){    
    scope = $rootScope.$new();
    $controller('ticketsController', {$scope : scope})
  }));
  it('should have variable text', function(){  
    // dump(scope.ticket)
    expect(scope.ticket).toNotBe(undefined);

  });
});




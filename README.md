# Ticket Generator on your browser

> Generate your tickets for your Event without hassle, just by using html, css3 and a dash of angular magic !

## Installation 

git clone http://github.com/kirkytullins/tickets.git



## Usage 

double click on 'tickets.html'
or use a server to serve up documents from the root of the folder (i.e node.js)

in node : 

    http-server /path/to/tickets


Once the configuration is been entered, click 'Generate' to generate the tickets. 
The current inputs can also be saved locally : click button 'save Locally'.
After the tickets have been generated, click on 'Generate qrCode' to generate the barcode + qrcode. 
When this is done, click on 'Print' which will take you to the print preview page, then you may choose printing options etc.

## Configuration 

By default, the generator includes a barcode for each ticket number, very convenient if you want to scan the tickets on entrance.
The generator also includes the possibibity to create a qrcode in the third part of the ticket which can be set to any web link 
The ticket is split into 3 parts : 

 * First part (contains all the info + the barcode) is meant to be kept by the cashier
 * Secord part (same as the first one) is meant to be kept by the customer
 * Third part (contains the qrcode only) is for promotion purposes

 The first and second part can be configured as below:

  * The title of the ticket (e.g : 'Club night')
  * The subtitle  (e.g: 'Great dansers')
  * The price     
  * The Date of the event
  * The number of tickets to be printed (must type a number, text is not accepted)
  * The text for the qrcode

## How it works

Let's check the 'tickets.html', below is the section where the actual content from the controllers goes: 

    <div id="print-content" class="span8">
        <div ng-view>                    
            <!-- partials go here : formView.html and tichetsView.html-->
        </div>                
      </div>
    </div>

It's all orchestrated using angular routes (main angular app file 'app/app.js')
<pre>
  var ticketsApp = angular.module('tickets', []);

  ticketsApp.config(function ($routeProvider) {
      $routeProvider
          .when('/about',
          {
              controller: '',
              templateUrl: 'app/partials/about.html'
          })        
          .when('/contact',
          {
              controller: '',
              templateUrl: 'app/partials/contact.html'
          })        
          .when('/generate_it',
          {
              controller: 'ticketsController',
              templateUrl: 'app/partials/ticketsView.html'
          })        
          .when('/form',
              {
                  controller: 'formController',
                  templateUrl: 'app/partials/formView.html'
              })        
          .otherwise({ redirectTo: '/tickets.html' });
  });

</pre>

The `formView.html` partial is used to present the input fields which must be filled.
The `ticketsView.html` partial actually generates the content

## Todos

 * Should allow to disable the qrcode (currently cannot be disabled)
 * The number of tickets per page is 4 (not configurable, but can be changed in the printer configuration) 
 * It would be nice to add some sort of background image in order to avoid forging (Mouahahahah !)
 * Only tested in Chrome (not sure that the print.css style will work in IE etc)
 * Probably some other things I didn't see ..

Please feel free to clone it and change/correct any of the below (or the whole project if you like) and send me pull requests

Happy Ticket printing !!


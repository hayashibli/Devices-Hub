'use strict';
var totals;
var allDevices = [];
var price;
var headers = ['Device Name', 'Quantity', 'Unit Price', 'Category'];
var table = document.getElementById('deviceTable');
// create constructor
function Devices(deviceName, quantity, category) {
  this.deviceName = deviceName;
  this.quantity = quantity;
  this.category = category;
  this.unitPrice =price;
  allDevices.push(this);

}

Devices.prototype.addRow = function(){
  var row = document.createElement('tr');
  table.appendChild(row);
  var td = document.createElement('td');
  td.textContent = this.deviceName;
  row.appendChild(td);
  var td2 = document.createElement('td');
  td2.textContent = this.quantity;
  row.appendChild(td2);
  var td3 = document.createElement('td');
  td3.textContent = price;
  row.appendChild(td3);
  var td4 = document.createElement('td');
  td4.textContent = this.category;
  row.appendChild(td4);
  td.style.border = '2px';
  td2.style.border = '2px';
  td3.style.border = '2px';
  td4.style.border = '2px';

};

var form = document.getElementById('deviceForm');
form.addEventListener('submit',addDevice);
function addDevice (e){
  e.preventDefault();
  var name = e.target.itemName.value;
  var category = e.target.category.value;
  var quantity = Number(e.target.quantity.value);
  var device =new Devices(name,quantity,category);
  device.addRow();
  console.log(typeof (quantity));
  localStorage.setItem('Devices', JSON.stringify(allDevices));
}

//create table headers
function tableHeader(){
  for(var i =0;i <headers.length;i++){
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = headers[i];
    th.style.padding = '10px';
  }
}
tableHeader();


function randomPrice(){
  price = Math.ceil(Math.random()*(750 - 350 +1)+350);
  console.log(price);
}
randomPrice();

function totalPrice(){
  for(var i =0 ; i<allDevices.length; i++){
    totals[i] = totals[i] + price;
  }
  console.log(totals);
}
totalPrice();


//Get items from local storage

if(localStorage.getItem('Devices')){
  var getData = JSON.parse(localStorage.getItem('Devices'));
  for(var i = 0 ; i<getData.length; i++){
    var object = new Devices(getData[i].deviceName, getData[i].quantity,getData[i].category);
    object.addRow();
  }
}

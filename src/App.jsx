/* eslint-disable no-unused-vars */
/* eslint-disable no-array-constructor */
import React from 'react';
import { MDBInput,MDBBtn } from 'mdbreact';
import './index.css';
var selectedRow = null;
class App extends React.Component{
 
  handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    this.onFormSubmit();
  } 
  onFormSubmit = () => {
        var formData = this.readFormData();
        var selectedRow = null;
        if (selectedRow == null){
            this.insertNewRecord(formData);
        }
        else{
            this.updateRecord(formData);
        }
        this.resetForm();
}
  radiobutton = () =>{
    var ele = document.getElementsByName('type');
    var val;
    for(var i=0;i<ele.length;i++)
    {
        if(ele[i].checked)
            val=ele[i].value;
    }
    
    return val;
  }
  selbutton = () =>{
    var selected = [];
  for (var option of document.getElementById('category').options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
    
    return selected;
}
  radiobutton2 = () =>{
    var ele = document.getElementsByName('criticalaccount');
    var val;
    for(var i=0;i<ele.length;i++)
    {
        if(ele[i].checked)
            val=ele[i].value;
    }
    
    return val;
}
  checkboxbutton =()=>
  {
    
    var selected = new Array();
 
        var payment = document.getElementsByName("paymentoptions");

        var val;

        for (var i = 0; i < payment.length; i++) {
            if (payment[i].checked) {
                selected.push(payment[i].value);
            }
        }
        if(selected.length>0)
        {
            val=selected.join(",");
        }
        return val;
  }
  readFormData = () =>{
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["website"] = document.getElementById("website").value;
    formData["contactname"] = document.getElementById("contactname").value;
    formData["contactemail"] = document.getElementById("contactemail").value;
    formData["contactphone"] = document.getElementById("contactphone").value;
    formData["notes"] = document.getElementById("notes").value;
    formData["type"] = this.radiobutton();
    formData["category"] = this.selbutton();
    formData["commissionpercentage"] = document.getElementById("commissionpercentage").value;
    formData["activefrom"] = document.getElementById("activefrom").value;
    formData["criticalaccount"] = this.radiobutton2();
    formData["paymentoptions"] = this.checkboxbutton();
    return formData;
}

 insertNewRecord = (data)=> {
    
    var store = Object.entries(data);

    localStorage.setItem("merchantform",JSON.stringify(data));

    var retrievedData = JSON.parse(localStorage.getItem("merchantform"));
    
    var table = document.getElementById("merchantform").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = retrievedData.name;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = retrievedData.email;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = retrievedData.phone;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = retrievedData.website;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = retrievedData.contactname;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = retrievedData.contactphone;
    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = retrievedData.contactemail;
    var cell8 = newRow.insertCell(7);
    cell8.innerHTML = retrievedData.notes;
    var cell9 = newRow.insertCell(8);
    cell9.innerHTML = retrievedData.type;
    var cell10 = newRow.insertCell(9);
    cell10.innerHTML = retrievedData.category;
    var cell11 = newRow.insertCell(10);
    cell11.innerHTML = retrievedData.commissionpercentage;
    var cell12 = newRow.insertCell(11);
    cell12.innerHTML = retrievedData.activefrom;
    var cell13 = newRow.insertCell(12);
    cell13.innerHTML = retrievedData.criticalaccount;
    var cell14 = newRow.insertCell(13);
    cell14.innerHTML = retrievedData.paymentoptions;
    var cell15 =newRow.insertCell(14);
    cell15.innerHTML = `<a onClick = {()=>{onEdit(this)}}>Edit</a>
                          <a onClick = {()=>{onDelete(this)}}>Delete</a>`;
}

 resetForm = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("website").value = "";
    document.getElementById("contactname").value = "";
    document.getElementById("contactphone").value = "";
    document.getElementById("contactemail").value = "";
    document.getElementById("notes").value = "";
    document.getElementsByName("type").value = "";
    document.getElementsByName("category").value = "";
    document.getElementById("commissionpercentage").value = "";
    document.getElementById("activefrom").value = "";
    document.getElementsByName("criticalaccount").value = "";
    document.getElementsByName("paymentoptions").value = "";
    selectedRow = null;
}

   onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("website").value = selectedRow.cells[3].innerHTML;
    document.getElementById("contactname").value = selectedRow.cells[4].innerHTML;
    document.getElementById("contactphone").value = selectedRow.cells[5].innerHTML;
    document.getElementById("contactemail").value = selectedRow.cells[6].innerHTML;
    document.getElementById("notes").value = selectedRow.cells[7].innerHTML;
    document.getElementsByName("type").value = selectedRow.cells[8].innerHTML;
    document.getElementsByName("category").value = selectedRow.cells[9].innerHTML;
    document.getElementById("commissionpercentage").value = selectedRow.cells[10].innerHTML;
    document.getElementById("activefrom").value = selectedRow.cells[11].innerHTML;
    document.getElementsByName("criticalaccount").value = selectedRow.cells[12].innerHTML;
    document.getElementsByName("paymentoptions").value = selectedRow.cells[13].innerHTML;
}
 updateRecord = (formData) =>{
  
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.phone;
    selectedRow.cells[3].innerHTML = formData.website;
    selectedRow.cells[4].innerHTML = formData.contactname;
    selectedRow.cells[5].innerHTML = formData.contactphone;
    selectedRow.cells[6].innerHTML = formData.contactemail;
    selectedRow.cells[7].innerHTML = formData.notes;
    selectedRow.cells[8].innerHTML = formData.type;
    selectedRow.cells[9].innerHTML = formData.category;
    selectedRow.cells[10].innerHTML = formData.commissionpercentage;
    selectedRow.cells[11].innerHTML = formData.activefrom;
    selectedRow.cells[12].innerHTML = formData.criticalaccount;
    selectedRow.cells[13].innerHTML = formData.paymentoptions;
}

 onDelete(td){
    if (this.confirm('Are you sure to delete this record ?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("merchantform").deleteRow(row.rowIndex);
        this.resetForm();
    }
}
  render(){
    return(
      <form>
                  <MDBInput label="Name" icon ="user" input type="text" id="name" name="name" placeholder="Your name" required/>
              
                  <MDBInput label="Email" icon = "envelope" input type="text" id="email" name="email" placeholder="Your Email" required/>
                
                  <MDBInput label="Phone" icon = "mobile" input type="text" id="phone" name="phone" placeholder="Your Phone no" max="10" required/>
                  
                  <MDBInput label="Website" icon = "globe" input type="text" id="website" name="website" placeholder="Your website" required/>
    
                  <MDBInput label="ContactName" icon = "user" input type="text" id="contactname" name="contactname" placeholder="Your contactname" required/>
    
                  <MDBInput label="ContactPhone" icon = "mobile" input type="text" id="contactphone" name="contactphone" placeholder="Your contactphone" max="10" required/>
    
                  <MDBInput label="ContactEmail" icon="envelope" input type="text" id="contactemail" name="contactemail" placeholder="Your contactemail" required/>
    
                  <MDBInput type="textarea" label ="Notes" icon="book" id="notes" name="notes" placeholder="Your Notes" required/>
    
                  <label for="type">Type</label><br/>
                  <input type="radio" id="type" name="type" value="smallbusiness"/>
                  <label for="smallbusiness">Small Business</label><br/>
                  <input type="radio" id="type" name="type" value="enterprise"/>
                  <label for="enterprise">Enterprise</label><br/>
                  <input type="radio" id="type" name="type" value="entrepreneur"/>
                  <label for="entrepreneur">Entrepreneur</label><br/>
    
    
                  <label for="category">Category</label><br></br>
                  <select id="category" name="category" multiple>
                    <option value="clothes">Clothes</option>
                    <option value="toys" >Toys</option>
                    <option value="groceries">Groceries</option>
                    <option value="electronics">Electronics</option>
                    <option value="digital">Digital</option>
                  </select><br></br>
                
                  <MDBInput label ="CommissionPercentage" icon="percentage" input type="number" id="commissionpercentage" name="commissionpercentage" placeholder="Your CommissionPercentage"  required/>
                  
                  <MDBInput icon="date" input type="date" id="activefrom" name="activefrom" required/><br/>
    
                  <label for="criticalaccount">Critical Account</label><br/>
                  <input type="radio" id="criticalaccount" name="criticalaccount" value="yes"/>
                  <label for="yes">Yes</label><br/>
                  <input type="radio" id="criticalaccount" name="criticalaccount" value="no"/>
                  <label for="no" >No</label><br/>
    
                  <label for="paymentoptions">Payment Options</label><br/>
                  <input type="checkbox" id="paymentoptions" name="paymentoptions" value="COD"/>
                  <label for="COD">Cash on Delivery</label><br/>
                  <input type="checkbox" id="paymentoptions" name="paymentoptions" value="UPI"/>
                  <label for="UPI">UPI</label><br/>
                  <input type="checkbox" id="paymentoptions" name="paymentoptions" value="CardPayment"/> 
                  <label for="cardpayment">Card payment</label><br/>
    
                  <button type="simpleQuery" onClick = {(e)=>{this.handleSubmit(e)}}>Submit</button><br></br>
        </form>
    );
  }
}
export default App;
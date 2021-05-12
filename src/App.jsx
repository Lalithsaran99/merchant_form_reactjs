import React, { useState, useEffect } from "react";

function App() {
  const [name,setName] =useState("");
  const [email,setEmail] =useState("");
  const [phone,setPhone] =useState("");
  const [website,setWebsite] =useState("");
  const [contactname,setContactname] =useState("");
  const [contactphone,setContactphone] =useState("");
  const [contactemail,setContactemail] =useState("");
  const [notes,setNotes] =useState("");
  const [type,setType] =useState("");
  const [category,setCategory] =useState("");
  const [commissionpercentage,setCommissionpercentage] =useState("");
  const [activefrom,setActivefrom] =useState(0);
  //const [logo,setLogo] =useState("");
  const [criticalaccount,setCriticalaccount] =useState("");
  const [paymentoptions,setPaymentoptions] =useState("");
  const [Items, setItems] = useState([]);

  const onNameChange = (event) =>{
      setName(event.target.value);
  };
  const onEmailChange = (event) =>{
    setEmail(event.target.value);
};
  const onPhoneChange = (event) =>{
    setPhone(event.target.value);
  };
  const onWebsiteChange = (event) =>{
    setWebsite(event.target.value);
  };
  const onContactnameChange = (event) =>{
    setContactname(event.target.value);
  };
  const onContactphoneChange = (event) =>{
    setContactphone(event.target.value);
  };
  const onContactemailChange = (event) =>{
    setContactemail(event.target.value);
  };
  const onNotesChange = (event) =>{
    setNotes(event.target.value);
  };
  const onTypeChange = (event) =>{
    setType(event.target.value);
  };
  const onCategoryChange = (event) =>{
    var options = event.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
              if (options[i].selected) {
                value.push(options[i].value);
              }
            }
    setCategory(value);
  };
  const onCommissionpercentageChange = (event) =>{
    setCommissionpercentage(event.target.value);
  };
  const onActivefromChange = (event) =>{
    setActivefrom(event.target.value);
  };
  /*const onLogoChange = async (event) =>{
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setLogo(base64);
};*/
  const onCriticalaccountChange = (event) =>{
    setCriticalaccount(event.target.value);
  };
  const onPaymentoptionsChange = (event) =>{
    let selected;
 
        let payment = event.target.value;


        for (let i = 0; i < payment.length; i++) {
            if (payment[i].checked) {
                selected.push(payment[i].value);
                //val=selected.join(",");
            }
        }
        setPaymentoptions(selected);
  };
  useEffect(() => {
    const data = localStorage.getItem('data');
    if(data)
    setItems(JSON.parse(data))
  },[])

  useEffect(() => {
    localStorage.setItem('data',JSON.stringify(Items));
  })

  const listofItems = () => {
      if(name!==''&&email!==''&&phone!==''&&website!==''&&contactname!==''&&contactphone!==''&&contactemail!==''&&notes!==''&&type!==''&&category!==''&&commissionpercentage!==''&&activefrom!==''/*&&logo!==''*/&&criticalaccount!==''&&paymentoptions!==''){
        const data = {'name': name, 
                      'email': email, 
                      'phone': phone,
                      'website': website, 
                      'contactname': contactname, 
                      'contactphone': contactphone, 
                      'contactemail': contactemail, 
                      'notes': notes, 
                      'type': type, 
                      'category': category, 
                      'commissionpercentage': commissionpercentage, 
                      'activefrom': activefrom, 
                      //'logo': logo, 
                      'criticalaccount': criticalaccount, 
                      'paymentoptions':  paymentoptions,
                    };
      setItems((oldItems) => {
          return [...oldItems, data ];
      });
      
  }else
      setName("");
      setEmail("");
      setPhone("");
      setWebsite("");
      setContactname("");
      setContactphone("");
      setContactemail("");
      setType("");
      setCategory("");
      setCommissionpercentage("");
      setActivefrom("");
      //setLogo('');
      setCriticalaccount('');
      setPaymentoptions("");
  };

  /*const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };*/
  const deleteItems =() =>{

    localStorage.clear();
  }

return(
  <>
     <div className = "main_div">
         <div className = "center_div">
             <br/>
             <h1>New Business</h1>
             <br/>
             <input type ="text" placeholder ="Name"
              value ={name}
             onChange= { onNameChange } />
             <input type ="text" placeholder ="Email"
              value ={email}
             onChange= { onEmailChange } />
             <input type="text" placeholder ="Phone"
              value ={phone}
             onChange= { onPhoneChange } />
             <input type="text" placeholder ="Website"
              value ={website}
             onChange= { onWebsiteChange } />
             <input type="text" placeholder ="ContactName"
              value ={contactname}
             onChange= { onContactnameChange } />
             <input type="text" placeholder ="ContactPhone"
              value ={contactphone}
             onChange= { onContactphoneChange } />
             <input type="text" placeholder ="ContactEmail"
              value ={contactemail}
             onChange= { onContactemailChange } />
             <textarea placeholder="Notes" 
              value={notes}
              onChange = {onNotesChange}></textarea>
              <label for="type">Type</label><br></br>
                  <input type="radio" id="type" name="type" value="smallbusiness" onChange = {onTypeChange}/>
                  <label for="smallbusiness">Small Business</label><br></br>
                  <input type="radio" id="type" name="type" value="enterprise" onChange = {onTypeChange}/>
                  <label for="enterprise">Enterprise</label><br></br>
                  <input type="radio" id="type" name="type" value="entrepreneur" onChange = {onTypeChange}/>
                  <label for="entrepreneur">Entrepreneur</label><br></br>
              
              <label for="category">Category</label>
                  <select id="category" name="category" multiple={true} onChange={onCategoryChange}>
                    <option value="clothes">Clothes</option>
                    <option value="toys" >Toys</option>
                    <option value="groceries">Groceries</option>
                    <option value="electronics">Electronics</option>
                    <option value="digital">Digital</option>
                  </select>

            <input type="text" placeholder ="CommissionPercentage"
              value ={commissionpercentage}
             onChange= { onCommissionpercentageChange } />

            <input type="date" placeholder ="ActiveFrom"
              value ={activefrom}
             onChange= { onActivefromChange } />


              <label for="criticalaccount">Critical Account</label><br></br>
                  <input type="radio" id="criticalaccount" name="criticalaccount" value="yes" onChange = {onCriticalaccountChange}/>
                  <label for="yes">Yes</label><br></br>
                  <input type="radio" id="criticalaccount" name="criticalaccount" value="no" onChange = {onCriticalaccountChange}/>
                  <label for="no" >No</label><br></br>
    
                  <label for="paymentoptions">Payment Options</label><br></br>
                  <input type="checkbox" id="paymentoptions" name="paymentoptions" value="COD" onChange = {onPaymentoptionsChange}/>
                  <label for="COD">Cash on Delivery</label><br></br>
                  <input type="checkbox" id="paymentoptions" name="paymentoptions" value="UPI" onChange = {onPaymentoptionsChange}/>
                  <label for="UPI">UPI</label><br></br>
                  <input type="checkbox" id="paymentoptions" name="paymentoptions" value="CardPayment" onChange = {onPaymentoptionsChange}/> 
                  <label for="cardpayment">Card payment</label><br></br>

             <button className="newbtn" onClick = {listofItems} >
                 Add Product
             </button>
             <button className="newbtn-1" aria-hidden="true" onClick={() => {
                        deleteItems();
                    }} >
                    Remove
                    </button>
             </div>
             <table className="table table-hover table-responsive-md" border="2">
                <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">ContactName</th>
      <th scope="col">ContactPhone</th>
      <th scope="col">ContactEmail</th>
      <th scope="col">Notes</th>
      <th scope="col">Type</th>
      <th scope="col">Category</th>
      <th scope="col">CommissionPercentage</th>
      <th scope="col">Activefrom</th>
      <th scope="col">CriticalAccount</th>
      <th scope="col">PaymentOptions</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

                 { Items.map( (itemVal,index) =>{
                   return  <tr key={index}>           
                    <td>{itemVal.name}</td>
                    <td>{itemVal.email}</td>
                    <td>{itemVal.phone}</td>
                    <td>{itemVal.website}</td>
                    <td>{itemVal.contactname}</td>
                    <td>{itemVal.contactphone}</td>
                    <td>{itemVal.contactemail}</td>
                    <td>{itemVal.notes}</td>
                    <td>{itemVal.type}</td>
                    <td>{itemVal.category}</td>
                    <td>{itemVal.commissionpercentage}</td>
                    <td>{itemVal.activefrom}</td>
                    <td>{itemVal.criticalaccount}</td>
                    <td>{itemVal.paymentoptions}</td>
                    </tr>
                 } ) }
             
  </tbody>
</table>
            
     </div>
  </>
);
}

export default App;
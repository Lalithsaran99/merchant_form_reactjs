import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Radio, Table, Tag} from 'antd';

function App() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

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
    let options = event.target.options;
            let value = [];
            for (let i = 0, l = options.length; i < l; i++) {
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
    setPaymentoptions(event.target.value);
  };
  useEffect(() => {
    const data = localStorage.getItem('data');
    if(data)
    setItems(JSON.parse(data))
  },[])

  useEffect(() => {
    localStorage.setItem('data',JSON.stringify(Items));
  },[Items])

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
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
    },
    {
        title: 'ContactName',
        dataIndex: 'contactname',
        key: 'contactname',
    },
    {
        title: 'ContactPhone',
        dataIndex: 'contactphone',
        key: 'contactphone',
    },
    {
        title: 'ContactEmail',
        dataIndex: 'contactemail',
        key: 'contactemail',
    },
    {
        title: 'Notes',
        dataIndex: 'notes',
        key: 'notes',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Commissionpercentage',
      dataIndex: 'commissionpercentage',
      key: 'commisssionpercentage',
    },
    {
      title: 'ActiveFrom',
      dataIndex: 'activefrom',
      key: 'activefrom',
    },
    {
      title: 'Criticalaccount',
      dataIndex: 'criticalaccount',
      key: 'criticalaccount',
    },
    {
      title: 'PaymentOptions',
      dataIndex: 'paymentoptions',
      key: 'paymentoptions',
    }
  ];
return(
  <>
             <Form {...layout.labelCol} name = "merchantform">

             <Form.Item
                label="Name"
                rules={
                  [
                    {
                      required: true,
                    },
                  ]
                }
                >
                </Form.Item>

             <Input 
             type ="text" 
             placeholder ="Name"
             value ={name}
             onChange= { onNameChange } />

             <Form.Item
                label="Email"
                rules={
                  [
                    {
                      required: true,
                    },
                  ]
                }
                >
                </Form.Item>

             <Input 
             type ="text" 
             placeholder ="Email"
             value ={email}
             onChange= { onEmailChange } />

             <Form.Item
                label="Phone"
                rules={
                  [
                    {
                      required: true,
                      min:0,
                      max:10,
                    },
                  ]
                }
                >
                </Form.Item>

             <Input 
             type="text" 
             placeholder ="Phone"
             value ={phone}
             onChange= { onPhoneChange } />

             <Form.Item
                label="Website"
                rules={
                  [
                    {
                      required: true,
                    },
                  ]
                }
                >
                </Form.Item>

             <Input 
             type="text" 
             placeholder ="Website"
             value ={website}
             onChange= { onWebsiteChange } />

             <Form.Item
                label="ContactName"
                rules={
                  [
                    {
                      required: true,
                    },
                  ]
                }
                >
                </Form.Item>

             <Input 
             type="text" 
             placeholder ="ContactName"
             value ={contactname}
             onChange= { onContactnameChange } />

             <Form.Item
                label="ContactPhone"
                rules={
                  [
                    {
                      required: true,
                      min:0,
                      max:10,
                    },
                  ]
                }
                >
                </Form.Item>

             <Input 
              type="text" 
              placeholder ="ContactPhone"
              value ={contactphone}
              onChange= { onContactphoneChange } />

              <Form.Item
                label="ContactEmail"
                rules={
                  [
                    {
                      required: true,
                    },
                  ]
                }
                >
                </Form.Item>

             <Input 
              type="text" 
              placeholder ="ContactEmail"
              value ={contactemail}
              onChange= { onContactemailChange } />

            <Form.Item
                label="Notes"
                rules={
                  [
                    {
                      required: true,
                    },
                  ]
                }
                >
                </Form.Item>

             <Input.TextArea 
              placeholder="Notes" 
              value={notes}
              onChange = {onNotesChange}/>

             <Form.Item
                label="Type"
                rules={
                  [
                    {
                      required: true,
                    },
                  ]
                }
                >
                </Form.Item>

                  <Radio.Group onChange={onTypeChange} value={type}>
                    <Radio value="SmallBusiness">SmallBusiness</Radio>
                    <Radio value="Enterprise">Enterprise</Radio>
                    <Radio value="Entrepreneur">Entrepreneur</Radio>
                  </Radio.Group>

                  <Form.Item
                    label="Category"
                    rules={
                      [
                        {
                          required: true,
                        },
                      ]
                    }
                    >
                </Form.Item>

                <label for="category">Category</label>
                  <select id="category" name="category" multiple={true} onChange={onCategoryChange}>
                    <option value="clothes">Clothes</option>
                    <option value="toys" >Toys</option>
                    <option value="groceries">Groceries</option>
                    <option value="electronics">Electronics</option>
                    <option value="digital">Digital</option>
                  </select>

                <Form.Item
                    label="CommissionPercentage"
                    rules={
                      [
                        {
                          required: true,
                        },
                      ]
                    }
                    >
            </Form.Item>
            <Input
             type="text" 
             placeholder ="CommissionPercentage"
             value ={commissionpercentage}
             onChange= { onCommissionpercentageChange } />

            <input type="date" placeholder ="ActiveFrom"
              value ={activefrom}
             onChange= { onActivefromChange } />

            <Form.Item
                label="CriticalAccount"
                rules={
                  [
                    {
                      required: true,
                    },
                  ]
                }
                >
                </Form.Item>

                  <Radio.Group onChange={onCriticalaccountChange} value={criticalaccount}>
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </Radio.Group>
    
                  <Form.Item
                label="PaymentOptions"
                rules={
                  [
                    {
                      required: true,
                    },
                  ]
                }
                >
                </Form.Item>

                <Radio.Group onChange={onPaymentoptionsChange} value={paymentoptions}>
                    <Radio value="COD">COD</Radio>
                    <Radio value="UPI">UPI</Radio>
                    <Radio value="Cardpayment">Cardpayment</Radio>
                  </Radio.Group>
                
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
             <Button type="primary" onClick = {listofItems} >
                 Submit
             </Button>
             </Form.Item>
             <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
             <Button type="secondary" aria-hidden="true" onClick={deleteItems} >
                    Remove
                    </Button>
                    </Form.Item>
            </Form>
            <Table columns={columns} dataSource={Items} scroll={{ x: 'max-content' }}></Table>
</>
);
}

export default App;
import React, { useState } from 'react';
import './SubscribeForm.css';
const SubscribeForm = ({ onSave, onDownload,bookName ,bookId }) => {
  const [formData, setFormData] = useState({
    bookid: bookId,
    id:'',
    name: '',
    supervisor: '',
    subscriptionid: '',
    bookName: bookName,
   
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Save the subscription data to local storage
    const generateRandomSubscriptionId = () => {
      return (Math.floor(1000 + Math.random() * 9000)).toString();
    };

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    const subscriptionData = {
      id: formData.id,
      name: formData.name,
      supervisor: formData.supervisor,
      Date:formattedDate,
      bookId:formData.bookid,
      bookName:formData.bookName,
      subscriptionid:generateRandomSubscriptionId(),
    };

    // Check if there is existing subscription data in local storage
    const existingData = JSON.parse(localStorage.getItem('subscriptions')) || [];

    // Update the total subscription count
    const newCount = existingData.length + 1;

    let isUnique = false;
  let newSubscriptionId;
  while (!isUnique) {
    newSubscriptionId = generateRandomSubscriptionId();
    isUnique = !existingData.some((data) => data.subscriptionid === newSubscriptionId);
  }

  subscriptionData.subscriptionid = newSubscriptionId; 



    
    existingData.push(subscriptionData);
    localStorage.setItem('subscriptions', JSON.stringify(existingData));

    // Update the total subscription count in local storage
    localStorage.setItem('subscribeCount', newCount);

    // Clear the form fields
    setFormData({
      ...formData,
      id: '',
      bookid:'',
      name: '',
      supervisor: '',
      Date:'',
       
      
    });

    // Call the provided onSave function with the subscription data
    onSave(formData);
  };

  return (
    <div className="form-container"> {/* Add a container div */}
      <form className="subscribe-form">
        <div className="form-group">
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label>Supervisor:</label>
          <input type="text" name="supervisor" value={formData.supervisor} onChange={handleInputChange} />
        </div>

        

        <div className="form-actions">
          <button className='subsbutton' type="button" onClick={handleSave}>
            Save & Download
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;

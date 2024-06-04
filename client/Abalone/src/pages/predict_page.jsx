import React from 'react';
import { useState } from 'react';
import shellImage from '../assets/abalone_shells_img2.jpg'
import Popup from '../components/popup'
import { usePopup , PopupProvider } from '../context/popupContext'
// import axios from 'axios';


const Predict_page = () => {

    // importing parameters from contextAPI :
    const {isPopupVisible, showPopup } = usePopup();

    // object of features given by users :
    const [formData, setFormData] = useState({
      gender: '',
      shell_weight: '',
      viscera_weight: '',
      shucked_weight: '',
      whole_weight: '',
      diameter: '',
      height: '',
      length: ''
    });
  
    // function to update featureObject :
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }

    //function to send the features :
    const onSubmitFunc = (event)=>{
      event.preventDefault();

      // const postFormData = async()=>{
      //   try {
      //     const response = await axios.post('http://localhost:5000/predict', formData);
      //     setPrediction(response.data.prediction);
      //   } catch (error) {
      //     console.error('Error making prediction:', error);
      //   }
      // }

      // postFormData()

      showPopup()
    };

  return (
    
    <div className='w-full h-[calc(100vh-96px)] bg-[#1a1d23ef] text-[#FFFBE4]'>
      <form onSubmit={onSubmitFunc}>
        <div className='flex w-[100vw] h-[calc(100vh-96px)]'>

          <div className='flex-2 flex justify-center items-center h-[calc(100vh-96px)] p-20'>
            <img src={shellImage} className='h-[60%] rounded-3xl '/>
          </div>

          {/* left half : */}
          <div className='flex flex-col py-20 pl-20 pr-20 gap-4 h-[80%] flex-1'>
            
          <div className="flex-1 mb-4">
            <label htmlFor="contact-time" className="text-3xl mb-3 block font-medium">Gender</label>
            <select name="gender" onChange={handleChange} value={formData.gender} id="contact-time" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm">
              <option value="" disabled selected>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="infant">Infant</option>
            </select>
          </div>

            <div className="flex-1 mb-4">
              <label htmlFor="name" className="text-3xl mb-3 block font-medium ">Length</label>
              <input name="length" onChange={handleChange} value={formData.length} type="number" inputmode="numeric" id="name" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="Enter your name" />
            </div>

            <div className="flex-1 mb-4">
              <label htmlFor="email" className="text-3xl mb-3 block font-medium ">Height</label>
              <input name="height" onChange={handleChange} value={formData.height} type="number" inputmode="numeric" id="email" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="Enter your email" />
            </div>

            <div className="flex-1 mb-4">
              <label htmlFor="phone" className="text-3xl mb-3 block font-medium">Diameter</label>
              <input name="diameter" onChange={handleChange} value={formData.diameter} type="number" inputmode="numeric" id="phone" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="Enter phone number" />
            </div>

          </div>

          {/* right half : */}
          <div className="flex flex-col py-20 pr-20 gap-4 h-[80%] flex-1">

            <div className="flex-1 mb-4">
              <label htmlFor="name" className="text-3xl mb-3 block font-medium ">Whole Weight</label>
              <input name="whole_weight" onChange={handleChange} value={formData.whole_weight} type="number" inputmode="numeric" id="name" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="Enter your name" />
            </div>

            <div className="flex-1 mb-4">
              <label htmlFor="email" className="text-3xl mb-3 block font-medium ">Shucked Weight</label>
              <input name="shucked_weight" onChange={handleChange} value={formData.shucked_weight} type="number" inputmode="numeric" id="email" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="Enter your email" />
            </div>

            <div className="flex-1 mb-4">
              <label htmlFor="phone" className="text-3xl mb-3 block font-medium">Viscera Weight</label>
              <input name="viscera_weight" onChange={handleChange} value={formData.viscera_weight} type="number" inputmode="numeric" id="phone" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="Enter phone number" />
            </div>

            <div className="flex-1 mb-4">
              <label htmlFor="contact-time" className="text-3xl mb-3 block font-medium">Shell Weight</label>
              <input name="shell_weight" onChange={handleChange} value={formData.shell_weight} type="number" inputmode="numeric" id="contact-time" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="Enter best contact time" />
            </div>              

          </div>

          <div className="absolute w-[calc(100vw-500px)] ml-[500px] text-center bottom-[50px]">
            <button className='bg-fbab7e bg-gradient-to-br from-fbab7e to-f7ce68 py-4 px-36 rounded-full text-3xl font-semibold text-black transition-all duration-300 hover:bg-gradient-to-r hover:scale-[100.1%] hover:tracking-wider'>
              Predict
            </button>  
          </div>
        </div>
        <div className='absolute top-[96px] right-0 z-10'>
        { isPopupVisible && <Popup/> }
      </div>
      </form>
    </div>
  );
}

const Contexted_Predict_page = () => (
  <PopupProvider>
    <Predict_page/>
  </PopupProvider>
);


export default Contexted_Predict_page;

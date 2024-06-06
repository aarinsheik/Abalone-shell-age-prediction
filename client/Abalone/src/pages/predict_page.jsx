import React from 'react';
import { useState } from 'react';
import shellImage from '../assets/abalone_shells_img2.jpg'
import Popup from '../components/popup'
import { usePopup , PopupProvider } from '../context_and_states/popupContext'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { ageState } from '../context_and_states/predictedAgeState';


const Predict_page = () => {

    // importing parameters from contextAPI : 
    const {isPopupVisible, showPopup } = usePopup();

    // object of features given by users :
    const [featureData, setFeatureData] = useState({
      gender: '',
      shell_weight: '',
      viscera_weight: '',
      shucked_weight: '',
      whole_weight: '',
      diameter: '',
      height: '',
      length: ''
    });

    //the predicted age is set to global state variable using 'Recoil' 
    const [AtomAge, setAtomAge] = useRecoilState(ageState);
  
    // function to update featureObject :
    const handleChange = (e) => {
      setFeatureData({
        ...featureData,
        [e.target.name]: e.target.value
      });
    }

    //function to send the features :
    const onSubmitFunc = (event)=>{
      event.preventDefault();

      //using axios POST request is sent to server with the features that user entered
      axios.post('http://127.0.0.1:5000/sendFeatures', featureData)
      .then((response) => {
        const pred_age = response.data.age
        setAtomAge(pred_age);
      })
      .catch((error) => {
        console.error('Error in Prediction : ',error);
      });

      //calling the contextApi function to show the popup
      showPopup()
    };

  return (
    
    <div className='w-full h-[calc(100vh-96px)] bg-[#1a1d23ef] text-[#FFFBE4]'>
      <div className='w-full h-full flex'>
        
        <div className='w-4/12'>
          <div className='flex justify-center items-center h-full py-10 px-4'>
            <img src={shellImage} className='h-[50%] rounded-3xl '/>
          </div>
        </div>

        <form onSubmit={onSubmitFunc} className='flex-1 w-8/12 flex flex-col'>
                <div className='flex w-full h-5/6 justify-around items-start'>

                        {/* left 4 form input */}
                        <div className='flex flex-col w-1/2 h-full justify-center items-start py-10'>
                            <div className="flex-1 mb-4 w-full pr-16">
                                <label htmlFor="contact-time" className="text-3xl mb-3 block font-medium">Gender</label>
                                <select name="gender" onChange={handleChange} value={featureData.gender} id="contact-time" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm">
                                <option value="" disabled selected>Select gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="I">Infant</option>
                                </select>
                            </div>

                            <div className="flex-1 mb-4 w-full pr-16">
                            <label htmlFor="name" className="text-3xl mb-3 block font-medium ">Length</label>
                            <input name="length" onChange={handleChange} value={featureData.length} type="number" inputmode="numeric" id="name" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="In 'mm'" />
                            </div>

                            <div className="flex-1 mb-4 w-full pr-16">
                            <label htmlFor="email" className="text-3xl mb-3 block font-medium ">Height</label>
                            <input name="height" onChange={handleChange} value={featureData.height} type="number" inputmode="numeric" id="email" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="In 'mm'" />
                            </div>

                            <div className="flex-1 mb-4 w-full pr-16">
                            <label htmlFor="phone" className="text-3xl mb-3 block font-medium">Diameter</label>
                            <input name="diameter" onChange={handleChange} value={featureData.diameter} type="number" inputmode="numeric" id="phone" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="In 'mm'" />
                            </div>

                        </div>

                        {/* right 4 form input */}
                        <div className="flex flex-col w-1/2 h-full justify-center items-start py-10">

                            <div className="flex-1 mb-4 w-full pr-16">
                            <label htmlFor="name" className="text-3xl mb-3 block font-medium ">Whole Weight</label>
                            <input name="whole_weight" onChange={handleChange} value={featureData.whole_weight} type="number" inputmode="numeric" id="name" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="In 'mg'" />
                            </div>

                            <div className="flex-1 mb-4 w-full pr-16">
                            <label htmlFor="email" className="text-3xl mb-3 block font-medium ">Shucked Weight</label>
                            <input name="shucked_weight" onChange={handleChange} value={featureData.shucked_weight} type="number" inputmode="numeric" id="email" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="In 'mg'" />
                            </div>

                            <div className="flex-1 mb-4 w-full pr-16">
                            <label htmlFor="phone" className="text-3xl mb-3 block font-medium">Viscera Weight</label>
                            <input name="viscera_weight" onChange={handleChange} value={featureData.viscera_weight} type="number" inputmode="numeric" id="phone" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="In 'mg'" />
                            </div>

                            <div className="flex-1 mb-4 w-full pr-16">
                            <label htmlFor="contact-time" className="text-3xl mb-3 block font-medium">Shell Weight</label>
                            <input name="shell_weight" onChange={handleChange} value={featureData.shell_weight} type="number" inputmode="numeric" id="contact-time" className="w-full p-2.5 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-custom-sm" placeholder="In 'mg'" />
                            </div>              

                        </div>

                </div>

                
                <div className="flex-1 w-full h-1/6 text-center">
                    <button className='bg-fbab7e bg-gradient-to-br from-fbab7e to-f7ce68 py-4 px-36 rounded-full text-3xl font-semibold text-black transition-all duration-300 hover:bg-gradient-to-r hover:scale-[100.1%] hover:tracking-wider'>
                    Predict
                    </button>  
                </div>
            
        </form>

        <div className='absolute top-[96px] right-0 z-10'>
            { isPopupVisible && <Popup/> }
        </div>

      </div>
    </div>
  );
}

const Contexted_Predict_page = () => (
  <PopupProvider>
    <Predict_page/>
  </PopupProvider>
);


export default Contexted_Predict_page;

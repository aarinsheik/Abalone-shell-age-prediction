import React from 'react'
import { usePopup} from '../context_and_states/popupContext'
import { useRecoilValue } from 'recoil';
import { ageState } from '../context_and_states/predictedAgeState';

const popup = () => {

    const {hidePopup} = usePopup()
    const Predicted_age = useRecoilValue(ageState)  

    return (
    <div className='inset-0 h-[calc(100vh-96px)] w-screen bg-[#000000ca] flex justify-center items-center z-20 visible'>
        <div className='bg-[#e3c995] flex justify-center items-center rounded-[22px] z-30'  >
            <div className='border-black border-2 px-20 py-10 m-5 rounded-2xl flex flex-col justify-center items-center'>
                
                { Predicted_age!== null ?
                    <div className='text-center'>
                        <h1 className='text-[30px] font-semibold text-black'>The Predicted Age :</h1>
                        <h3 className='text-[44px] font-semibold mb-8 text-black'> { parseFloat(Predicted_age).toFixed(2) } years</h3>
                    </div> :
                    <div className='text-center'>
                        <h1 className='text-[30px] font-semibold text-black'>Error In Prediction.<br></br>Try again</h1>
                    </div>
                }
                
                <button onClick={()=>(hidePopup())}  className='bg-custom-gradient-drkGreen py-2 px-6 text-2xl text-white bg border-2 border-black rounded-lg transition-all duration-300 hover:scale-[105%] hover:bg-custom-gradient-green '>OK</button>
            </div>
        </div>   
    </div>
    )
}


export default popup

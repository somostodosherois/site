import React from 'react';
import Accountable from '../MissionFormSteps/Accountable';
import { useState } from 'react';
import Child from '../MissionFormSteps/Child';
import Registrant from '../MissionFormSteps/Registrant';
import Documentation from '../MissionFormSteps/Documentation';
import FinalStep from '../MissionFormSteps/FinalStep';

const MissionForm = () => {

  const FormTitles = ['Dados do Cadastrante', 'Dados da Criança', 'Dados do responsável pela criança', 'Documentação'];
  const [step, setStep] = useState(0);
  const [showFinalStep, setShowFinalStep] = useState(false);

  const stepDisplay = () => {

    if (step === 0) {

      return <Registrant/>

    }else if (step === 1){

      return <Child/>

    }else if (step === 2){

      return <Accountable/>

    }else if (step === 3){
      return <Documentation/>
    
    }

  }

  return(

    <div className="mx-auto bg-white pb-2 max-w-32">

     
      <div className="text-center text-gray-800">   
        <h2 className="font-bold text-xl">{FormTitles[step]}</h2>
      </div>

      <div className="mx-auto rounded p-4 shadow-sm">
        { showFinalStep ? <FinalStep/> : stepDisplay()}
      </div>

      {!showFinalStep &&
        <div className="text-center mt-5">
          <button className="rounded text-white py-2 px-2 mr-2 bg-red-300" 
            disabled={step < 1}
            onClick={()=> {setStep((currstep) => currstep - 1);}}>
            Voltar
          </button>
          
          <button className="rounded text-white py-2 px-2 mr-2 bg-red-500"

            onClick={()=> { 
              if (step === FormTitles.length - 1){
                setShowFinalStep(true);
              }else{
                setStep((currstep) => currstep + 1);
              }
            }}>

            {step === FormTitles.length - 1 ? "Enviar" : "Próximo"}
          </button>
        </div>
      }
    </div>
  )
} 
export default MissionForm;
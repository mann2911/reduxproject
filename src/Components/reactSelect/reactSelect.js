import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
 

const reactSelect=(props)=>{
 
    const animatedComponents=makeAnimated();
    const customStyles = {
        menu: (provided, state) => ({
          ...provided,
          width: state.selectProps.width,
          borderBottom: '1px dotted pink',
          color: state.selectProps.menuColor,
          padding: 20,
        }),
      
        control: (_, { selectProps: { width }}) => ({
          width: width
        }),
      
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }
    return(
           <div>
         
                <Select 
                options={props.options}
                components={animatedComponents}
                defaultValue={props.options[0]}
             />
            </div>
    );

}
   


export default reactSelect;
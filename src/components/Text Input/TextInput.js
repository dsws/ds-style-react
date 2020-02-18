import React from 'react';
import Input from '../Input/Input';
import Label from '../label/Label';
import Hint from '../Hint/Hint';

export default function TextInput({ data: { id, labelText, labelType, labelFlag, inputChar, hintText, hintId }, onChange, onBlur }) {

  
  return (<div class="ontario-form-group">
          <Label data={{ id, text: labelText, type: labelType, flag: labelFlag }} />
          {hintText && <Hint data={{hintId, hintText}}  />}
           <Input data={{char:inputChar, id: id, hintId: hintId }} onChange={e=>onChange(e)} onBlur={e=>onBlur(e)} /> 
          </div>
  );
}
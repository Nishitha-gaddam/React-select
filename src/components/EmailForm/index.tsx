import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import Select, { Options, StylesConfig, components, ActionMeta, OnChangeValue, GroupBase } from 'react-select';
import emailValidator from 'email-validator';
import { emailOptions } from '../../constants/data';
import person from '../../assets/icons/person.png';

interface EmailOption {
  value: string;
  label: string;
}

interface FilteredEmailOption {
  value: string;
  label: string;
  icon: JSX.Element;
  sublabel: string;
}



const { DropdownIndicator, ClearIndicator, Input, MultiValue, MultiValueLabel , Option} = components;


function EmailForm() {
  const [emails, setEmails] = useState<Options<EmailOption>>([]);
  const [emailInput, setEmailInput] = useState<string>('');
  const [minCharCount, setMinCharCount] = useState(3);
  const [emailError, setEmailError] = useState<string>('');

  const handleEmailInputChange = (inputValue: string) => {
    setEmailInput(inputValue);
    setEmailError('');


    const remainingChars = Math.max(0, minCharCount - inputValue.length);
    setMinCharCount(remainingChars);
  };

  const handleEmailInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (['Enter', 'Tab', ','].includes(e.key)) {
      e.preventDefault();
      const newEmail = emailInput.trim();

      // Validate the email address 
      if (newEmail && emailValidator.validate(newEmail)) {
        setEmails([...emails, { value: newEmail, label: newEmail }]);
      } else {
        setEmailError('Please enter a valid email address');
      }

      setEmailInput('');
      setMinCharCount(3);
    }
  };


  //in the email form add enter two or more characters


  //on change of the email




  const handleEmailsChange = (selectedOptions: OnChangeValue<EmailOption, true>, actionMeta: ActionMeta<EmailOption>): null | void => {
   console.log(selectedOptions,"selected options")
    setEmails(selectedOptions);
  };

  //create theme using react select where there is circular padding for the chip


  const customStyles: StylesConfig<EmailOption, true, GroupBase<EmailOption>> = {
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #E5E5E5',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid #E5E5E5',
      },
    }),
    multiValue: (provided, state) => ({
      ...provided,
      borderRadius: '20px',
      backgroundColor: '#E5E5E5',
      padding: '0px 10px',
      margin: '0px 5px',
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: '#000000',
      fontSize: '14px',
      fontWeight: 'lighter',
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: '#000000',
      '&:hover': {
        backgroundColor: '#E5E5E5',
        color: '#000000',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: '#000000',
      fontSize: '14px',
      fontWeight: 'bold',
      textAlign: 'left',
      '&:hover': {
        backgroundColor: '#E5E5E5',
        color: '#000000',
      },
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: '#000000',
      fontSize: '14px',
      fontWeight: 'lighter',
    }),
    input: (provided, state) => ({
      ...provided,

      color: '#000000',
      fontSize: '14px',

      //dont make font weight bold here
      fontWeight: 'lighter',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#000000',
      fontSize: '14px',
      fontWeight: 'bold',
    }),

    noOptionsMessage: (provided, state) => ({
      ...provided,
      //grey color
      color: '#808080', 
      fontSize: '14px',
      fontWeight: 'lighter',
      paddingLeft: '10px',
      textAlign: 'left',
    }),

  };



  const CustomDropdownIndicator = (props: any) => {
    return null; // Remove the dropdown indicator
  };

  const CustomClearIndicator = (props: any) => {
    return null; // Remove the clear indicator
  };

  //make padding circular for the chip
  const CustomMultiValue = (props: any) => {
    return (
      <MultiValue
        {...props}
        style={{
          ...props.style,
          borderRadius: '20px',
          backgroundColor: '#E5E5E5',
          padding: '0px 10px',
          margin: '0px 5px',
        }}
      />
    );
  };

  const CustomMultiValueLabel = (props: any) => {
    return (
      <MultiValueLabel
        {...props}
        style={{
          ...props.style,
          color: '#000000',
          fontSize: '14px',
          fontWeight: 'lighter',
        }}
      />
    );
  };

  const CustomOption = (props: any) => {
    const { innerProps, label, data, emailError, minCharCount } = props;
  
    if (data) {
      return (
        <Option {...props} key={data.value}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              {data.icon}
            </div>
            <div style={{ marginLeft: '10px' }}>
              <div style={{ fontSize: '16px', color: '#808080', fontWeight: '400' }}>
                {data.sublabel}
              </div>
              <div style={{ fontSize: '12px', color: '#808080', fontWeight: '400' }}>
                {data.label}
              </div>
            </div>
          </div>
        </Option>
      );
    }
  
    return (
      <Option {...props}>
        <div {...innerProps} style={{ color: minCharCount > 0 ? '#000000' : '#808080' }}>{label}</div>
        {emailError && <div className="error-message" id="error-message">{emailError}</div>}
      </Option>
    );
  };

  const filteredEmailOptions: FilteredEmailOption[] = emailOptions
  .filter((option) => emailInput.length >= 3 && option.label.includes(emailInput))
  .map((option) => ({
    value: option.sublabel,
    label: option.label,
    icon: <img src={person} alt="person" style={{ width: '30px' }} />,
    sublabel :option.sublabel
  }));

  const noOptionsMessage = () => {
    if (emailInput.length === 0) {
      return 'Please enter 3 or more characters';
    } else if (emailInput.length === 1) {
      return 'Please enter 2 or more characters';
    } else if (emailInput.length === 2) {
      return 'Please enter 1 or more characters';
    } else {
      return 'User email id not found';
    }
  };


  //remove cross and dropdown menu icons in the react select component input field 
  //only display seach list after two or more characters are entered in the input field
  return (
    <div className="select-container">
      <Select
        isMulti
        options={filteredEmailOptions}
        value={emails}
        inputValue={emailInput}

        onChange={handleEmailsChange}
        onInputChange={handleEmailInputChange}
        closeMenuOnSelect={true}
        onKeyDown={handleEmailInputKeyDown}
        placeholder="Enter email addresses..."
        styles={customStyles}
        components={{
          DropdownIndicator: CustomDropdownIndicator,
          ClearIndicator: CustomClearIndicator,
          MultiValue: CustomMultiValue,
          MultiValueLabel: CustomMultiValueLabel,
          Option: CustomOption,
        }}

        menuPlacement="bottom"
        menuPosition="fixed"
        menuPortalTarget={document.body}
        menuShouldScrollIntoView={false}

        //limit entries to 5 per row
        maxMenuHeight={5 * 40} 

        //display "please enter tow or more characters" instead of "options" and decrease the count from three to 2 as letters are entered in the input field
        // display  {emailError && <div className="error-message">{emailError}</div>} if email validation fails
        noOptionsMessage={noOptionsMessage}

        aria-errormessage={emailError ? 'error-message' : undefined}
      />


      <style>
        {`
          .select-container .select__menu-notice {
            text-align: left;
          }
          .error-message {
            color: red;
            margin-bottom: 10px;
          }
        `}
      </style>

      {/* <button type="submit">Send Email</button> */}
    </div>
  );
}

export default EmailForm;

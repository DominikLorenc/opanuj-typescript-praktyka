import React, { JSX, useState, useContext } from 'react';
import { SurveyContext } from './context';
import { SurveyProps } from './types';

type InputProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

type ChoiceProps = {
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
};

type SubmitProps = {
  children: string;
};

interface SurveyPropsComponentProps {
  (props: SurveyProps): JSX.Element;
  ShortAnswer: React.ComponentType<InputProps>;
  LongAnswer: React.ComponentType<InputProps>;
  Choice: React.ComponentType<ChoiceProps>;
  Submit: React.ComponentType<SubmitProps>;
}

const ShortAnswer = ({ name, label, placeholder, required }: InputProps) => {
  const ctx = useContext(SurveyContext);

  return (
    <>
      <label className="tabs-title" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={(e) => ctx?.updateField(name, e.currentTarget.value)}
        className="tabs-title"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

const LongAnswer = ({ name, label, placeholder, required }: InputProps) => {
  const ctx = useContext(SurveyContext);
  return (
    <>
      <label className="tabs-title" htmlFor={name}>
        {label}
      </label>
      <textarea
        onChange={(e) => ctx?.updateField(name, e.currentTarget.value)}
        className="tabs-title"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

const Choice = ({ name, label, options }: ChoiceProps) => {
  const ctx = useContext(SurveyContext);

  return (
    <>
      <label className="tabs-title" htmlFor={name}>
        {label}
      </label>
      <select
        className="tabs-title"
        id={name}
        name={name}
        onChange={(e) => ctx?.updateField(name, e.currentTarget.value)}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};

const Submit = ({ children }: SubmitProps) => (
  <button type="submit" className="tabs-title">
    {children}
  </button>
);

const Survey: SurveyPropsComponentProps = ({ children, onSubmit }) => {
  const [values, setValues] = useState<Record<string, any>>({});

  const updateField = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSubmit) {
      throw new Error('onSubmit callback is required!');
    }
    onSubmit(values);
  };

  return (
    <SurveyContext.Provider value={{ handleSubmit, values, setValues, updateField }}>
      <form onSubmit={handleSubmit}>{children}</form>
    </SurveyContext.Provider>
  );
};

Survey.ShortAnswer = ShortAnswer;
Survey.LongAnswer = LongAnswer;
Survey.Choice = Choice;
Survey.Submit = Submit;

export default Survey;

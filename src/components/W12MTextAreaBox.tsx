import TextAreaStructure from "../data/textarea-struct";

interface TextAreaBoxProps {
  textareaObject: TextAreaStructure;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  index:number;
}

const TextAreaBox: React.FC<TextAreaBoxProps> = ({
  textareaObject,
  onChange,
  index,
  
}) => {
  return (
    <div>
      <label className="form-control" htmlFor={textareaObject.id}>
        {textareaObject.title} key={index}
      </label>
      <p>
        <textarea
          className="form-control"
          data-testid={textareaObject.id}
          minLength={textareaObject.min}
          maxLength={textareaObject.max}
          onChange={onChange}
          required
        ></textarea>
      </p>
      <p
        data-testid="errormessage"
        hidden={!textareaObject.displayError}
        className="error"
      >
        {textareaObject.errMessage}
      </p>
    </div>
  );
};

export default TextAreaBox;
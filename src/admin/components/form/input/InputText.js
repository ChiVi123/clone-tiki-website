import clsx from "clsx";
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

function InputText({
    control,
    name,
    type,
    onFocus,
    onBlur,
}) {
    const { field } = useController({
        control,
        name,
        defaultValue: ""
    });

    return (<input
        className={clsx("absolute",
            "top-0",
            "left-0",
            "border-[.125rem]",
            "border-black",
            "rounded-xl",
            "w-full",
            "outline-none",
            "bg-none",
            "px-3",
            "py-2",
            "text-[1.2em]",
            "mb-10", {
            "pr-10": type !== 'number'
        })}
        id={name}
        type={type}
        onFocus={onFocus}
        {...field}
        onBlur={onBlur}
    />);
};

InputText.propTypes = {
    control: PropTypes.any.isRequired,
    name: PropTypes.string,
    type: PropTypes.string
};

InputText.isForm = true;
InputText.typeElement = 'inputText';

export default InputText;

// onChange={onChange}
// value={value}
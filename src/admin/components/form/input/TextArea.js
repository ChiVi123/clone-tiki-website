import clsx from "clsx";
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

function TextArea({
    control,
    name,
    type,
    onFocus,
    onBlur
}) {
    const { field } = useController({
        control,
        name,
        defaultValue: ""
    });

    return (<textarea
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
            "pr-10",
            "text-[1.2em]")}
        id={name}
        type={type}
        onFocus={onFocus}
        {...field}
        onBlur={onBlur}
        rows={3}
    ></textarea>);
};

TextArea.propTypes = {
    control: PropTypes.any.isRequired,
    name: PropTypes.string,
    type: PropTypes.string
};

TextArea.isForm = true;
TextArea.typeElement = 'textArea';

export default TextArea;
import clsx from "clsx";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import * as Input from "../input";
import * as Icon from "../icons";

function FormGroupText({
    control,
    name,
    type,
    messageError,
    watch,
    setValue,
    Component = Input.InputText,
    context,
    hidden
}) {
    const [focus, setFocus] = useState(false);

    const handleFocus = () => setFocus(true);
    const handleBlur = () => {
        if (!watch(name))
            setFocus(false);
    };
    const handleClear = () => setValue(name, '');

    useEffect(() => {
        if (watch(name) || watch(name) === 0)
            setFocus(true);
    }, [watch, name])

    return (<div className={clsx("relative",
        "w-80",
        "h-12", {
        "hidden": hidden,
        "mb-8": Component.typeElement !== 'textArea',
        "mb-24": Component.typeElement === 'textArea',
    })}>
        {Component.isForm ? <Component
            control={control}
            name={name}
            type={type}
            onFocus={handleFocus}
            onBlur={handleBlur}
        /> : <></>}

        <Input.Placeholder
            focus={focus}
            onClick={handleFocus}
        >
            {context}
        </Input.Placeholder>

        {messageError && <span className={clsx("absolute",
            "-top-6",
            "right-2",
            "text-red-400",
            "bg-slate-50",
            "p-1",
            "border",
            "border-amber-400",
            "rounded-md",
            "z-10")}
        >
            {messageError}
        </span>}

        {type !== 'number' ?
            <div className={clsx("absolute",
                "top-1/2",
                "right-[.4rem]",
                "-translate-y-1/2",
                "p-2",
                "cursor-pointer")}
                onClick={handleClear}
            >
                <Icon.IconX />
            </div> : <></>}
    </div>);
};

FormGroupText.propType = {
    control: PropTypes.any.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    messageError: PropTypes.string
};

export default FormGroupText;
import clsx from "clsx";
import { Dialog } from '@material-ui/core';

function Dialog({ ComponentButton, ComponentContent, onClick }) {
    return (<Dialog
        open={true}
        clasName={clsx("bg-white",
            "fixed",
            "flex",
            "justify-center",
            "align-center",
            "shadow-2xl",
            "rounded-2xl")}
    >
        <div className="flex flex-col">
            <div
                open={false}
                className="flex justify-end"
                onClick={onClick}
            >
                {ComponentButton.isDialog && <ComponentButton />}
            </div>
        </div>
        {ComponentContent.isDialog && <ComponentContent />}
    </Dialog>);
};

export default Dialog;
import clsx from 'clsx';
import { Link, useParams } from 'react-router-dom';

import { WrapperBody } from '../../components';
import { Spinner } from '../../components/loading';

function LayoutProduct({
    ComponentForm,
    ComponentButton,
    path,
    isLoading
}) {
    const { action } = useParams();
    console.log(action);

    if (action === 'add') isLoading = false;

    return (<WrapperBody>
        {isLoading && <Spinner />}

        {isLoading || (<div className={clsx("max-h-full",
            "overflow-auto",
            "rounded-xl")}
        >
            <div className={clsx("relative")}>
                <div className={clsx("absolute",
                    "top-2",
                    "right-2",
                    "z-10")}
                >
                    <Link to={path}>
                        {ComponentButton.isFormLayout === 'layoutButton' ?
                            <ComponentButton /> :
                            <></>
                        }
                    </Link>
                </div>
            </div>
            {ComponentForm.isFormLayout === 'layoutForm' ?
                <ComponentForm action={action} /> :
                <></>
            }
        </div>)}
    </WrapperBody>);
};

export default LayoutProduct;
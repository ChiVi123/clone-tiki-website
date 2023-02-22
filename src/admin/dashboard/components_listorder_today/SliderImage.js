import Data from './Data';
import ListImage from './List';
import { IconEdit, IconDelete } from "../../components/icons";
function SliderImage({ slider }) {
    return (<tr index-data={slider.index}>
        <ListImage>
            <Data sliders={slider.sliders} />
        </ListImage>

        <ListImage>
            <div>
                <span className="text-blue-500">{slider.status}</span>
            </div>
        </ListImage>

        <ListImage>
            <div className="w-[4rem] flex items-center justify-between">
                <button><IconEdit /></button>
                <button><IconDelete /></button>
            </div>
        </ListImage>
    </tr>);
};

export default SliderImage;
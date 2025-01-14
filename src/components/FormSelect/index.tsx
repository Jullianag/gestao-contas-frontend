import './styles.css';
import Select from "react-select";
import {selectStyles} from "../../utils/select.ts";

export default function FormSelect() {

    return (
        <>
            <Select
                styles={selectStyles}
                className="banco-form-select-container"
                isMulti
            />
        </>
    );
}
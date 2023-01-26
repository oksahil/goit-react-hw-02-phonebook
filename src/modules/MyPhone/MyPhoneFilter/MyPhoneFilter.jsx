import PropTypes from "prop-types";

import css from "./myPhoneFilter.module.css"

const MyPhoneFilter = ({ handleChange }) => {
    return (
        <div className={css.formInput}>
            <label className={css.labelText}>Find contacts by name</label>
            <input
                onChange={handleChange}
                type="text"
                name="filter"
            />
        </div>
    )
}

export default MyPhoneFilter;

MyPhoneFilter.propTypes = {
    handleChange: PropTypes.func.isRequired,
}
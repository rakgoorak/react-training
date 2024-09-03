import React from 'react';
import AutoCompleteV2 from '../../components/AutoCompleteV2/AutoCompleteV2';

function AutoComplete() {
    const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];

    return (
        <div>
            <AutoCompleteV2 options={options} />
        </div>
    );
}

export default AutoComplete;

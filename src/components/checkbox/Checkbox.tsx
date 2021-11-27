import styled from '@emotion/styled';
import React, { useState } from 'react';
import CheckedIcon from '../../assets/checkbox-checked.svg'
import UnCheckedIcon from '../../assets/checkbox-unchecked.svg'

const HiddenCheckbox = styled.input({
    display: 'none',
})
const StyledLabel = styled.label({
})

const Checked = styled(CheckedIcon)({});
const UnChecked = styled(UnCheckedIcon)({});
const Checkbox = () => {
    const [checkBoxState, setCheckboxState] = useState(false);
    return (
        <StyledLabel>
            <HiddenCheckbox checked={checkBoxState} onChange={e => setCheckboxState(e.target.checked)}  type="checkbox" />
            {checkBoxState ? <Checked /> : <UnChecked /> }
        </StyledLabel>
    )
}

export default Checkbox

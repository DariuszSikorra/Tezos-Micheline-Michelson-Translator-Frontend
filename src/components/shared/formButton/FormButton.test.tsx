import React from 'react';
import FormButton from './FormButton';
import { mount } from 'enzyme';
import { ButtonProps } from './types';

const defaultProps: ButtonProps = {
    type: 'submit',
    label: 'test label',
    className: '',
    onClick: () => { },
    disabled: false,
}

describe("Form Button", () => {
    const wrapper = mount(<FormButton {...defaultProps} />)

    it('matches snapshot', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const item = wrapper.find(FormButton);

        expect(
            item
                .at(0)
                .find("[data-testid='form-button']")
                .at(0)
                .text()
        ).toEqual("test label");
    });
});

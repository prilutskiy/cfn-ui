import React, { Component } from 'react';
import Input from './../components/Input';
import Button from './../components/Button';
import Select from './../components/Select';
import Checkbox from './../components/Checkbox';
import RadioGroup from './../components/RadioGroup';
import DropdownMenu from './../components/DropdownMenu';
import ToggleSwitch from './../components/ToggleSwitch';

import FormGroup from './../components/FormGroup';

class FormDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dropdownBtn = <Button>Dropdown <i className="fa fa-caret-down" /></Button>
    return (
      <div style={{ textAlign: 'left' }}>
        <div>
          <FormGroup>
            <FormGroup.Label>Some label</FormGroup.Label>
            <FormGroup.Hint>Form control description</FormGroup.Hint>
            <FormGroup.Body>
              <Input md icon="i-cursor" />
            </FormGroup.Body>
            <FormGroup.Addons>
              <Button primary>Some button</Button>
              <DropdownMenu trigger={dropdownBtn}>
                <DropdownMenu.Item>Action 1</DropdownMenu.Item>
                <DropdownMenu.Item>Action 2</DropdownMenu.Item>
                <DropdownMenu.Item divider />
                <DropdownMenu.Item>Action 3</DropdownMenu.Item>
              </DropdownMenu>
            </FormGroup.Addons>
          </FormGroup>
        </div>
        <div>
          <FormGroup inline>
            <FormGroup.Label>Some label</FormGroup.Label>
            <FormGroup.Hint>Form control description</FormGroup.Hint>
            <FormGroup.Body>
              <Select md primary options={[{ value: 0, label: '0' }]} icon="i-cursor" />
            </FormGroup.Body>
            <FormGroup.Addons>
              <Button primary>Some button</Button>
              <DropdownMenu trigger={dropdownBtn}>
                <DropdownMenu.Item>Action 1</DropdownMenu.Item>
                <DropdownMenu.Item>Action 2</DropdownMenu.Item>
                <DropdownMenu.Item divider />
                <DropdownMenu.Item>Action 3</DropdownMenu.Item>
              </DropdownMenu>
            </FormGroup.Addons>
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <FormGroup.Label>Some label</FormGroup.Label>
            <FormGroup.Hint>Form control description</FormGroup.Hint>
            <FormGroup.Body>
              <Input md info icon="i-cursor" />
              <Select md info options={[{ value: 0, label: '0' }]} icon="i-cursor" />
            </FormGroup.Body>
            <FormGroup.Addons>
              <Button primary>Some button</Button>
              <DropdownMenu trigger={dropdownBtn}>
                <DropdownMenu.Item>Action 1</DropdownMenu.Item>
                <DropdownMenu.Item>Action 2</DropdownMenu.Item>
                <DropdownMenu.Item divider />
                <DropdownMenu.Item>Action 3</DropdownMenu.Item>
              </DropdownMenu>
            </FormGroup.Addons>
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <FormGroup.Label>Some label</FormGroup.Label>
            <FormGroup.Hint>Form control description</FormGroup.Hint>
            <FormGroup.Body>
              <Checkbox label="Some checkbox" />
              <Checkbox primary label="Some checkbox" />
              <Checkbox success label="Some checkbox" />
            </FormGroup.Body>
            <FormGroup.Addons>
              <Button primary>Some button</Button>
              <DropdownMenu trigger={dropdownBtn}>
                <DropdownMenu.Item>Action 1</DropdownMenu.Item>
                <DropdownMenu.Item>Action 2</DropdownMenu.Item>
                <DropdownMenu.Item divider />
                <DropdownMenu.Item>Action 3</DropdownMenu.Item>
              </DropdownMenu>
            </FormGroup.Addons>
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <FormGroup.Label>Some label</FormGroup.Label>
            <FormGroup.Hint>Form control description</FormGroup.Hint>
            <FormGroup.Body>
              <RadioGroup>
                <RadioGroup.Item value={1}>First</RadioGroup.Item>
                <RadioGroup.Item value={2}>Second</RadioGroup.Item>
                <RadioGroup.Item value={3}>Third</RadioGroup.Item>
              </RadioGroup>
            </FormGroup.Body>
            <FormGroup.Addons>
              <Button primary>Some button</Button>
              <DropdownMenu trigger={dropdownBtn}>
                <DropdownMenu.Item>Action 1</DropdownMenu.Item>
                <DropdownMenu.Item>Action 2</DropdownMenu.Item>
                <DropdownMenu.Item divider />
                <DropdownMenu.Item>Action 3</DropdownMenu.Item>
              </DropdownMenu>
            </FormGroup.Addons>
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <FormGroup.Label>Toggle Switches</FormGroup.Label>
            <FormGroup.Hint>Custom toggle switch controls example</FormGroup.Hint>
            <FormGroup.Body>
              <ToggleSwitch default />
              <ToggleSwitch primary />
              <ToggleSwitch success disabled value />
              <ToggleSwitch info />
              <ToggleSwitch warning value/>
              <ToggleSwitch danger />
            </FormGroup.Body>
            <FormGroup.Addons>
              <Button primary>Some button</Button>
              <DropdownMenu trigger={dropdownBtn}>
                <DropdownMenu.Item>Action 1</DropdownMenu.Item>
                <DropdownMenu.Item>Action 2</DropdownMenu.Item>
                <DropdownMenu.Item divider />
                <DropdownMenu.Item>Action 3</DropdownMenu.Item>
              </DropdownMenu>
            </FormGroup.Addons>
          </FormGroup>
        </div>
      </div>
    );
  }
}

export default FormDemo;
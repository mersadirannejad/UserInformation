import {
    unstable__FluidSelect as FluidSelect,
    unstable__FluidTextInput as FluidTextInput,
    unstable__FluidDatePicker as FluidDatePicker,
    unstable__FluidDatePickerInput as FluidDatePickerInput,
    SelectItem,
    Grid,
    Column,
    Button
} from '@carbon/react'
import moment from 'moment/moment'
import { useState } from 'react'

const Form = ({ setData }) => {

    const [firstName, setfirstName] = useState()
    const [lastName, setlastName] = useState()
    const [birthdayDate, setbirthdayDate] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState()
    const [id, setId] = useState(0)

    const handleFirstName = (e) => {
        setfirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setlastName(e.target.value)
    }

    const handleBirthdayDate = (e) => {
        let objectDate = moment(new Date(e)).format('MM-D-YYYY')
        setbirthdayDate(objectDate)
        let birthdayDate = new Date(e)
        let year = new Date()
        let age = year.getFullYear() - birthdayDate.getFullYear()
        setAge(age)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const handleSubmit = () => {
        if (firstName.length && lastName.length && birthdayDate.length && gender.length > 0)
            setData((perVal) => [
                {
                    id: String(id),
                    firstName: firstName,
                    lastName: lastName,
                    birthdayDate: birthdayDate,
                    age: age,
                    gender: gender,
                },
                ...perVal
            ])
        setId(id + 1)
        setfirstName('')
        setlastName('')
        setGender('')
        setbirthdayDate('')
    }

    return (
        <div>
            <Grid condensed style={{ marginTop: '1rem' }}>
                <Column lg={4}>
                    <div>
                        <FluidTextInput
                            labelText="First name"
                            placeholder="First name"
                            id="input-1"
                            value={firstName}
                            onChange={handleFirstName}
                        />
                    </div>
                </Column>
                <Column lg={4}>
                    <div>
                        <FluidTextInput
                            onChange={handleLastName}
                            value={lastName}
                            labelText="Last name" placeholder="Last name" id="input-2" />
                    </div>
                </Column>
                <Column lg={4}>
                    <FluidDatePicker
                        onChange={handleBirthdayDate}
                        value={birthdayDate}
                        datePickerType="single">
                        <FluidDatePickerInput
                            placeholder="mm/dd/yyyy" labelText='Date of birth' id="date-picker-single" />
                    </FluidDatePicker>
                </Column>
                <Column lg={4}>
                    <FluidSelect
                        value={gender}
                        onChange={handleGender}
                        id=''
                        labelText="Gender">
                        <SelectItem value="" text="" />
                        <SelectItem value="Female" text="Female" />
                        <SelectItem value="Male" text="Male" />
                    </FluidSelect>
                </Column>
            </Grid>
            <Grid condensed style={{ marginTop: '1rem' }}>
                <Column lg={16}>
                    <Button onClick={handleSubmit}>Button</Button>
                </Column>
            </Grid>
        </div>
    )
}

export default Form
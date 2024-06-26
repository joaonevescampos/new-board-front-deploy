import React from 'react';
import Input from '../../components/Input/index';
import styles from './index.module.css';
import { FaRegUser } from "react-icons/fa";

const NameInput = ({ name, placeholder, register, errors }) => {
    return (
        <div className={styles.input_name}>
            <Input
                {...register(name,
                    {
                        required: 'Name is required',
                        minLength: { value: 3, message: 'Name must have at least 3 characters' },
                    })
                }
                type='text' placeholder={placeholder} style={errors[name]?.message ? 'input_error' : 'input_default'} />
                <FaRegUser className={styles.icon} />
            <p className={styles.message_error}>{errors[name]?.message}</p>
        </div>
    );
};

export default NameInput;
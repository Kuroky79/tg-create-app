import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../hooks/useTelegram";

const Form = () => {
    const [phio, setPhio] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            phio,
            city,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [phio, city, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!phio || !city) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [phio, city])

    const onChangePhio = (e) => {
        setPhio(e.target.value)
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                value={phio}
                onChange={onChangePhio}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Улица'}
                value={city}
                onChange={onChangeCity}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Ученик</option>
                <option value={'legal'}>Учитель</option>
            </select>
        </div>
    );
};

export default Form;

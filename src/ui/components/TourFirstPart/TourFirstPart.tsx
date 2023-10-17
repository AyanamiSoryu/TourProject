import React from 'react';
import classNames from './TourFirstPart.modules.scss';
import { useTranslation } from "react-i18next";

const TourFirstPart = () => {

    const { t } = useTranslation();
    return (
        <div className={classNames.root} style={{backgroundImage: 'url(https://cdn.tripster.ru/thumbs2/0e7c6bc8-faf2-11ed-82ad-12199f507f99.1600x900.jpeg)'}}>
            <div className={classNames.margin}>
                <h1 className={classNames.h1}>{t('Кахетия — родина вина, чачи и красоты!')}</h1>
                <div className={classNames.degustation}>{t('Дегустации, очаровательный Сигнахи, монастырь Бодбе и Телави в экскурсии на микроавтобусе')}</div>
                <div className={classNames.tour}>{t('Экскурсия')}</div>
            </div>
        </div>
    )
}

export default TourFirstPart;

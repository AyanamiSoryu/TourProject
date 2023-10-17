import React from 'react';
import classNames from './TourFirstPart.modules.scss';
import { useTranslation } from "react-i18next";
import jpeg from '../../../data/imageMock/tourfirstimage.jpg'

const TourFirstPart = () => {

    const { t } = useTranslation();
    return (
        <div className={classNames.root} style={{backgroundImage: `url(${jpeg})`}}>
            <div className={classNames.margin}>
                <h1 className={classNames.h1}>{t('Кахетия — родина вина, чачи и красоты!')}</h1>
                <div className={classNames.degustation}>{t('Дегустации, очаровательный Сигнахи, монастырь Бодбе и Телави в экскурсии на микроавтобусе')}</div>
                <div className={classNames.tour}>{t('Экскурсия')}</div>
            </div>
        </div>
    )
}

export default TourFirstPart;

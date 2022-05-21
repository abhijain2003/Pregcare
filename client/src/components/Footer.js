import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {

    const { t } = useTranslation();

    return (
        <div className="grid place-items-center bg-secondary py-2 text-xl">&copy; {t('footerdesc')}</div>
    )
}

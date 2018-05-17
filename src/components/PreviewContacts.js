import React from 'react';

function PreviewContacts() {
    return(
        <div className="preview__contacts">
            <p className="preview__contacts__paragraph">Berbershop Borodinskyy <br/>
                Address: KYIV, 99 OLEGA VINNIKA STREET <br/>
                PHONE: +38(044)550-05-55
            </p>
            <p className="preview__contacts__paragraph">Working hours: <br/>
                monday - friday: from <time>10.00</time> to <time>22.00</time>
                <br/>
                saturday - sunday: from <time>10.00</time> to <time>19.00</time>
            </p>
        </div>
    )
}

export default PreviewContacts;

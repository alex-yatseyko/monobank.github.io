import React from 'react';

export function getText(text) {
    try {
        const span = text.match(/\/b.+\/b/);
        
        if(span) {
            const start =  text.slice(0, span.index);
            const center = span[0].replace(/\/b/g,"");
            const end =  text.slice(span.index + span[0].length);
            return <React.Fragment>{start}<span className="blue">{center}</span>{end}</React.Fragment>;
        }
        return <React.Fragment>{text}</React.Fragment>
    } catch (e) {
        console.log(e);
    }
    
}

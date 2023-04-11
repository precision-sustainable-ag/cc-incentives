import React from 'react';

const GoogleWrapper = ({ type }) => {
    console.log(type)
    if(type === 'form'){
        console.log('Form type')
        return (
            <div>
              <iframe style={{width:'100%', height:"500px", overflow:'hidden', frameborder:0}}  width="100%" src="https://docs.google.com/forms/d/e/1FAIpQLSeABDK1vVCk5g7dhjtD25jsJm_aLP7x6uuAmHKxgUqE542JRg/viewform?embedded=true"></iframe>
            </div>
        );
    } else {
        console.log('not form type')
        return (
            <div>
              <iframe style={{width:'100%', height:"500px", overflow:'hidden', frameborder:0}}  width="100%" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR7Y4FIz60wh1UBMV_pq87WCVNthXhPhoSDV2tzrsv7Psa-ds58EpH5HC9Daky3YnZ4YLMvWmiMN69G/pubhtml?widget=true&amp;headers=false"></iframe>
            </div>
        );
    }
  
};

export default GoogleWrapper;
import React from 'react';

const GoogleWrapper = ( type ) => {
    if(type === 'form'){
        return (
            <div>
              <iframe frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR7Y4FIz60wh1UBMV_pq87WCVNthXhPhoSDV2tzrsv7Psa-ds58EpH5HC9Daky3YnZ4YLMvWmiMN69G/pubhtml?widget=true&amp;headers=false"></iframe>
            </div>
        );
    } else {
        return (
            <div>
              <iframe style={{width:'100%', height:"500px", overflow:'hidden', frameborder:0}}  width="100%" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR7Y4FIz60wh1UBMV_pq87WCVNthXhPhoSDV2tzrsv7Psa-ds58EpH5HC9Daky3YnZ4YLMvWmiMN69G/pubhtml?widget=true&amp;headers=false"></iframe>
            </div>
        );
    }
  
};

export default GoogleWrapper;
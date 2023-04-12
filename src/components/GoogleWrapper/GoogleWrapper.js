import React from 'react';
import PropTypes from 'prop-types';

const GoogleWrapper = ({ type }) => {
    if(type === 'form'){
        return (
            <div>
              <iframe style={{width:'100%', height:"70vh", overflow:'hidden', frameborder:0}}  width="100%" src="https://docs.google.com/forms/d/e/1FAIpQLSeABDK1vVCk5g7dhjtD25jsJm_aLP7x6uuAmHKxgUqE542JRg/viewform?embedded=true"></iframe>
            </div>
        );
    } else {
        return (
            <div>
              <iframe style={{width:'100%', height:"60vh", overflow:'hidden', frameborder:0}}  width="100%" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR7Y4FIz60wh1UBMV_pq87WCVNthXhPhoSDV2tzrsv7Psa-ds58EpH5HC9Daky3YnZ4YLMvWmiMN69G/pubhtml?widget=true&amp;headers=false"></iframe>
            </div>
        );
    }
  
};

GoogleWrapper.propTypes = {
    type: PropTypes.string
}

export default GoogleWrapper;
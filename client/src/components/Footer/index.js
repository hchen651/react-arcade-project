//React
import React from 'react';

//Stylesheet
import './style.css';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <span>Rearcade © 2019. All Rights Reserved </span>
                <a target="_blank" href="https://github.com/hchen651/react-arcade-project">
                    <FontAwesomeIcon icon={faGithubAlt} />
                </a>
            </footer>
        );
    }
}

export default Footer; 
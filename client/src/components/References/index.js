import React from 'react';
import './references.css';

function References() {
    return (
        <div>
            <ul className="refList">
                <li><a id="footLink" href="https://www.seafoodwatch.org/seafood-recommendations" target="_blank" rel="noopener noreferrer">Monterey Bay Aquarium Seafood Watch</a></li>
                <li><a id="footLink" href="https://www.adfg.alaska.gov/index.cfm?adfg=fishingSportFishingInfo.rockfishconservation" target="_blank" rel="noopener noreferrer">Alaska Department of Fish and Game</a></li>
                <li><a id="footLink" href="https://www.fws.gov/endangered/" target="_blank" rel="noopener noreferrer">U.S. Fish &amp; Wildlife Service</a></li>
                <li><a id="footLink" href="https://www.fishbase.se/search.php" target="_blank" rel="noopener noreferrer">Fishbase</a></li>
                <li><a id="footLink" href="https://www.canada.ca/en/services/environment/wildlife-plants-species/species-risk.html">Government of Canada Species At Risk</a></li>
                <li><a id="footLink" href="https://wildlife.ca.gov/Fishing/Ocean/Fish-ID/Sportfish/Rockfish" target="_blank" rel="noopener noreferrer">California Department of Fish and Wildlife</a></li>
            </ul>
        </div>
    );
}

export default References;
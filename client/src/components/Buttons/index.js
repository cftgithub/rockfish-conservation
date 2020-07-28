import React from "react";
import "./style.css";
import { OverlayTrigger, Button, Popover } from "react-bootstrap";

const popoverGood = (
  <Popover id="popGood">
    <Popover.Content>
      Populations of these species seem healthy and able to withstand current
      fishing pressures.
    </Popover.Content>
  </Popover>
);

const popoverVul = (
  <Popover id="popVul">
    <Popover.Content>
      There is reason to believe the species may become threatened in the
      foreseeable future. They are susceptible to bycatch or are undergoing
      heavy fishing pressure and their populations have not been adequately
      assessed. Populations may be doing well in some regions but poor in other
      regions.
    </Popover.Content>
  </Popover>
);

const popoverThreat = (
  <Popover id="popThreat">
    <Popover.Content>
      Federally listed as threatened; the species is likely to become endangered
      in the foreseeable future.
    </Popover.Content>
  </Popover>
);

const popoverEndanger = (
  <Popover id="popEndanger">
    <Popover.Content>
      Federally listed as endangered; the species is in danger of extinction
      throughout all or most of it's habitation range.
    </Popover.Content>
  </Popover>
);

const popoverUnknown = (
  <Popover id="popUnknown">
    <Popover.Content>
      We simply do not know how these species are doing. Rockfish are difficult
      to study and it is not always possible to get an assessment of specific
      species populations. This is perhaps the worst category since we could
      think there is no problem when there is really a major one!
    </Popover.Content>
  </Popover>
);

function Buttons() {
    return (
       <div className="buttons">
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={popoverGood}
            >
                <Button variant="success" id="good">Good</Button>
            </OverlayTrigger>
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={popoverVul}
            >
                <Button variant="success" id="vulnerable">Vulnerable</Button>
            </OverlayTrigger>
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={popoverThreat}
            >
                <Button variant="success" id="threatened">Threatened</Button>
            </OverlayTrigger>
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={popoverEndanger}
            >
                <Button variant="success" id="endangered">Endangered</Button>
            </OverlayTrigger>
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={popoverUnknown}
            >
                <Button variant="success" id="unknown">Unknown</Button>
            </OverlayTrigger>
        </div>
    );
}

// function Buttons(props) {
//     return (
//         <div className="buttons">
//                 <button type="button" class="btn btn-secondary" data-toggle="popover" data-trigger="hover" title="Good" data-content="Populations of these species seem healthy and able to withstand current fishing pressures."> {props.title} </button>
//         </div>
//     );
// }

export default Buttons;
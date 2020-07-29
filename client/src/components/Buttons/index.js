import React from "react";
import { OverlayTrigger, Popover, Button } from 'react-bootstrap'
import "./style.css";

const popGood = (
    <Popover id="popGood">
        <Popover.Title as="h3" bg>Good</Popover.Title>
        <Popover.Content>
            Populations of these species seem healthy and able to withstand current
            fishing pressures.
    </Popover.Content>
    </Popover>
)
const popVul = (
    <Popover id="popVul">
        <Popover.Title as="h3">Vulnerable</Popover.Title>
      <Popover.Content>
        There is reason to believe the species may become threatened in the
        foreseeable future. They are susceptible to bycatch or are undergoing
        heavy fishing pressure and their populations have not been adequately
        assessed. Populations may be doing well in some regions but poor in other
        regions.
      </Popover.Content>
    </Popover>
  );

  const popThreat = (
    <Popover id="popThreat">
        <Popover.Title as="h3">Threatened</Popover.Title>
      <Popover.Content>
        Federally listed as threatened; the species is likely to become endangered
        in the foreseeable future.
      </Popover.Content>
    </Popover>
  );

  const popEndanger = (
    <Popover id="popEndanger">
        <Popover.Title as="h3">Endangered</Popover.Title>
      <Popover.Content>
        Federally listed as endangered; the species is in danger of extinction
        throughout all or most of it's habitation range.
      </Popover.Content>
    </Popover>
  );

  const popUnk = (
    <Popover id="popUnknown">
        <Popover.Title as="h3">Unknown</Popover.Title>
      <Popover.Content>
        We simply do not know how these species are doing. Rockfish are difficult
        to study and it is not always possible to get an assessment of specific
        species populations. This is perhaps the worst category since we could
        think there is no problem when there is really a major one!
      </Popover.Content>
    </Popover>
  );

function Buttons(props) {
    return (
        <div className="buttons">
            <OverlayTrigger trigger="hover" overlay={popGood}>
                <Button variant="info">Good</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="hover" placement="bottom" overlay={popVul}>
                <Button variant="info">Vulnerable</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="hover" overlay={popThreat}>
                <Button variant="info">Threatened</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="hover" overlay={popEndanger}>
                <Button variant="info">Endangered</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="hover" placement="bottom" overlay={popUnk}>
                <Button variant="info">Unknown</Button>
            </OverlayTrigger>
        </div>
    );
}

export default Buttons;
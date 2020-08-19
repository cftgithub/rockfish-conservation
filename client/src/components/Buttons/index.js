import React from "react";
import { OverlayTrigger, Popover, Button, Container } from 'react-bootstrap'
import "./style.css";

const popAll = (
  <Popover id="popAll">
    <Popover.Content>
      <h6>View all rockfish species.</h6>
    </Popover.Content>
  </Popover>
);

const popGood = (
  <Popover id="popGood">
    <Popover.Content>
      <h4>Good</h4>
      <p>Populations of these species seem healthy and able to withstand current
      fishing pressures.</p>
    </Popover.Content>
  </Popover>
);

const popVul = (
  <Popover id="popVul">
    <Popover.Content>
      <h4>Vulnerable</h4>
      <p>There is reason to believe the species may become threatened in the
      foreseeable future. They are susceptible to bycatch or are undergoing
      heavy fishing pressure and their populations have not been adequately
      assessed. Populations may be doing well in some regions but poor in other
      regions.</p>
    </Popover.Content>
  </Popover>
);

const popThreat = (
  <Popover id="popThreat">
    <Popover.Content>
      <h4>Threatened</h4>
      <p>Federally listed as threatened; the species is likely to become endangered
      in the foreseeable future.</p>
    </Popover.Content>
  </Popover>
);

const popEndanger = (
  <Popover id="popEndanger">
    <Popover.Content>
      <h4>Endangered</h4>
      <p>Federally listed as endangered; the species is in danger of extinction
      throughout all or most of it's habitation range.</p>
    </Popover.Content>
  </Popover>
);

const popUnk = (
  <Popover id="popUnknown">
    <Popover.Content>
      <h4>Unknown</h4>
      <p>We simply do not know how these species are doing. Rockfish are difficult
      to study and it is not always possible to get an assessment of specific
      species populations. This is perhaps the worst category since we could
      think there is no problem when there is really a major one!</p>
    </Popover.Content>
  </Popover>
);

const popGame = (
  <Popover id="popGame">
    <Popover.Content>
      <h6>Test your rockfish knowledge.</h6>
    </Popover.Content>
  </Popover>
);

function Buttons({ filterFish }) {
  return (
    <div className="buttons">
      <Container>
        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popAll}>
          <Button onClick={() => { filterFish("All") }} variant="info">All</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popGood}>
          <Button onClick={() => { filterFish("Good") }} variant="info">Good</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popVul}>
          <Button onClick={() => { filterFish("Vulnerable") }} variant="info">Vulnerable</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popThreat}>
          <Button onClick={() => { filterFish("Threatened") }} variant="info">Threatened</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popEndanger}>
          <Button onClick={() => { filterFish("Endangered") }} variant="info">Endangered</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popUnk}>
          <Button onClick={() => { filterFish("Unknown") }} variant="info">Unknown</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popGame}>
          <Button variant="info" href="https://cftgithub.github.io/rockfishGame/" target="_blank">Play Game</Button>
        </OverlayTrigger>
      </Container>
    </div>
  );
}

export default Buttons;
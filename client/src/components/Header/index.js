import React from "react";
import "./style.css";

function Heading() {
    return (
        <div className="hero">
            <h1 className="title">Rockfish Identification</h1>
                <button type="button" class="btn btn-primary" data-toggle="popover" data-trigger="hover"
                    title="Good" data-content="Populations of these species seem healthy and able to withstand current fishing pressures.">Good</button>
                <button type="button" class="btn btn-primary" data-toggle="popover" data-trigger="hover"
                    title="Vulnerable" data-content="There is reason to believe the species may become threatened in the foreseeable future. 
                They are susceptible to bycatch or are undergoing heavy fishing pressure and their populations have not been adequately assessed. 
                Populations may be doing well in some regions but poor in other regions.">Vulnerable</button>
                <button type="button" class="btn btn-primary" data-toggle="popover" data-trigger="hover"
                    title="Threatened" data-content="Federally listed as threatened; the species is likely to become endangered in the foreseeable future.">Threatened</button>
                <button type="button" class="btn btn-primary" data-toggle="popover" data-trigger="hover"
                    title="Endangered" data-content="Federally listed as endangered; the species is in danger of extinction throughout all or most of it's habitation range.">Endangered</button>
                <button type="button" class="btn btn-primary" data-toggle="popover" data-trigger="hover"
                    title="Unknown" data-content="We simply do not know how these species are doing. 
                    Rockfish are difficult to study and it is not always possible to get an assessment of specific species populations. 
                    This is perhaps the worst category since we could think there is no problem when there is really a major one!">Unknown</button>
        </div>
    );
}

export default Heading;
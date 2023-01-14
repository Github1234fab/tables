import React, { useState } from 'react';
import arrowCollapse from "../../assets/arrow_collapse.svg";
import "./Collapse.css";

const Collapse = ({ title, description, id }) => {
    const [open, setOpen] = useState(false);
    const arrowClick = () => {
        setOpen(open === true ? false : true)
    }
    return (
        <div className="collapse" key={id}>
            <div className="collapse_header">
                <div className="collapse_title">{title}</div>
                <span className={`collapse_arrow ${open}`}
                    onClick={arrowClick}>
                    <img src={arrowCollapse} alt="Ouvrir ou fermer le contenu" />
                </span>
            </div>
            {open && <div className="collapse_description">{description}</div>}
        </div>
    );
}


export default Collapse;
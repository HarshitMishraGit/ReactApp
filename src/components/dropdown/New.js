import React from 'react';
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import DropdownLink from "@material-tailwind/react/DropdownLink"
const New = () => {
    const evenHandeler = (e) => {
        e.preventDefault()
    }
    return (
        <div>
<button
  className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-orange-500 hover:bg-orange-700 focus:bg-orange-400 active:bg-orange-800 shadow-md-orange hover:shadow-lg-orange undefined"
  style={{ position: "relative", overflow: "hidden" }}
>
  Button
            </button>
            


                        <Dropdown
            color="lightBlue"
            placement="bottom-start"
            buttontext="Dropdown"
            buttontype="outline"
            size="regular"
            rounded="{false}"
            block="{false}"
            ripple="dark"
            >
            <DropdownItem color="lightBlue" ripple="light">
                Action
            </DropdownItem>
            <DropdownLink href="#" color="{color}" ripple="light" onClick={evenHandeler}>
                Another Action
            </DropdownLink>
            <DropdownItem color="lightBlue" ripple="light">
                Something else
            </DropdownItem>
            </Dropdown>


        </div>
    );
}

export default New;

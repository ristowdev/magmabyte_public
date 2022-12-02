import React, { useState } from "react";
import DropDown from "../DropDowns/DefaultDropDown";
import { Choose } from "./styles";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

type DefaultMenuProps = {
    options: string[]; 
    label?: string;
    defaultSelected?: string;
    selectPageVisibility: Function;
};

const DefaultMenu: React.FC<DefaultMenuProps> = ({
        options,
        label,
        defaultSelected,
        selectPageVisibility
    }:DefaultMenuProps
): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectoption, setSelectoption] = useState<string>("");

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = (): void => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * option name from the child component
   *
   * @param option  The selected option
   */
  const optionSelection = (option: string): void => {
    selectPageVisibility(option);
    setSelectoption(option);
  };

  return (
    <>
       
      <Choose
        className={showDropDown ? "active" : undefined}
        onClick={(e): void => {e.preventDefault(); toggleDropDown();}}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div
            style={{
                display:'flex',
                alignItems:'center'
            }}
        >
            <div>{selectoption ? (
                <>
                    {label} 
                    <span style={{color:'black'}}>
                        <b>{selectoption}</b>
                    </span>
                </>
                ) : (
                    <>
                    {label} 
                    <span style={{color:'black'}}>
                        <b>{defaultSelected}</b>
                    </span>
                </>
                )} 
            </div>

            <MdOutlineKeyboardArrowDown 
                size={20}
                style={{
                    marginLeft:'5px'
                }}
                className={showDropDown ? "i-d-sla active" : 'i-d-sla'}
            />
        </div>

        {showDropDown && (
          <DropDown
            options={options}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            optionSelection={optionSelection}
          />
        )}
      </Choose>
    </>
  );
};

export default DefaultMenu;

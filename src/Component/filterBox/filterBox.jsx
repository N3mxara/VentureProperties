import CancelBtn from "../../assets/SecondFilterBox/cancelBtn.png";
import SelectForms from "./SelectFeild";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Logo from "../../assets/2page/logo ong.png";
import FilterIcon from "../../assets/SecondFilterBox/FIlterICon.png";
import "./filterbox.css";

function FilterBox() {
  return (
    <div>
      <div className="FilterBox">
        <div className="item-form">
          <div className="topic-box">
            <div className="Topic">FILTER STOCK HISTORY</div>
            <div className="cancelImg">
              <img className="CancelImg" src={CancelBtn}  />
            </div>
          </div>
          <div>
            <SelectForms
              selectTopic="Site Name"
              filterPlaceholder=""
              Value1=""
              Value2=""
              Value3=""
            />
            <SelectForms
              selectTopic="Quantity"
              filterPlaceholder=""
              Value1=""
              Value2=""
              Value3=""
            />
            <SelectForms
              selectTopic="Sub Quantity"
              filterPlaceholder=""
              Value1=""
              Value2=""
              Value3=""
            />
          </div>
          <div>
            <div>
              <div className="select-topic">
                <p>date</p>
              </div>
              <div>
                <div>
                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                  />
                </div>
              </div>
            </div>
            <div className="Filter-btn-line">
              <div>
                <img className="Img-box" src={Logo} />
              </div>
              <div>
                <Button
                  className="btn-filter"
                  borderRadius="1rem"
                  m="0.5rem"
                  marginLeft="4rem"
                  fontSize="0.8rem"
                  colorScheme="teal"
                >
                  <img className="filterbox-iconsm" src={FilterIcon} alt="" />
                  FILTER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;

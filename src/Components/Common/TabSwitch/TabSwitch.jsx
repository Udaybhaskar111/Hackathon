import React from 'react';
import { useState } from 'react';
import '../TabSwitch/TabSwitch.scss';
import FilterTab from '../FilterTab/FilterTab';
import Filter from '../../../assests/Filter.svg';
import Sort from '../../../assests/Sort.svg';
import '../../Common/FilterTab/FilterTab.scss';
import vector from '../../../assests/Vector2.svg';
import vector2 from '../../../assests/2nd_vector.svg';
import List from '../../../Pages/ListPage/List';
import AllCards from '../../../Components/AllCards/AllCards';
import bgcolor from '../../../assests/OrangebgColor.svg';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
/**
 * @description: It switches between the tab and has filter,sort buttons
 * and has a toggle for switching b/w grid-view and list-view
 * @author :Charan
 */

const TabSwitch = () => {
  const navigate = useNavigate();
  const [activeTab, setTabActive] = useState(0);

  const ClickedTab = (index) => {
    setTabActive(activeTab === index ? null : index);
  };
  const [activeIndex, setIndexActive] = useState(0);

  const ClickedToggle = (index) => {
    setIndexActive(activeIndex === index ? null : index);
  };
  return (
    <div className="TabSwitch">
      <div className="TabSwitch__div">
        <div
          className={`TabSwitch__div2 ${activeTab === 0 ? 'TabSwitch__div2-active' : 'TabSwitch__div2-nonactive'}`}
          onClick={() => ClickedTab(0)}
        >
          Data Products (150)
          {activeTab === 0 && <div className="underline" />}
        </div>
        <div
          className={`TabSwitch__div2 ${activeTab === 1 ? 'TabSwitch__div2-active' : 'TabSwitch__div2-nonactive'}`}
          onClick={() => ClickedTab(1)}
        >
          Domains (20)
          {activeTab === 1 && <div className="underline" />}
        </div>
        <div
          className={`TabSwitch__div2 ${activeTab === 2 ? 'TabSwitch__div2-active' : 'TabSwitch__div2-nonactive'}`}
          onClick={() => ClickedTab(2)}
        >
          All Categories (05)
          {activeTab === 2 && <div className="underline" />}
        </div>
      </div>

      {/* right part filter,sort,grid-view,list-view */}
      <div className="Tabswitch__right">
        <div className="TabSwitch__filter">
          <FilterTab value="Filters" source={Filter} />
          <FilterTab value="Sort" source={Sort} />
          <div className="GridSwitch">
            <div
              className="GridSwitch__div"
              onClick={() => ClickedToggle(0)}
              style={{
                backgroundImage: activeIndex === 0 ? `url(${bgcolor})` : 'none',
              }}
            >
              <img src={vector} alt="icon" />
            </div>
            <div
              className="GridSwitch__div"
              onClick={() => ClickedToggle(1)}
              style={{
                backgroundImage: activeIndex === 1 ? `url(${bgcolor})` : 'none',
              }}
            >
              <img src={vector2} alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="container">
        <div className="LiveProducts">
          <div className="LiveProduct__div">Live : 86 Products</div>
          <div className="vl"></div>
          <div className="LiveProduct__div">Cache : 64 Products</div>
        </div>
        <div className="formbutton">
          <Button onClick={() => navigate('/form')}>ADD PRODUCT</Button>
        </div>
      </div>
      {activeIndex === 0 ? <AllCards /> : <List />}
    </div>
  );
};

export default TabSwitch;

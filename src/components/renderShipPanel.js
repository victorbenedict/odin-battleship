import bbImage from '../assets/bb.png';
import ccImage from '../assets/cc.png';
import cvImage from '../assets/cv.png';
import ddImage from '../assets/dd.png';
import ssImage from '../assets/ss.png';
import data from '../data/data.json';
import _ from 'lodash';

const shipPanel = () => {
  const shipImageMap = {
    cv: cvImage,
    bb: bbImage,
    cc: ccImage,
    dd: ddImage,
    ss: ssImage,
  };

  const container = document.createElement('div');

  data.ships.map((data) => {
    const imgDiv = document.createElement('div');

    const label = document.createElement('span');
    label.textContent = _.startCase(data.class);
    imgDiv.appendChild(label);

    const id = data.class;
    const shipImage = new Image();
    shipImage.id = id;
    const imageCode = shipImageMap[data.code];
    imgDiv.className = 'shipDiv';
    shipImage.src = imageCode;
    imgDiv.appendChild(shipImage);

    container.appendChild(imgDiv);
  });

  return container;
};

export default shipPanel;

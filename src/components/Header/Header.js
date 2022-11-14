import { Tabs } from 'antd';
import React from 'react';
/*const onChange = (key) => {
  console.log(key);
};*/

const TeamBar = () => (
  <Tabs
    defaultActiveKey="1"
    //onChange={onChange}
    centered={true}
    size="large"
    style={{width: '50%', margin: 'auto', justifyContent: 'center'}}
    items={[
      {
        label: `Tradition`,
        key: '1',
        children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
      {
        label: `Ecology`,
        key: '2',
        children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam erat velit scelerisque in dictum non consectetur a. Nulla facilisi cras fermentum odio eu feugiat pretium. Venenatis urna cursus eget nunc scelerisque viverra. Turpis tincidunt id aliquet risus feugiat in. Elit ut aliquam purus sit amet luctus venenatis lectus. Enim sit amet venenatis urna. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Enim praesent elementum facilisis leo vel fringilla. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Placerat in egestas erat imperdiet sed euismod nisi. Enim blandit volutpat maecenas volutpat blandit.`,
      },
      {
        label: `Solidarity`,
        key: '3',
        children: `Nunc mattis enim ut tellus elementum. Lectus urna duis convallis convallis tellus id interdum velit. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Etiam sit amet nisl purus in mollis nunc. Pulvinar mattis nunc sed blandit libero volutpat sed. In mollis nunc sed id semper risus. Elit sed vulputate mi sit amet mauris commodo. Euismod nisi porta lorem mollis aliquam. Semper auctor neque vitae tempus.`,
      },
      {
        label: `Liberty`,
        key: '4',
        children: `Vel eros donec ac odio. Iaculis eu non diam phasellus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Tincidunt eget nullam non nisi est. Donec ac odio tempor orci. Semper risus in hendrerit gravida. Nec sagittis aliquam malesuada bibendum arcu. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Magna sit amet purus gravida quis. Et tortor at risus viverra adipiscing at in.`,
      },
      {
        label: `Hide text`,
        key: '5',
        children: ``,
      },
    ]}
  />
);
export default TeamBar;
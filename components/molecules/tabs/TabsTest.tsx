import { FC, useState } from 'react';
import { Tabs, TabsProps } from './Tabs';

export const TabsTest: FC = (props: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const setSelectedIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Tabs
      tabNames={['One', 'Two', 'Three', 'Four', 'Five', 'Six']}
      activeIndex={activeIndex}
      onClick={setSelectedIndex}
      {...props}
    ></Tabs>
  );
};

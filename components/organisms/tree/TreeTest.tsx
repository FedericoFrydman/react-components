import { FC, useState } from 'react';
import { Tree, TreeItem } from './Tree';
import { Button } from '../../molecules/button/Button';

const root: TreeItem = {
  children: [],
  id: 0,
  name: 'Root (0)',
};

let idIndex = 1;
for (let i = 0; i < 10; i++) {
  const c1: TreeItem = {
    children: [],
    highlighted: idIndex % 17 == 0,
    id: idIndex++,
    name: 'Child ' + i + ' (' + idIndex + ')',
  };
  root.children.push(c1);
  for (let j = 0; j < 10; j++) {
    const c2: TreeItem = {
      children: [],
      highlighted: idIndex % 17 == 0,
      id: idIndex++,
      name: 'Child ' + i + ' ' + j + ' (' + idIndex + ')',
    };
    c1.children.push(c2);
    for (let k = 0; k < 10; k++) {
      const c3: TreeItem = {
        children: [],
        highlighted: idIndex % 17 == 0,
        id: idIndex++,
        name: 'Child ' + i + ' ' + j + ' ' + k + ' (' + idIndex + ')',
      };
      c2.children.push(c3);
    }
  }
}

export const TreeTest: FC = ({}) => {
  const [data, setData] = useState(root);

  const toggleSelected = (node: TreeItem, id: number) => {
    if (id === -1 || node.id === id) {
      node.selected = !node.selected;
    }
    for (let i = 0; i < node.children.length; i++) {
      toggleSelected(node.children[i], id);
    }
  };

  const setSelected = (node: TreeItem, id: number, v: boolean) => {
    if (id === -1 || node.id === id) {
      node.selected = v;
    }
    for (let i = 0; i < node.children.length; i++) {
      setSelected(node.children[i], id, v);
    }
  };

  const onClick = (id: number) => {
    toggleSelected(data, id);
    setData((data) => ({ ...data }));
  };

  const onSelectAll = () => {
    setSelected(data, -1, true);
    setData((data) => ({ ...data }));
  };

  const onDeselectAll = () => {
    setSelected(data, -1, false);
    setData((data) => ({ ...data }));
  };

  const setExpanded = (node: TreeItem, id: number, v: boolean) => {
    if (id === -1 || node.id === id) {
      node.expanded = v;
    }
    for (let i = 0; i < node.children.length; i++) {
      setExpanded(node.children[i], id, v);
    }
  };

  const onExpand = (id: number) => {
    setExpanded(data, id, true);
    setData((data) => ({ ...data }));
  };

  const onCollapse = (id: number) => {
    setExpanded(data, id, false);
    setData((data) => ({ ...data }));
  };

  const onExpandAll = () => {
    setExpanded(data, -1, true);
    setData((data) => ({ ...data }));
  };

  const onCollapseAll = () => {
    setExpanded(data, -1, false);
    setData((data) => ({ ...data }));
  };

  return (
    <>
      <Button label="Expand All" classNames={['my-2']} onClick={onExpandAll} />
      <Button label="Collapse All" classNames={['my-2']} onClick={onCollapseAll} />
      <Button label="Select All" classNames={['my-2']} onClick={onSelectAll} />
      <Button label="Deselect All" classNames={['my-2']} onClick={onDeselectAll} />

      <Tree
        classNames={['mt-5']}
        root={data}
        allowSelect={true}
        onClick={onClick}
        onExpand={onExpand}
        onCollapse={onCollapse}
      />
    </>
  );
};
